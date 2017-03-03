Array.prototype.fill = Array.prototype.fill || (function() {
    var getPoint = function(point, len) {
        return point >= 0 ? Math.min(point, len) : Math.max(point+len, 0);
    };
         
    var getInterval = function(start, end, len) {
        var relativeLength = len >>> 0,
            relativeStart = start >> 0,
            relativeEnd = end === undefined ? relativeLength : end >> 0;

        return [getPoint(relativeStart, relativeLength), getPoint(relativeEnd, relativeLength)];
    };

    return function (value, start, end) {
        if (this == null) {
            throw new TypeError('called on null or undefined');
        }

        var o = Object(this),
            interval = getInterval(start, end, o.length);

        for (var i=interval[0];i<interval[1];i++) {
            o[i] = value;
        }

        return o;
    }   
})();