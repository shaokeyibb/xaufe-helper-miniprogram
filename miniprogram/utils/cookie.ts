const cookieRegex = /(\w+)=([a-zA-Z0-9\-]+);\s?(Path=\/\w*;)?/g

export function cookieJarToPlain(cookieJar: Record<string, string>): string {
  let rst = ""
  for (const cookie in cookieJar) {
    rst += (cookie + "=" + cookieJar[cookie] + ";")
  }
  return rst;
}

export function plainToCookieJar(plain: string): Record<string, string> {
  const rst: Record<string, string> = {}
  const regExp = new RegExp(cookieRegex)
  let match;
  while (match = regExp.exec(plain)) {
    rst[match[1]] = match[2]
  }
  return rst
}