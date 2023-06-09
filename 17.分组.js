/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    let _arr = this
    let ans = {}
    for (let i = 0; i < _arr.length; i++) {
        (ans[fn(this[i])] || (ans[fn(this[i])] = [])).push(this[i])
    }
    return ans
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

let res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(function (n) {
    return String(n > 5)
})
console.log(res);