// pages/jwgl/schedule/schedule.ts
// const schedule_relayModule = require('../../../utils/relay.js')
const schedule_jwglModule = require('../../../solutions/jwgl')
const schedule_dateModule = require('../../../utils/date')
const schedule_requestModule = require('../../../utils/request')
const schedule_cookieModule = require('../../../utils/cookie')

// match '1-16周(单)' to '1' in group 1, 16 in group 2, '单' in group 4
const zcdRegex = /(\d+)-(\d+)周(\((单|双)\))?/

// match '1-2'
const jcsRegex = /(\d+)-(\d+)/

function makeRows() {

}

Page({

  /**
   * Page initial data
   */
  data: {
    years: [{
      key: "全部",
      value: ""
    }].concat(Array.from(new Array(schedule_dateModule.isInSecondTerm() ? new Date().getFullYear() : new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
      return {
        key: `${it} - ${it + 1}`,
        value: it.toString()
      }
    }).reverse()),

    terms: [
      {
        key: "全部",
        value: ""
      },
      {
        key: "1",
        value: "3"
      },
      {
        key: "2",
        value: "12"
      },
      {
        key: "3",
        value: "16"
      }
    ],

    classDurations: [
      {
        from: "08:00",
        to: "08:50"
      },
      {
        from: "09:00",
        to: "09:50"
      },
      {
        from: "10:10",
        to: "11:00"
      },
      {
        from: "11:10",
        to: "12:00"
      },
      {
        from: "14:10",
        to: "15:00"
      },
      {
        from: "15:10",
        to: "16:00"
      },
      {
        from: "16:10",
        to: "17:00"
      },
      {
        from: "17:10",
        to: "17:50"
      },
      {
        from: "18:00",
        to: "18:50"
      },
      {
        from: "19:00",
        to: "19:50"
      }
    ],

    selectedYearIdx: 1,
    selectedTermIdx: schedule_dateModule.isInSecondTerm() ? 2 : 1
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    try {
      this.setData({
        nodes: (await wx.getStorage({
          key: "schedule",
          encrypt: true
        })).data
      })
    } catch {
      this.onSubmitQuery({
        xnm: this.data.selectedYearIdx,
        xqm: this.data.selectedTermIdx
      })
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '学生课表查询'
    })
  },

  makeNodes(e: any): Node[] {
    const weeks: object = e.xqjmcMap
    const commonClasses: Array<any> = e.kbList
    const specialClasses: Array<any> = e.sjkList
    return [
      {
        name: "table",
        children: [
          {
            name: "tr",
            children: [
              {
                name: "th"
              },
              ...Object.values(weeks).map(it => {
                return {
                  name: "th",
                  children: [{
                    name: "span",
                    children: [{
                      type: 'text',
                      text: it as string
                    }]
                  }]
                }
              })
            ]
          },
          ...this.data.classDurations.map((duration, durationIdx) => {
            return {
              name: "tr",
              children: [
                {
                  name: "td",
                  children: [
                    {
                      name: "span",
                      attrs: {
                        style: "display: block;"
                      },
                      children: [{
                        type: 'text',
                        text: duration.from
                      }]
                    },
                    {
                      name: "span",
                      attrs: {
                        style: "display: block;"
                      },
                      children: [{
                        type: 'text',
                        text: duration.to
                      }]
                    }
                  ]
                },
                ...(() => {
                  const rst: Node[] = new Array<Node>(Object.keys(weeks).length).fill({
                    name: "td"
                  })
                  commonClasses.filter(clazz => (jcsRegex.exec(clazz.jcs) ?? [])[1] === (durationIdx + 1).toString()).forEach(clazz => {
                    const clazzJcs = (jcsRegex.exec(clazz.jcs) ?? [])
                    rst[parseInt(clazz.xqj) - 1] = {
                      name: "td",
                      attrs: {
                        rowspan: (parseInt(clazzJcs[2]) - parseInt(clazzJcs[1]) + 1).toString(),
                      },
                      children: [
                        {
                          name: "span",
                          attrs: {
                            style: "display: block; font-weight: bold; font-size: 13px;"
                          },
                          children: [{
                            type: 'text',
                            text: clazz.kcmc
                          }]
                        },
                        {
                          name: "span",
                          attrs: {
                            style: "display: block; font-size: 10px;"
                          },
                          children: [{
                            type: 'text',
                            text: clazz.zcd
                          }]
                        },
                        {
                          name: "span",
                          attrs: {
                            style: "display: block; font-size: 10px;"
                          },
                          children: [{
                            type: 'text',
                            text: `@${clazz.xqmc} ${clazz.cdmc}`
                          }]
                        },
                        {
                          name: "span",
                          attrs: {
                            style: "display: block; font-size: 10px;"
                          },
                          children: [{
                            type: 'text',
                            text: clazz.xm
                          }]
                        }
                      ]
                    }
                  })
                  return rst;
                })()
              ]
            }
          })
        ]
      },
      {
        name: 'div',
        children: [
          {
            name: 'span',
            children: [{
              type: 'text',
              text: "其他课程：" + specialClasses.map(it => it.qtkcgs).join(";")
            }]
          }
        ]
      }
    ]
  },

  async onSubmitQuery(e: any) {
    let data = e?.detail?.value ?? e;
    data = {
      "xnm": this.data.years[data.xnm].value,
      "xqm": this.data.terms[data.xqm].value,
      "kzlx": "ck",
      "xsdm": ""
    }
    wx.showLoading({
      title: '请稍候',
      mask: true
    })

    try {
      const cookieJar: Record<string, string> = schedule_cookieModule.plainToCookieJar(await schedule_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/schedule/schedule"))
      const result = await schedule_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/kbcx/xskbcx_cxXsgrkb.html",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      const nodes = this.makeNodes(result.data)

      this.setData({
        nodes: nodes
      })

      wx.setStorage({
        key: "schedule",
        data: nodes,
        encrypt: true
      })

      wx.hideLoading()
    } catch (e) {
      wx.showToast({
        title: "查询失败",
        icon: "error",
        mask: true
      })
      throw e;
    }
  },

  onYearChange(e: any) {
    this.setData({
      selectedYearIdx: e.detail.value
    })
  },

  onTermChange(e: any) {
    this.setData({
      selectedTermIdx: e.detail.value
    })
  }
})