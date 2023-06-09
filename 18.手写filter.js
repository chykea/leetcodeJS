/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr
};
arr = [1, 2, 3], fn = function firstIndex(n, i) { return i === 0; }
console.log(filter(arr, fn));