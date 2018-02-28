'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('dataType', function () {
    function typeOf(whatever) {
        return Object.prototype.toString.call(whatever).slice(8, -1);
    }

    return {
        isString: function isString(data) {
            return typeOf(data) === 'String';
        },
        isNumber: function isNumber(data) {
            return typeOf(data) === 'Number';
        },
        isBoolean: function isBoolean(data) {
            return typeOf(data) === 'Boolean';
        },
        isFunction: function isFunction(data) {
            return typeOf(data) === 'Function';
        },
        isNull: function isNull(data) {
            return typeOf(data) === 'Null';
        },
        isUndefined: function isUndefined(data) {
            return typeOf(data) === 'Undefined';
        },
        isObject: function isObject(data) {
            return typeOf(data) === 'Object';
        },
        isArray: function isArray(data) {
            return typeOf(data) === 'Array';
        },
        isDate: function isDate(data) {
            return typeOf(data) === 'Date';
        },
        isRegExp: function isRegExp(data) {
            return typeOf(data) === 'RegExp';
        },
        isError: function isError(data) {
            return typeOf(data) === 'Error';
        },
        isSymbol: function isSymbol(data) {
            return typeOf(data) === 'Symbol';
        },
        isPromise: function isPromise(data) {
            return typeOf(data) === 'Promise';
        },
        isSet: function isSet(data) {
            return typeOf(data) === 'Set';
        },
        isMap: function isMap(data) {
            return typeOf(data) === 'Map';
        }
    };
});