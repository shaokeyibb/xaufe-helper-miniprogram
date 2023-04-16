type PersonalInfomation = {
  "XH": string,
  "XZBJ": string,
  "XM": string,
  "XJZTMC": string,
  "XJZT": string,
  "SZBJ": string | null,
  "SYBJ": string,
  "SZSY": string | null,
  "YHTX": string | null,
  "XB": string,
  "JG": string | null,
  "SZXY": string
}

type TabData = {
  "key": string,
  "title": string,
  "path": string,
  "icon": string
}

type Node = {
  type?: "node" | "text" | string
  name?: string,
  text?: string
  attrs?: Record<string, string>,
  children?: Node[]
}