import { defineComponent } from 'vue';
import { Toast, Alert, Confirm } from 'lin-component';
const allEvent = () => {
  const handleClick = () => {
    console.log('父元素事件执行了');
  };
  const handleClickToast = (position: any) => {
    Toast.info({
      content: 'hello, this is toast',
      position
    });
  };
  const handleClickWithoutToast = () => {
    Toast.info({
      content: 'hello, this is toast',
      mask: true
    });
  };
  const handleClickSuccessToast = () => {
    Toast.success({
      content: 'success',
      mask: true
    });
  };
  const handleClickFailToast = () => {
    Toast.fail({
      content: 'fail',
      mask: true
    });
  };
  const handleClickCustomToast = () => {
    Toast.custom({
      content: 'custom',
      mask: true,
      custom: `<svg viewBox="0 0 1024 1024" width="36" height="36"><path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 629.410831 1024 740.826187 984.331046 830.768465 912.686662 841.557579 904.092491 843.33693 888.379234 834.742758 877.590121 826.148587 866.801009 810.43533 865.021658 799.646219 873.615827 718.470035 938.277495 618.001779 974.048781 512 974.048781 256.817504 974.048781 49.951219 767.182496 49.951219 512 49.951219 256.817504 256.817504 49.951219 512 49.951219 767.182496 49.951219 974.048781 256.817504 974.048781 512 974.048781 599.492834 949.714859 683.336764 904.470807 755.960693 897.177109 767.668243 900.755245 783.071797 912.462793 790.365493 924.170342 797.659191 939.573897 794.081058 946.867595 782.373508 997.013826 701.880796 1024 608.898379 1024 512Z" p-id="2679" fill="#ffffff"></path>
      <path d="M499.512194 743.02439C499.512194 756.818039 510.694157 768 524.487806 768 538.281453 768 549.463415 756.818039 549.463415 743.02439L549.463415 424.585365C549.463415 410.791718 538.281453 399.609756 524.487806 399.609756 510.694157 399.609756 499.512194 410.791718 499.512194 424.585365L499.512194 743.02439Z" p-id="2680" fill="#ffffff"></path><path d="M499.512194 318.439025C499.512194 332.232672 510.694157 343.414635 524.487806 343.414635 538.281453 343.414635 549.463415 332.232672 549.463415 318.439025L549.463415 274.731708C549.463415 260.938059 538.281453 249.756098 524.487806 249.756098 510.694157 249.756098 499.512194 260.938059 499.512194 274.731708L499.512194 318.439025Z" p-id="2681" fill="#ffffff"></path></svg>`
    });
  };
  const handleClickLoadingToast = () => {
    Toast.loading({
      content: 'loading...',
      mask: true
    });
    setTimeout(() => {
      Toast.hide();
    }, 3000);
  };

  const handleClickAlert = () => {
    Alert.show({
      title: 'Title',
      content: 'this is content',
      afterClose() {
        Toast.info({
          content: 'afterClose',
          position: 'bottom'
        });
      }
    });
  };
  const handleClickAlertCountDown = () => {
    Alert.show({
      title: 'Title',
      content: 'this is content',
      model: 'countDown',
      prefix: 'available after ',
      postfix: ' seconds',
      duration: 5,
      afterClose() {
        Toast.info({
          content: 'afterClose',
          position: 'bottom'
        });
      }
    });
  };
  const handleClickConfirm = () => {
    Confirm.show({
      title: 'Title',
      content: 'this is content',
      cancelText: 'Cancel',
      cancel() {
        Toast.info({
          content: 'cancel',
          position: 'bottom'
        });
      },
      confirm() {
        Toast.info({
          content: 'confirm',
          position: 'bottom'
        });
      },
      afterClose(params: any) {
        Toast.info({
          content: 'afterClose:' + JSON.stringify(params),
          position: 'bottom'
        });
      }
    });
  };
  return {
    handleClick,
    handleClickToast,
    handleClickWithoutToast,
    handleClickSuccessToast,
    handleClickFailToast,
    handleClickCustomToast,
    handleClickLoadingToast,
    handleClickAlert,
    handleClickAlertCountDown,
    handleClickConfirm
  };
};
export default defineComponent({
  setup() {
    const { handleClick, handleClickToast, handleClickWithoutToast, handleClickSuccessToast, handleClickFailToast, handleClickCustomToast, handleClickLoadingToast, handleClickAlert, handleClickAlertCountDown, handleClickConfirm } = allEvent();
    return () => {
      return (
        <div class="home">
          <div onClick={handleClick} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <button
              style={{ marginBottom: '10px' }}
              onClick={() => {
                handleClickToast('top');
              }}
            >
              top toast
            </button>
            <button
              style={{ marginBottom: '10px' }}
              onClick={() => {
                handleClickToast('middle');
              }}
            >
              middle toast
            </button>
            <button
              style={{ marginBottom: '10px' }}
              onClick={() => {
                handleClickToast('bottom');
              }}
            >
              bottom toast
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickWithoutToast}>
              mask toast
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickSuccessToast}>
              success toast
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickFailToast}>
              fail toast
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickLoadingToast}>
              loading
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickCustomToast}>
              custom
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickAlert}>
              alert
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickAlertCountDown}>
              alert count down
            </button>
            <button style={{ marginBottom: '10px' }} onClick={handleClickConfirm}>
              confirm
            </button>
          </div>
        </div>
      );
    };
  }
});
