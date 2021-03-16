import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String as PropType<string>
    }
  },
  setup(props) {
    return () => {
      const { msg } = props;
      return <div class="hello-wrorld">{msg}</div>;
    };
  }
});
