import jsonp from '../assets/js/jsonp'
import {commonParams, options} from './config'
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  // 实现将多个对象拷贝到同一个对象中
  const param = Object.assign({}, commonParams)
  // 返回值就是promise
  return jsonp(url, param, options)
}
