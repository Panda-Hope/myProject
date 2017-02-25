var Array.from = Array.from || (function () {
    var getPoint = function(point, len) {
        point = Math.floor(point);
        return isNaN(point) ? 0 : (point < 0 ? (+point > len ? 0 : len + point) : (point > len ? len : point));
    };

    var getInterval = function(start, end, len) {
        start = start == null ? 0 : getPoint(start, len);
        end = end == null ? len : getPoint(end, len);

        return [start, end];
    };

    return function(arr, start, end) {
        var arr = Array.from(arr),
            len = arr.length,
            interval = getInterval(start, end, len);

        return arr.filter(function(ele, index) {
            return index >= interval[0] && index < interval[1];
        });
    };
})();