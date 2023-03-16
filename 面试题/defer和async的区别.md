## defer 和 async 的区别

script 无： html 暂停解析，下载 JS，执行 JS，继续 HTML 解析
script defer： html 继续解析，异步下载 JS，html 解析完执行 JS
script async： html 继续解析，异步下载 JS，执行 JS，继续解析 HTML
