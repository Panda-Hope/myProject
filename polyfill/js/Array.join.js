Array.prototype.join = Array.join || function(separator) {
    var o = Object(this),
        len = o.length >> 0,
        separator = separator === undefined ?  ',' : String(separator),
        str = '';

    for (var i=0;i<len;i++) {
        str += o[i] + separator;
    }
    return str;
};