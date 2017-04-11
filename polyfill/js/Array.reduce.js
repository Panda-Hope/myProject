Array.prototype.reduce = Array.prototype.reduce || function(callback, initialValue) {
    if (this == null) {
        throw new TypeError("called on null or undefined");
    }
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
        throw new TypeError(callback + " is not a function"); 
    }
    if (this.length <= 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    var o = Object(this),
        len = o.length >>> 0,
        accumulator = initialValue === undefined ? o[0] : initialValue; 
    for (var i=0;i<len;i++) {
        if (i == 0 && initialValue === undefined) continue;
        if (i in o) {
           accumulator =  callback(accumulator, o[i], i, this);
        }
    }
    return accumulator;
}