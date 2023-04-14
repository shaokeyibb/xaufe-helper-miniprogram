const relayModule = require('../utils/relay.js')
const tgcModule = require('../utils/tgc')

const mySolutionCookieRegex = /CJMHJSESSIONID=([a-zA-Z0-9\-]+)/g

// This is just for temp use, should not been saving permantly.
let mySolutionToken: string | undefined = undefined

export async function getOrRequireTokenCookie(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  return `CJMHJSESSIONID=${await getOrRequireToken(redirect, to)};`
}

export async function getOrRequireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  return mySolutionToken = (mySolutionToken ?? await requireToken(redirect, to))
}

async function requireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  const tgc = tgcModule.checkAndGetTGCCookie(redirect, to)
  const result = await relayModule.request({
    url: "https://cas.xaufe.edu.cn/login?service=http://my.xaufe.edu.cn/cjmh/casAuth?redirectUrl=my.xaufe.edu.cn/newcjmh",
    method: "GET",
    header: {
      "Cookie": await tgc,
    }
  })
  const token = (new RegExp(mySolutionCookieRegex).exec(result.request.headers["Cookie"]) ?? [])[1]

  if (token === undefined) {
    throw {
      errMsg: "找不到 Token",
      errno: 404
    }
  }

  console.log("my token updated:", token)

  return token;
}