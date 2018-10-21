/**
 * @method 转换网络图片为base64编码
 * @param {String} url 图片地址
 */
function getBase64(url) {
  return new Promise((resolve, reject) => {
    try {
      window.URL = window.URL || window.webkitURL;
      const xhr = new XMLHttpRequest;
      xhr.responseType = 'blob';
      // xhr.withCredentials = true;
      xhr.open('get', url);
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.setRequestHeader("Postman-Token", "859e5ce8-f7db-40f1-8321-fdb3f9b1e452");
      xhr.send();
      // xhr.addEventListener("readystatechange", function () {
      //   console.log(this);
      //   if (this.readyState === 4) {
      //     console.log(this.response);
      //   }
      // });
      xhr.onload = function () {
        console.log(this);
        if (this.status === 200) {
          const blob = this.response;
          const fr = new FileReader();
          fr.readAsDataURL(blob);
          fr.onloadend = function (data) {
            const base64 = data.target.result;
            resolve(base64);
          }
        }
      };
    } catch (error) {
      reject(error);
    }
  })
}

/**
 * @method 通过图片地址获取Image元素
 * @param {String} url 图片地址
 */
function getImage(url) {
  return new Promise((resolve, reject) => {
    try {
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = url;
      if (url) {
        image.onload = function () {
          resolve(image);
        }
      }
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * @method 将img元素绘入canvas，导出成base64编码
 * @param {HtmlElement} img img元素
 */
function getBase64FromImage(url) {
  return getImage(url)
    .then((image) => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL();
      return data;
    });
}

module.exports = {
  getBase64: getBase64,
  getBase64FromImage: getBase64FromImage
};