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
