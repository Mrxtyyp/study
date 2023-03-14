## http 1.0

- 最基础的 http 协议
- 支持最基本的 GET/POST

## http 1.1

- 支持缓存策略 cache-control、Etag
- 支持长连接 keep-alive: true，一次 http 连接多次请求(最多 6 次)
- 断点续传 206 状态码
- 新增 put、delete 方式请求，实现 resetfulAPI

## http 2.0

- 压缩 header，减小体积
- 多路复用，一次 TCP 连接多个 http 并行请求
- 服务端推送-不同于 websocket
