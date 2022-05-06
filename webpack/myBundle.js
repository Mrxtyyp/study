
(function (modules) {
    // 01 定义对象用于将来缓存被加载过的模块
    let installedModules = {}

    // 02 定义一个 __webpack_require__ 方法来替换 import require 加载操作
    function __webpack_require__(moduleId) {
        // 2-1 判断当前缓存中是否存在要被加载的模块内容，如果存在则直接返回
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        debugger

        // 2-2 如果当前缓存中不存在则需要我们自己定义{} 执行被导入的模块内容加载
        let module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        }

        // 2-3 调用当前 moduleId 对应的函数，然后完成内容的加载
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

        // 2-4 当上述的方法调用完成之后，我们就可以修改 l 的值用于表示当前模块内容已经加载完成了
        module.l = true

        // 2-5 加载工作完成之后，要将拿回来的内容返回至调用的位置 
        return module.exports
    }

    // 14 webpackJsonpCallback 实现：合并模块定义，改变 promise 状态执行后续行为
    function webpackJsonpCallback(data) {
        // 01 获取需要被动抬加载的模块 id
        let chunkIds = data[0]

        // 02 获取需要被动加载的模块依赖关系对象
        let moreModules = data[1]
        let chunkId, resolves = []

        // 03 循环判断 chunkIds 里对应的模块内容是否已完成加载
        for (let i; i < chunkIds.length; i++) {
            chunkId = chunkIds[i]
            if (Object.prototype.hasOwnProperty.call(inStalledChunks, chunkId) && installedChunks[chunkId]) {
                resolves.push(installedChunks[chunkId][0])
            }
            // 更新当前的 chunk 状态
            installedChunks[chunkId] = 0
        }
        for (moduleId in moreModules) {
            if (Object.prototype.hasOwnProperty.call(moreModules, moduleId) && moreModules[moduleId]) {
                modules[moduleId] = moreModules[moduleId]
            }
        }
        while (resolves.length) {
            resolves.shift()()
        }
    }


    // 15 定义 inStalledChunks 用于标记某个 chunkId 对应的 chunk 是否完成了加载
    // undefined： 没有被加载；null： 预加载； Promise：加载中； 0： 被加载过；
    var installedChunks = {
        "main": 0
    }

    // 17 定义jsonpScriptSrc 实现 src 的加载
    function jsonpScriptSrc(chunkId) {
        return __webpack_require__.p + "" + chunkId + ".built.js"
    }

    // 16 定义e方法用于实现： 利用jsonp来加载内容， promise 来实现异步加载操作
    __webpack_require__.e = function requireEnsure(chunkId) {
        // 00 定义一个数组，用来存放 promise
        var promises = [];
        // 获取 chunkId 对于的 chunk是否已经完成了加载
        var installedChunkData = installedChunks[chunkId];

        //01 先查看该模块 ID 对应缓存的值是否为 0，0 代表已经加载成功了，第一次取值为 undefined。
        if (installedChunkData !== 0) { // 0 means "already installed".
            // 02 如果不为 0 并且不是 undefined 代表已经是加载中的状态,然后将这个加载中的 Promise 推入 promises 数组
            if (installedChunkData) {
                promises.push(installedChunkData[2]);
            } else {
                // 03 如果不为 0 并且是 undefined 就新建一个 Promise，用于加载需要动态导入的模块。	
                var promise = new Promise(function (resolve, reject) {
                    installedChunkData = installedChunks[chunkId] = [resolve, reject];
                });
                promises.push(installedChunkData[2] = promise);

                // 04 创建一个 script 标签
                var script = document.createElement('script');
                var onScriptComplete;

                script.charset = 'utf-8';
                script.timeout = 120; // 06 为这个 script 标签设置一个 2 分钟的超时时间
                if (__webpack_require__.nc) {
                    script.setAttribute("nonce", __webpack_require__.nc);
                }
                // 05 URL 使用 jsonpScriptSrc(chunkId) 生成，即需要动态导入模块的 URL
                script.src = jsonpScriptSrc(chunkId);

                // create error before stack unwound to get useful stacktrace later
                var error = new Error();
                // 07 设置onScriptComplete() 函数，用于处理超时错误
                onScriptComplete = function (event) {
                    // avoid mem leaks in IE.
                    script.onerror = script.onload = null;
                    clearTimeout(timeout);
                    var chunk = installedChunks[chunkId];
                    if (chunk !== 0) {
                        if (chunk) {
                            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                            var realSrc = event && event.target && event.target.src;
                            error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                            error.name = 'ChunkLoadError';
                            error.type = errorType;
                            error.request = realSrc;
                            chunk[1](error);
                        }
                        installedChunks[chunkId] = undefined;
                    }
                };
                var timeout = setTimeout(function () {
                    onScriptComplete({ type: 'timeout', target: script });
                }, 120000);
                script.onerror = script.onload = onScriptComplete;
                // 08 然后添加到页面中，开始加载模块
                document.head.appendChild(script);
            }
        }
        return Promise.all(promises);
    }

    // 03 定义 m 属性用于保存 modules 
    __webpack_require__.m = modules

    // 04 定义 c 属性用于保存 cache 
    __webpack_require__.c = installedModules

    // 05 定义 o 方法用于判断对象的身上是否存在指定的属性
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty(object, property)
    }

    // 06 定义 d 方法用于在对象的身上添加指定的属性，同时给该属性提供一个 getter 
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, { enumerable: true, get: getter })
        }
    }

    // 07 定义 r 方法用于标识当前模块是 es6 类型
    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" })
        }
        Object.defineProperty(exports, '__esModule', { value: true })
    }

    // 08 定义 n 方法，用于设置具体的 getter 
    __webpack_require__.n = function (module) {
        let getter = module && module.__esModule ?
            function getDefault() { return module['default'] } :
            function getModuleExports() { return module }

        __webpack_require__.d(getter, 'a', getter)

        return getter
    }

    // 011 定义t方法 用于加载指定 value 的模块内容， 之后对内容进行处理并返回
    __webpack_require__.t = function (value, mode) {
        /**
         * 01: 接收2个参数，一个是value，一般用于表达被加载的模块id， 第二个值 mode 是一个二进制的数值
         * 02: t 方法内部做的第一件事情就是调用自定义的 require 方法，加载value对应的模块内容（value 一般就是模块 id），
         *     加载之后的内容又重新赋值给 value
         * 03: 当获取到这个value 值之后，余下的 8， 4，ns , 2都是对当前的内容进行加工处理，然后返回使用
         * 04: 当 mode & 8 成立是直接将 value 返回 （commonJS)
         * 05: 当 mode & 4 成立是直接将 value 返回（esModule）
         * 
         * 06: 当上述条件都不成立时，还是要继续处理 value.,定义一个 ns{},
         *     06-1: 如果拿到value是一个可以直接使用的内容，例如 是一个字符串，将它挂载到 ns 的 default 属性上
         */
        if (mode & 1) {
            value = __webpack_require__(value)
        }

        if (mode & 8) return value

        if ((mode & 4) && typeof value == 'object' && value && value.__esModule) {
            return value
        }

        // 当 8 和 4 都没有成立则需要定义 ns 来通过 default 属性返回内容
        var ns = Object.create(null)
        __webpack_require__.r(ns)
        Object.defineProperty(ns, 'default', { enumerable: true, value: value })
        if (mode & 2 && typeof value != 'string') {
            for (var key in value) {
                __webpack_require__.d(ns, key, function (key) {
                    return value[key]
                }.bind(null, key))
            }
        }
        return ns
    }

    // 09 定义 P 属性，用于保存资源访问路径
    __webpack_require__.p = ""

    // 定义变量，存放数组
    let jsonpArray = window['webpackJsonp'] = window['webpackJsonp'] || []

    // 12 保存原生的push方法
    let oldJsonpFunction = jsonpArray.push.bind(jsonpArray)

    // 13 重写原生push
    jsonpArray.push = webpackJsonpCallback

    debugger
    // 10 调用 __webpack_require__ 方法执行模块导入与加载操作
    return __webpack_require__(__webpack_require__.s = './src/index.js')

})
    ({
        "./src/index.js":
            (function (module, exports, __webpack_require__) {
                let name = __webpack_require__.t(/*! ./login.js */ "./src/login.js", 0b0111)
                console.log('index.js执行')
                console.log(name)
            }),
        "./src/login.js":
            (function (module, exports) {
                module.exports = '好好学习'
            })
    })
