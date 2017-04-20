Array.prototype.removeOne = Array.prototype.removeOne || function(index) {
    var o = Object(this),
        len = o.length >> 0,
        arr = [];

    for (var i=0;i<len;i++) {
        index != i && arr.push(o[i]);
    }
    return arr;
};