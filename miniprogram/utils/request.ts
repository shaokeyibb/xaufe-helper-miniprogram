const cookieModule = require('../utils/cookie')

const mockedData = [
  {
    request: {
      url: "https://cas.xaufe.edu.cn/login",
      method: "POST",
      data: {
        username: "mockuser"
      }
    },
    response: {
      cookies: ["TGC=MOCK-COOKIE; Path=/; HttpOnly"],
      header: {
        "Set-Cookie": "TGC=MOCK-COOKIE; Path=/; HttpOnly",
        "X-Mocked-Response": true
      },
      statusCode: 200,
      errMsg: "request:ok"
    }
  },
  {
    request: {
      url: "https://cas.xaufe.edu.cn/login",
      header: {
        "Cookie": "TGC=MOCK-COOKIE;"
      }
    },
    response: {
      
    }
  }
]

function isObjectInclude(bigger: any, smaller: any): boolean {
  // if bigger one is undefined(smaller one must not be undefined), return false
  if (bigger === undefined) return false;
  // if the type mismatch, return false
  if (typeof bigger !== typeof smaller) return false;
  // we do not compare function
  if (typeof smaller === 'function') return true;
  // compare object/array recursively
  if (typeof smaller === 'object') {
    for (const entry in smaller) {
      // if any of entry not include, return false
      if (!isObjectInclude(bigger[entry], smaller[entry])) return false;
    }
    // or, return true;
    return true;
  }
  return bigger == smaller;
}

export async function request<T>(option: WechatMiniprogram.RequestOption<T>,
  followRedirect: boolean = true,
  maxRedirect: number = -1,
  cookieJar: Record<string, string> = {}
): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T> & {
  cookieJar: Record<string, string>
}> {
  const mock = mockedData.find(it => isObjectInclude(option, it.request));
  if (mock) {
    return new Promise((resolve) => {
      console.log("Mock detected, inject response", mock)
      resolve({
        ...mock.response,
        cookieJar
      } as unknown as Promise<WechatMiniprogram.RequestSuccessCallbackResult<T> & {
        cookieJar: Record<string, string>
      }>);
    })
  }
  return new Promise((resolve, reject) => {
    option.header = {
      ...option.header,
      Cookie: cookieModule.cookieJarToPlain(cookieJar)
    }
    console.log("Req:", option)
    const requestTask = wx.request<T>({
      ...option,
      redirect: followRedirect ? "follow" : "manual",
      success: (result) => {
        if (!followRedirect
          && maxRedirect >= 1
          && result.statusCode % 300 < 100) // 30x
          return
        console.log("Resp:", result)
        console.log("CookieJar:", cookieJar)
        resolve({
          ...result,
          cookieJar
        })
      },
      fail: (err) => {
        console.log("Err:", err)
        reject(err)
      }
    })
    requestTask.onHeadersReceived(async (result) => {
      if (followRedirect || maxRedirect < 1) return
      const location = result.header["Location"]
      const cookie = result.header["Set-Cookie"]
      try {
        cookieJar = {
          ...cookieJar,
          ...cookieModule.plainToCookieJar(cookie)
        }
        if (location)
          resolve(await request({
            ...option,
            url: location.replaceAll("http://", "https://"),
          }, false, maxRedirect - 1, cookieJar))
      } catch (err: unknown) {
        reject(err)
      }
    })
  })
}