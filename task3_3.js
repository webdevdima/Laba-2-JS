function getEnumProps(obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(key);
    }
    return arr;
}