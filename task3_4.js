function upperProps(obj) {
    var arr = [];
    for (var key in obj) {
        key = key.toUpperCase();
        arr.push(key);
    }
    return arr;
}