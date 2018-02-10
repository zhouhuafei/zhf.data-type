# 数据类型
```
const datatType = require('zhf.data-type');
datatType.isString('9') // true
datatType.isNumber(9) // true
datatType.isBoolean(true) // true
datatType.isArray([]) // true
datatType.isNull(null) // true
datatType.isUndefined(undefined) // true
datatType.isObject({}) // true
datatType.isDate(new Date()) // true
datatType.isRegExp(new RegExp()) // true
datatType.isRegExp(/a/) // true
datatType.isFunction(function(){}) // true
datatType.isMap(new Map()) // true
datatType.isSet(new Set()) // true
datatType.isPromise(new Promise(function(){})) // true
datatType.isError(new Error()) // true
datatType.isSymbol(Symbol()) // true
```
