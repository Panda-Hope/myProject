/* ============================================================
 * Check A Object If Has A Element,
 * Not Include The Property Which Enumerable Property Is False
 * ============================================================ */
function isEmptyObject(o) {
    if (!(o instanceof Object) ) {
        throw new TypeError(o + ' is not a obejct');
    }
    
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            return false;
        }
    }
    
    return true;
}