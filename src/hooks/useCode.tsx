import { ref, onMounted } from 'vue';
import Config from '../util/config';
import { getQueryParam } from '../util/util';

/**
 * 调用微信接口获取code
 */
const useCode = () => {
  const codeRef = ref('');
  // 获取code
  onMounted(() => {
    const appid = '';
    const query: { [key: string]: string | undefined } = getQueryParam();
    const lastCode = localStorage.get('last_code') || '';
    // 路径中不存在code参数
    if (!query.code) {
      const href = encodeURIComponent(location.href);
      location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&response_type=code&scope=snsapi_base&redirect_uri=${href}&state=1#wechat_redirect`;
    } else {
      // 比对当前code 与 存储的code是否一致，如果一致，则认为为用户刷新操作，强制重新进入
      if (lastCode === query.code) {
        location.href = Config.PROJECT_PATH;
        return;
      }
      // 存储新获取的code
      localStorage.setItem('last_code', query.code);
      codeRef.value = query.code;
    }
  });
  return codeRef;
};
export default useCode;
