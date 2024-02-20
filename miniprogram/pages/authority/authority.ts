// pages/authority/authority.ts
const sessionModule = require('../../utils/session');
const tgcModule = require('../../utils/tgc')
const cryptoModule = require('../../miniprogram_npm/crypto-js/index.js')
const requestModule = require('../../utils/request')

const executionCookieRegex = /<input type="hidden" name="execution" value="([a-zA-Z0-9]+)"\/>/g
const usernameRegex = /^[0-9a-zA-Z]{3,20}$/g;
const errorMessageRegex = /<p class="error-msg">(.+)<\/p>/g

async function evaluateExecution(): Promise<string> {
  const session = await sessionModule.getSessionStorage();
  const execution = await new Promise<string | undefined>((resolve) => {
    wx.request<string>({
      url: "https://cas.xaufe.edu.cn/login",
      dataType: "其他",
      header: {
        "Cookie": "SESSION=" + session
      },
      success(res) {
        resolve((new RegExp(executionCookieRegex).exec(res.data) ?? [])[1])
      },
      fail(err) {
        throw err;
      }
    })
  })

  if (execution === undefined) {
    throw {
      errMsg: "找不到 Execution",
      errno: 404
    }
  }

  return execution;
}

Page({

  /**
   * Page initial data
   */
  data: {
    isRememberPassword: false,
    captcha: '',

    error: '',

    formData: {
      username: '',
      password: '',
      captcha: '',
    },
    rules: [
      {
        name: "username",
        rules: { required: true, message: "请输入学号/工号" }
      },
      {
        name: "password",
        rules: { required: true, message: "请输入密码" }
      },
      {
        name: "captcha",
        rules: { required: true, message: "请输入验证码" }
      }
    ],
    knownErrors: {
      "authenticationFailure.PasswordErrorException": "密码错误",
      "authenticationFailure.MyAccountNotFoundException": "学号/工号不存在",
      "authenticationFailure.CaptchaErrorException": "验证码错误",
      "authenticationFailure.LockUserNameException": "账户已被锁定，请稍候再试或前往 https://cas.xaufe.edu.cn 重置密码"
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad(options) {
    this.to = options.to ? decodeURI(options.to) : ''
    this.fromTabBar = options.fromTabBar ? Boolean(decodeURI(options.fromTabBar)) : false
    const session = sessionModule.generateSession();

    try {
      const loginData = await wx.getStorage({
        key: "login_data",
        encrypt: true
      })
      this.setData({
        formData: {
          username: loginData.data.username,
          password: loginData.data.password,
          captcha: ""
        },
        isRememberPassword: true
      })
    } catch { }

    await session;
    this.updateCaptcha();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  async onReady() {
    wx.setNavigationBarTitle({
      title: '登录'
    })
  },

  async updateCaptcha() {
    wx.downloadFile({
      url: "https://cas.xaufe.edu.cn/captcha.jpg?tm=" + new Date().getTime(),
      header: {
        "Cookie": "SESSION=" + await sessionModule.getSessionStorage()
      },
      success: (resp) => {
        this.setData({
          captcha: resp.tempFilePath
        })
      }
    })
  },

  async onLogin() {
    let data: any = this.data.formData;
    const validate: [boolean, any[]] = await new Promise((resolve) => {
      this.selectComponent("#form").validate((isValid: boolean, errors: any[]) => resolve([isValid, errors]))
    })
    if (!validate[0]) {
      this.setData({ error: validate[1][0].message })
      return
    }
    wx.showLoading({
      title: '登录中',
      mask: true
    })
    data = {
      ...data,
      "password": this.data.isRememberPassword ? data.password : cryptoModule.MD5(data.password.toUpperCase()).toString(),
      "_eventId": "submit",
      "execution": await evaluateExecution()
    }
    try {
      const res = await requestModule.request({
        url: "https://cas.xaufe.edu.cn/login",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data
      }, true, -1, {
        "SESSION": await sessionModule.getSessionStorage()
      })

      const error = new RegExp(errorMessageRegex).exec(res.data)
      if (error) {
        this.setData({
          error: this.data.knownErrors[error[1]] ?? error[1]
        })
        return
      }

      if (res.statusCode === 401) {
        this.setData({
          error: "用户名或密码错误"
        })
        return
      }

      wx.showLoading({
        title: '与 CAS 服务器取得通信中',
        mask: true
      })

      const checked = await tgcModule.checkAndSaveTGC(res)
      if (!checked) {
        this.setData({
          error: "Token 验证失败，请重新登录；如此问题持续发生，请联系开发者"
        })
        return
      }

      if (this.to) {
        // wx.redirectTo is not allowed to jump to tab bar pages
        if (!this.fromTabBar) wx.redirectTo({ url: this.to })
        else wx.switchTab({ url: this.to })

      } else {
        wx.switchTab({ url: "/pages/index/index" })
      }

      wx.setStorage({
        key: "login_data",
        data: {
          username: data.username,
          password: data.password
        },
        encrypt: true
      })
      wx.showToast({
        icon: "success",
        title: "登录成功",
      })

    } catch (err: unknown) {
      this.setData({
        error: "发生了意料之外的错误，请联系开发者"
      })
      console.error(err)
    } finally {
      wx.hideLoading()
    }
  },

  onInput(e: any) {
    this.setData({
      [`formData.${e.target.id}`]: e.detail.value
    })
    if (e.target.id == "password")
      this.onInputPassword()
  },

  onInputPassword() {
    if (this.data.isRememberPassword) {
      this.setData({
        formData: {
          ...this.data.formData,
          password: ""
        },
        isRememberPassword: false
      })
    }
  },

  to: '',
  fromTabBar: false,
})