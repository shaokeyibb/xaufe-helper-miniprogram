const relayModule = require('../utils/relay.js')
const tgcModule = require('../utils/tgc')

const jwglSolutionRouteCookieRegex = /route=([a-zA-Z0-9\-]+)/g
const jwglSolutionSessionCookieRegex = /JSESSIONID=([a-zA-Z0-9\-]+)/g

// This is just for temp use, should not been saving permantly.
let jwglSolutionToken: Record<string, string> | undefined = undefined

export async function getOrRequireTokenCookie(redirect: boolean = true, to: string | undefined = undefined): Promise<string> {
  const tokens = await getOrRequireToken(redirect, to);
  return `route=${tokens["route"]}; JSESSIONID=${tokens["JSESSIONID"]};`
}

export async function getOrRequireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<Record<string, string>> {
  return jwglSolutionToken = (jwglSolutionToken ?? await requireToken(redirect, to))
}

export function clearToken(){
  jwglSolutionToken = undefined
}

async function requireToken(redirect: boolean = true, to: string | undefined = undefined): Promise<Record<string, string>> {
  const tgc = tgcModule.checkAndGetTGCCookie(redirect, to)
  const result = await relayModule.request({
    url: "https://cas.xaufe.edu.cn/login?service=http%3A%2F%2Fjwgl.xaufe.edu.cn%2Fsso%2Fddlogin",
    method: "GET",
    header: {
      "Cookie": await tgc,
    }
  })

  const route = (new RegExp(jwglSolutionRouteCookieRegex).exec(result.request.headers["Cookie"]) ?? [])[1]
  const session = (new RegExp(jwglSolutionSessionCookieRegex).exec(result.request.headers["Cookie"]) ?? [])[1]

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