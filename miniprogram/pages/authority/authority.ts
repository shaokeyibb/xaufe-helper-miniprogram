// pages/authority/authority.ts
const sessionModule = require('../../utils/session');
const encryptModule = require('../../utils/md51.js')
const tgcModule = require('../../utils/tgc')

const executionCookieRegex = /<input type="hidden" name="execution" value="([a-zA-Z0-9]+)"\/>/g
const usernameRegex = /^[0-9a-zA-Z]{3,20}$/g;

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
    captcha: '',
    username: '',
    password: '',
    isRememberPassword: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad(options) {
    this.to = options.to ? decodeURI(options.to) : ''
    const session = sessionModule.generateSession();

    try {
      const loginData = await wx.getStorage({
        key: "login_data",
        encrypt: true
      })
      this.setData({
        username: loginData.data.username,
        password: loginData.data.password,
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

  async onLogin(e: any) {
    let data = e.detail.value;
    if (!new RegExp(usernameRegex).test(data.username) || !data.password) {
      wx.showToast({
        icon: "error",
        title: "数据不正确",
      })
      return
    }
    wx.showLoading({
      title: '登录中',
      mask: true
    })
    data = {
      ...data,
      "password": this.data.isRememberPassword ? data.password : encryptModule.hex_md5(data.password.toUpperCase()),
      "_eventId": "submit",
      "execution": await evaluateExecution()
    }
    wx.request({
      url: "https://cas.xaufe.edu.cn/login",
      method: "POST",
      header: {
        "Cookie": "SESSION=" + await sessionModule.getSessionStorage(),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: data,
      success: async (res) => {
        if (res.statusCode === 401) {
          wx.showToast({
            icon: "error",
            title: "验证失败",
          })
          return
        }
        wx.showLoading({
          title: '校验中',
          mask: true
        })
        if (!await tgcModule.checkAndSaveTGC(res)) {
          wx.showToast({
            icon: "error",
            title: "校验出错",
          })
          return
        }
        if (this.to) {
          wx.redirectTo({
            url: this.to
          })
        } else {
          wx.redirectTo({
            url: "/pages/index/index"
          })
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
      },
      fail: (err) => {
        wx.showToast({
          icon: "error",
          title: "未知错误",
        })
        console.error(err)
      }
    })
  },

  onInputPassword() {
    if (this.data.isRememberPassword) {
      this.setData({
        password: "",
        isRememberPassword: false
      })
    }
  },

  to: ''
})