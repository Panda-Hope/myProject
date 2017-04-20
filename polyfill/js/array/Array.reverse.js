Array.prototype.reverse = Array.prototype.reverse || function() {
    var temp = [],
        arr = Object(this),
        i = arr.length -1;
        
    while(i >= 0) {
        temp.push(arr[i]);
        i--;
    }
    return arr = temp;
}