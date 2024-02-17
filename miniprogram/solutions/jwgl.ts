// const relayModule = require('../utils/relay.js')
const requestModule = require('../utils/request')
const tgcModule = require('../utils/tgc')
const cookieModule = require('../utils/cookie')

// const jwglSolutionRouteCookieRegex = /route=([a-zA-Z0-9\-]+)/g
// const jwglSolutionSessionCookieRegex = /JSESSIONID=([a-zA-Z0-9\-]+)/g

// This is just for temp use, should not been saving permantly.
let jwglSolutionToken: Record<string, string> | undefined = undefined

export async function getOrRequireTokenCookie(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  const tokens = await getOrRequireToken(redirect, to);
  return `route=${tokens["route"]}; JSESSIONID=${tokens["JSESSIONID"]};`
}

export async function getOrRequireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<Record<string, string>> {
  return jwglSolutionToken = (jwglSolutionToken ?? await requireToken(redirect, to))
}

export function clearToken() {
  jwglSolutionToken = undefined
}

async function requireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<Record<string, string>> {
  const tgc = tgcModule.checkAndGetTGCCookie(redirect, to)
  const cookieJar: Record<string, string> = cookieModule.plainToCookieJar(await tgc)
  const rst = await requestModule.request({
    url: "https://cas.xaufe.edu.cn/login?service=http%3A%2F%2Fjwgl.xaufe.edu.cn%2Fsso%2Fddlogin",
    method: "GET"
  }, false, 20, cookieJar)

  const route = rst.cookieJar["route"]
  const session = rst.cookieJar["JSESSIONID"]

  if (route === undefined || session == undefined) {
    throw {
      errMsg: "找不到 Token",
      errno: 404
    }
  }

  console.log("jwgl token updated:", {
    route: route,
    JSESSIONID: session
  })
  return {
    route: route,
    JSESSIONID: session
  };
}