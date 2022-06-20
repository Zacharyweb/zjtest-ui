import {
  require_baseKeys,
  require_getTag,
  require_isArguments,
  require_isArray,
  require_isArrayLike,
  require_isBuffer,
  require_isPrototype,
  require_isTypedArray
} from "./chunk-AOKZHRSQ.js";
import {
  __commonJS,
  init_define_DEMOBLOCK_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-TFDLIXUV.js";

// node_modules/lodash/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/lodash/isEmpty.js"(exports, module) {
    init_define_DEMOBLOCK_LOCALES();
    init_define_MZ_ZOOM_OPTIONS();
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLike = require_isArrayLike();
    var isBuffer = require_isBuffer();
    var isPrototype = require_isPrototype();
    var isTypedArray = require_isTypedArray();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }
    module.exports = isEmpty;
  }
});

// dep:lodash_isEmpty
init_define_DEMOBLOCK_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var lodash_isEmpty_default = require_isEmpty();
export {
  lodash_isEmpty_default as default
};
//# sourceMappingURL=lodash_isEmpty.js.map
