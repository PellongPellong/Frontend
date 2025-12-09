'use strict';

export {
    objectOrFunction
};
export {
    isFunction
};
export {
    isMaybeThenable
};

function objectOrFunction(x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
    return typeof x === 'function';
}

function isMaybeThenable(x) {
    return x !== null && typeof x === 'object';
}

var _isArray = undefined;
if (Array.isArray) {
    _isArray = Array.isArray;
} else {
    _isArray = function(x) {
        return Object.prototype.toString.call(x) === '[object Array]';
    };
}

var isArray = _isArray;
export {
    isArray
};