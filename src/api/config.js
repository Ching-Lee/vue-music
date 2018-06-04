// 配置请求文件

// 配置通用参数
export const commonParams = {
  g_tk: 5381,
  uin: 0,
  format: 'json',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'h5',
  needNewCode: 1,
  _: 1527572070718
}

// 配置jsonp库的通用的options
export const options = {
  // 通过qq得到了回掉函数的参数名
  param: 'jsonpCallback'
}

// 配置返回码
export const ERR_OK = 0
