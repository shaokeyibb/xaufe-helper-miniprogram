const jwglModule = require('../solutions/jwgl')
const myModule = require('../solutions/my')

const tgcCookieRegex = /TGC=([a-zA-Z0-9\-]+);/g
const tgcValidateHTMLRegex = /<title>登录成功<\/title>/g

export async function checkAndSaveTGC(res: WechatMiniprogram.RequestSuccessCallbackResult<string | Record<string, any> | ArrayBuffer>): Promise<boolean> {
  const require = await requireTGC(res)
  wx.showLoading({
    title: '校验中',
    mask: true
  })
  const validate = await validateTGC(require)
  wx.hideLoading()
  if (validate) {
    await saveTGC(require)
  }
  return validate;
}

export async function checkAndGetTGCCookie(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  return `TGC=${await checkAndGetTGC(redirect, to)};`
}

export async function checkAndGetTGC(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  try {
    const tgc = await getTGCStorage();
    if (await validateTGC(tgc)) {
      return tgc;
    }
    throw {
      err_msg: "鉴权失败"
    }
  } catch (e) {
    if (redirect)
      wx.redirectTo({
        url: '/pages/authority/authority' + (to ? `?to=${encodeURI(to!)}` : "")
      })
    throw e
  }
}

export async function logoutTGC() {
  const tgc = await checkAndGetTGCCookie();
  const req = new Promise<void>((resolve, reject) => {
    wx.request({
      url: "https://cas.xaufe.edu.cn/logout",
      dataType: "其他",
      header: {
        "Cookie": tgc
      },
      success() {
        resolve()
      },
      fail(err) {
        reject(err);
      }
    })
  })
  const clr = clearTGCStorage()
  jwglModule.clearToken()
  myModule.clearToken()
  await Promise.all([req, clr])
}

async function getTGCStorage(): Promise<string> {
  return (await wx.getStorage<string>({
    key: "tgc",
    encrypt: true
  })).data
}

async function validateTGC(tgc: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    wx.request({
      url: "https://cas.xaufe.edu.cn/login",
      dataType: "其他",
      header: {
        "Cookie": "TGC=" + tgc
      },
      success(res) {
        resolve(new RegExp(tgcValidateHTMLRegex).test(res.data.toString()))
      },
      fail(err) {
        reject(err);
      }
    })
  })
}

async function saveTGC(tgc: string) {
  await clearTGCStorage();
  await setTGCStorage(tgc);
}

async function requireTGC(res: WechatMiniprogram.RequestSuccessCallbackResult<string | Record<string, any> | ArrayBuffer>): Promise<string> {
  const tgc = (new RegExp(tgcCookieRegex).exec(res.header["Set-Cookie"]) ?? [])[1]

  if (tgc === undefined) {
    throw {
      errMsg: "找不到 TGC",
      errno: 404
    }
  }

  console.log("tgc updated:", tgc)

  return tgc;
}

async function setTGCStorage(tgc: string): Promise<WechatMiniprogram.GeneralCallbackResult> {
  return wx.setStorage({
    key: "tgc",
    encrypt: true,
    data: tgc
  })
}

async function clearTGCStorage(): Promise<WechatMiniprogram.GeneralCallbackResult> {
  return wx.removeStorage({
    key: "tgc"
  });
}