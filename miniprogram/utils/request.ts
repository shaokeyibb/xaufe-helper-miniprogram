const cookieModule = require('../utils/cookie')

export async function request<T>(option: WechatMiniprogram.RequestOption<T>,
  followRedirect: boolean = true,
  maxRedirect: number = -1,
  cookieJar: Record<string, string> = {}
): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T> & {
  cookieJar: Record<string, string>
}> {
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