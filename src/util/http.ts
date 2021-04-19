/**
 * 是否为绝对路径
 * @param url 判断的路径
 */

import Config from './config';
import { md5Encrypt } from './encrypt_and_decrypt';

export function isAbsoluteUrl(url: string): boolean {
  return /(^[a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

/**
 * 拼接url
 * @param url 相对路径进行拼接为网络请求路径
 */
function _stitchingUrl(url: string): string {
  return isAbsoluteUrl(url) ? url : Config.HOST.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
}

/**
 * 生成前面
 * @param params 参数
 * @param path 请求路径
 * @param token 登录后的令牌
 * @param timestamp 时间戳
 * @param nonceStr uuid
 * @private
 */
function _getSignature(params: any, path: string, token: string, timestamp: number, nonceStr: string) {
  // 先以对象key排序
  const keys = Object.keys(params).sort();
  let sign = '';
  // 顺序遍历
  for (const key of keys) {
    const value = params[key];
    // value是个对象
    if (typeof value === 'object' && value !== null) {
      // 对value为对象的数据进行序列化成字符串，然后按照ascii排序
      let v = JSON.stringify(params[key]);
      // 对value转为字符串进行排序处理
      v = v
        .split('')
        .sort()
        .join('');
      sign += `${key}=${v}&`;
    } else {
      // 非对象
      if (value !== 0 && !value) {
        params[key] = '';
        sign += `${key}=&`;
      } else {
        sign += `${key}=${params[key]}&`;
      }
    }
  }
  // 拼接url
  sign += `url=${path}&`;

  // 拼接token
  sign += token ? `accessToken=${token}&` : '';
  sign += `timestamp=${timestamp}&`;
  sign += `nonceStr=${nonceStr}&`;
  // 拼接key
  sign += 'key=' + Config.PLAM_KEY;
  return md5Encrypt(sign);
}
