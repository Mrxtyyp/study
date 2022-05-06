
        (function (modules) {
            function require(id) {
                const [fn, mapping] = modules[id]

                function localRequire(filekey) {
                    return require(mapping[filekey])
                }

                const module = {
                    exports: {}
                }

                fn(localRequire, module, module.exports)
            }
            require(0)
        })({
            0: [
                function (require, module, exports) {
                    "use strict";

var _info = _interopRequireDefault(require("./info.js"));

var _consts = require("./consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_consts.who + _info["default"]);
                },
                {"./info.js":1,"./consts.js":2}
            ],
        
            1: [
                function (require, module, exports) {
                    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _consts = require("./consts.js");

var _default = "\u8FD9\u662F\u6211\u7684\u540D\u5B57\uFF1A".concat(_consts.name);

exports["default"] = _default;
                },
                {"./consts.js":3}
            ],
        
            2: [
                function (require, module, exports) {
                    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.who = exports.name = void 0;
var name = '张三';
exports.name = name;
var who = '谁是？';
exports.who = who;
                },
                {}
            ],
        
            3: [
                function (require, module, exports) {
                    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.who = exports.name = void 0;
var name = '张三';
exports.name = name;
var who = '谁是？';
exports.who = who;
                },
                {}
            ],
        })
    