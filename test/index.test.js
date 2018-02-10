const datatType = require('../dist/index.min');

test(`datatType.isString('9') // true`, () => {
    expect(datatType.isString('9')).toEqual(true);
});

test(`datatType.isNumber(9) // true`, () => {
    expect(datatType.isNumber(9)).toEqual(true);
});

test(`datatType.isBoolean(true) // true`, () => {
    expect(datatType.isBoolean(true)).toEqual(true);
});

test(`datatType.isArray([]) // true`, () => {
    expect(datatType.isArray([])).toEqual(true);
});

test(`datatType.isNull(null) // true`, () => {
    expect(datatType.isNull(null)).toEqual(true);
});

test(`datatType.isUndefined(undefined) // true`, () => {
    expect(datatType.isUndefined(undefined)).toEqual(true);
});

test(`datatType.isObject({}) // true`, () => {
    expect(datatType.isObject({})).toEqual(true);
});

test(`datatType.isDate(new Date()) // true`, () => {
    expect(datatType.isDate(new Date())).toEqual(true);
});

test(`datatType.isRegExp(new RegExp()) // true`, () => {
    expect(datatType.isRegExp(new RegExp())).toEqual(true);
});

test(`datatType.isRegExp(/a/) // true`, () => {
    expect(datatType.isRegExp(/a/)).toEqual(true);
});

test(`datatType.isFunction(function(){}) // true`, () => {
    expect(datatType.isFunction(function () {
    })).toEqual(true);
});

test(`datatType.isMap(new Map()) // true`, () => {
    expect(datatType.isMap(new Map())).toEqual(true);
});

test(`datatType.isSet(new Set()) // true`, () => {
    expect(datatType.isSet(new Set())).toEqual(true);
});

test(`datatType.isPromise(new Promise(function(){})) // true`, () => {
    expect(datatType.isPromise(new Promise(function () {
    }))).toEqual(true);
});

test(`datatType.isError(new Error()) // true`, () => {
    expect(datatType.isError(new Error())).toEqual(true);
});

test(`datatType.isSymbol(Symbol()) // true`, () => {
    // Symbol 的应用
    const name = Symbol();
    const obj = {
        name: 'zhouhuafei - name',
        [name]: 'zhouhuafei - Symbol',
    };
    console.log('obj.name:', obj.name);
    console.log('obj[name]:', obj[name]);
    // Symbol值作为对象属性名时，不能用点运算符。
    // Symbol值作为对象属性名时，不能被遍历。
    // 没感觉到Symbol有什么巨大的优势 以前obj[name]就是obj.name 用了Symbol之后obj[name]就不是obj.name了。
    expect(datatType.isSymbol(Symbol())).toEqual(true);
});
