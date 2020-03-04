function map(array, fn) {
    let results = [];
    for (let i = 0; i < array.length; i++ ) {
    	let item = fn(array[i], i, array);
        results.push(item);
    }
    return results;
}