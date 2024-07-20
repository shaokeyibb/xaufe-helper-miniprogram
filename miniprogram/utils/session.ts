const requestModule = require('../utils/request')

const sessionCookieRegex = /SESSION=([a-zA-Z0-9\-]+);/g

export async function getSessionStorage(): Promise<string> {
  return (await wx.getStorage<string>({
    key: "session"
  })).data
}

export async function generateSession() {
  let require = requireSession();
  await clearSessionStorage();
  await setSessionStorage(await require);
}

async function setSessionStorage(session: string): Promise<WechatMiniprogram.GeneralCallbackResult> {
  return wx.setStorage({
    key: "session",
    data: session
  })
}

async function clearSessionStorage(): Promise<WechatMiniprogram.GeneralCallbackResult> {
  return wx.removeStorage({
    key: "session"
  });
}

async function requireSession(): Promise<string> {
  const session = await requestModule.request({
    url: "https://cas.xaufe.edu.cn/login",
  }).then((res: { header: { [x: string]: string; }; }) => (new RegExp(sessionCookieRegex).exec(res.header["Set-Cookie"]) ?? [])[1])
    .catch((err: unknown) => { throw err });

  if (session === undefined) {
    throw {
      errMsg: "找不到 Session",
      errno: 404
    }
  }

  console.log("session updated:", session)

  return session;
}