export async function request(data) {
  try {
    const res = await rp({
      ...data,
      uri: data.url,
      headers: data.header,
    })
    let result = {
      ...res,
      data: res.body,
      header: res.headers
    }
    if (result.statusCode != 200) {
      throw {
        err_msg: "内部错误"
      }
    }
    if (data.dataType === 'json') {
      result.body = JSON.parse(result.body)
    }
    data.success && data.success(result);
    data.complete && data.complete({})
    return result;
  } catch (e) {
    data.fail && data.fail(e)
    data.complete && data.complete({})
    throw e;
  }
}

function rp(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'POST',
      url: 'https://service-jbyqfe6m-1302795172.gz.apigw.tencentcs.com/release/',
      data: data,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}