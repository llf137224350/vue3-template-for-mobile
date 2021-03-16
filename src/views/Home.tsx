import { defineComponent } from 'vue';
import { Button } from 'vant';
import HelloWorld from '@/components/HelloWorld';
import { encryptByAESModeECB } from '@/util/encrypt_and_decrypt';

const logo = require('../assets/logo.png');
export default defineComponent({
  setup() {
    console.log(encryptByAESModeECB('hello world'));
    return () => {
      return (
        <div class="home" style="font-size:16px">
          <img src={logo} alt="logo" />
          <Button type="primary" size="small" block>
            主要按钮 hello world
          </Button>
          <Button type="default" size="small">
            默认按钮
          </Button>
          <Button type="warning" size="small">
            警告按钮
          </Button>
          <Button type="danger" size="small">
            危险按钮
          </Button>
          <HelloWorld msg="hello world" />
        </div>
      );
    };
  }
});
