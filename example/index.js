const baseUtil = require('@/main.js');
const getBase64 = baseUtil.getBase64;
const getBase64FromImage = baseUtil.getBase64FromImage;

(function () {
  // 显示base64编码信息
  function logOut(msg) {
    const msgContainer = document.querySelector('#msgContainer');
    msgContainer.innerHTML = msg;
  }
  // 使用base64编码预览图片
  function showImg(data) {
    const previewImage = document.querySelector('#previewImage');
    previewImage.setAttribute("src", data);
  }
  // 获取input输入值,并校验是否是正确地址格式
  function getAddress() {
    const input = document.querySelector('#address');
    const isValidAddress = new RegExp('^[https://|http://|//]', 'g');
    const value = input.value;
    if (!isValidAddress.test(value)) {
      return alert('oops,you should input a valid address begins with "https://" or "http://" or "//"');
    }
    if (!value) {
      return alert('empty address ~');
    }
    return value;
  }
  // 转换图片
  // //cdn2.jianshu.io/assets/web/web-note-ad-1-c2e1746859dbf03abe49248893c9bea4.png
  function transformImage() {
    const address = getAddress();
    if (address) {
      // getBase64(address)
      //   .then((data) => {
      //     showImg(data);
      //   });
      getBase64FromImage(address)
        .then((data) => {
          showImg(data);
        });
    }
  }
  // 监听按钮事件
  window.onload = function () {
    const btn = document.querySelector('#tBtn');
    btn.addEventListener('click', transformImage);
  }
})(window);
