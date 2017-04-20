Array.prototype.find = Array.prototype.find || function(fn, thisArg) {
    var o = Object(this),
        len = o.length >>> 0,
        fnType = typeof fn;

    if (fnType !== 'function') {
        throw new TypeError(fnType + " is not a function");
    }
    
    for (var i=0;i<len;i++) {
        if (fn.call(thisArg, o[i], i, o)) {
            return o[i];
        }
    }
};