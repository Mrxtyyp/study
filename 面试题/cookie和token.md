## Cookie 和 Token 的区别

区别：

- cookie 是 HTTP 规范产物，有跨域限制，服务端配合 session 使用
- token 是无标准的，无跨域限制，用于 JWT

### session 优点

- 原理简单，易学习
- 用户信息存储在服务器，快速处理

### session 缺点

- 占服务器内存
- 有跨域限制

### JWT 优点

- 不占服务器内存
- 多进程、多服务器不受影响

### JWT 缺点

- 万一服务器秘钥被泄露，则用户信息全部丢失
