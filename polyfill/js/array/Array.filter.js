Array.prototype.filter = Array.prototype.filter || function(callback, thisArg) {
    if (this == null) {
        throw new TypeError("called on null or undefiened");
    }
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
        throw new TypeError(callback + " is not a function"); 
    }

    var o = Object(this),
        len = o.length >>> 0,
        tempArr = [];
    for (var i=0;i<len;i++) {
        if (i in o) {
            callback.call(thisArg, o[i], i, o) && tempArr.push(o[i]);
        }
    }
    return tempArr;
};
