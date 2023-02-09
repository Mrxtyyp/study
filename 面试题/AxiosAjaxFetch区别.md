## Axios/Ajax/Fetch 区别

三者都用于请求

#### Ajax

> AJAX 是一种与服务器交换数据的技术，可以在不重新载入整个页面的情况下更新网页的一部分（局部更新）。在 JS 中通过 XMLHttpRequest 实现

#### Fetch

> Fetch 是 Ajax 的代替品，在使用了 es6 中的 promise 实现，不能携带 cookie

#### Axios

> 是整合了服务端和浏览器的通用 API，浏览器端是通过 Ajax 实现的

```javascript
// 实现Ajax
function ajax(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(xhr.responeseText);
      }
    }
  };
  xhr.send(null);
}
```
