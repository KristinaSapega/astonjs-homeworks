function getLength(value) {
    if (value !== null && value !== undefined && typeof value.length === 'number') {
        console.log(value.length);
    } else {
        console.log(0);
    }
}

getLength([1, 2, 3, 4]);
getLength({});
getLength(null);