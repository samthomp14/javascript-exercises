const removeFromArray = function(arr, ...terms) {

    let newArr;
    for (let i = 0; i < terms.length; i++) {
        newArr = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== terms[i]) {
                newArr.push(arr[j]);
            }
        }
        arr = newArr;
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
