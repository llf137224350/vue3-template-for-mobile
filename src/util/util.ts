/**
 * 小于10的前补0操作
 * @param num
 */
export function formatNumber(num: number | string): string {
  num = num.toString();
  return `0${num}`.slice(-2);
}
/**
 * 生成唯一id
 */

export function uuid(): string {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * @description: 获取路径参数
 * @param {object} query
 * @return {*}
 */
export function getQueryParam(): { [key: string]: string | undefined } {
  const query: { [key: string]: string } = {};
  let queryStr = window.location.href;
  if (queryStr.includes('?')) {
    // 是否携带参数
    queryStr = queryStr.substring(queryStr.indexOf('?') + 1);
    if (queryStr) {
      // 问号后面部分
      queryStr
        .split('&')
        .map((item) => {
          return item.split('=');
        })
        .forEach((item: string[]) => {
          if (item.length === 2) {
            query[item[0]] = item[1];
          }
        });
    }
  }
  return query;
}
