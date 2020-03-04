function reduce(array, fn, initial) {
    let i = 0;
    let result = initial;
    if (result != 0) {
    	result = array[i++];
    }
    while (i < array.length) {
        result = fn(result, array[i], i, array);
        i++;
    }
    return result;
}