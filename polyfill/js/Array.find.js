var Array.find = Array.find || function(fn, thisArg) {
    var o = Object(this),
        len = o.length >>> 0,
        fnType = typeof fn;

    if (fnType !== 'function') {
        throw new TypeError(fnType + " is not a function");
    }

    for (var i=0;i<fnType.length;i++) {
        if (typeof thisArg === undefined ? fn(o[i], i, o) : fn.call(o[i], i, o)) {
            return o[i];
        }
    }
};