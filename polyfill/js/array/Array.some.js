Array.prototype.some = Array.prototype.some || function(callback, thisArg) {
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
        throw new TypeError(callback + 'is not a function');
    }

    var o = Object(this);
    
    for (var i=0;i<o.length;i++) {
        var result = thisArg !== undefined ? callback.call(thisArg, o[i], i, o) : callback(o[i], i, o);
        if (result) {
            return true;
        }
    }
};