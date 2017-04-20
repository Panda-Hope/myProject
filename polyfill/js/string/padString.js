function padString(str, split, spliceChar, padChar, decimal) {
    var str = String(str),
        len = str.length,
        split = split >> 0,
        decimal = decimal >>> 0,
        padChar = padChar || '0',
        first = split >= 0 ? str.slice(0, split) : str.slice(0, len+split),
        second = decimal > 0 ? str.slice(split).slice(0, decimal) : str.slice(split);

    if (spliceChar === undefined) {
        return second;
    }else {
        first = first || padChar;
        return first + spliceChar + second;
    }
}