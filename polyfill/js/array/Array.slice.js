Array.prototype.from = Array.prototype.from || (function () {
    var getPoint = function(point, len) {
        return point >= 0 ? Math.min(point, len) : Math.max(point+len, 0);
    };
            
    var getInterval = function(start, end, len) {
        var relativeLength = len >>> 0,
            relativeStart = start >> 0,
            relativeEnd = end === undefined ? relativeLength : end >> 0;

        return [getPoint(relativeStart, relativeLength), getPoint(relativeEnd, relativeLength)];
    };

    return function(start, end) {
        var arr = Array.from(this),
            len = arr.length,
            interval = getInterval(start, end, len);

        return arr.filter(function(ele, index) {
            return index >= interval[0] && index < interval[1];
        });
    };
})();
