(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'Object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('dataType', function () {
    function typeOf(whatever) {
        return Object.prototype.toString.call(whatever).slice(8, -1);
    }

    return {
        isString(data) {
            return typeOf(data) === 'String';
        },
        isNumber(data) {
            return typeOf(data) === 'Number';
        },
        isBoolean(data) {
            return typeOf(data) === 'Boolean';
        },
        isFunction(data) {
            return typeOf(data) === 'Function';
        },
        isNull(data) {
            return typeOf(data) === 'Null';
        },
        isUndefined(data) {
            return typeOf(data) === 'Undefined';
        },
        isObject(data) {
            return typeOf(data) === 'Object';
        },
        isArray(data) {
            return typeOf(data) === 'Array';
        },
        isDate(data) {
            return typeOf(data) === 'Date';
        },
        isRegExp(data) {
            return typeOf(data) === 'RegExp';
        },
        isError(data) {
            return typeOf(data) === 'Error';
        },
        isSymbol(data) {
            return typeOf(data) === 'Symbol';
        },
        isPromise(data) {
            return typeOf(data) === 'Promise';
        },
        isSet(data) {
            return typeOf(data) === 'Set';
        },
        isMap(data) {
            return typeOf(data) === 'Map';
        },
    };
});
