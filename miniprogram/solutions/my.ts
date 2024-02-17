// const relayModule = require('../utils/relay.js')
const tgcModule = require('../utils/tgc')
const requestModule = require('../utils/request')
const cookieModule = require('../utils/cookie')

// const mySolutionCookieRegex = /CJMHJSESSIONID=([a-zA-Z0-9\-]+)/g

// This is just for temp use, should not been saving permantly.
let mySolutionToken: string | undefined = undefined

export async function getOrRequireTokenCookie(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  return `CJMHJSESSIONID=${await getOrRequireToken(redirect, to)};`
}

export async function getOrRequireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  return mySolutionToken = (mySolutionToken ?? await requireToken(redirect, to))
}

export function clearToken() {
  mySolutionToken = undefined
}

async function requireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  const tgc = tgcModule.checkAndGetTGCCookie(redirect, to)
  const cookieJar: Record<string, string> = cookieModule.plainToCookieJar(await tgc)
  const rst = await requestModule.request({
    url: "https://cas.xaufe.edu.cn/login?service=https://my.xaufe.edu.cn/cjmh/casAuth?redirectUrl=my.xaufe.edu.cn/newcjmh",
    method: "GET",
  }, false, 2, cookieJar)
  const token = rst.cookieJar["CJMHJSESSIONID"]

  if (token === undefined) {
    throw {
      errMsg: "找不到 Token",
      errno: 404
    }
  }

  console.log("my token updated:", token)

  return token;
}