Array.prototype.indexOf = Array.indexOf || function(searchElement, fromIndex) {
    var o = Object(this),
        len = o.length >> 0,
        formatIndex = fromIndex >> 0,
        index = formatIndex >= 0 ? Math.min(formatIndex, len) : Math.max(formatIndex+len, 0);

    for (var i=index;i<len;i++) {
        if (o[i] === searchElement || (isNaN(searchElement) && isNaN(o[i]))) {
            return i;
        }
    }
    return -1;
};