Array.prototype.forEach = Array.forEach || function(fn, thisArg) {
    var o = Object(this),
        len = o.length >>> 0,
        fnType = typeof fn;

    if (fnType !== 'function') {
        throw new TypeError(fnType + " is not a function");
    }

    for (var item in o) {
        if (o.hasOwnProperty(item)) {
            fn.call(thisArg, o[item], item, o);
        }
    }
};