/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let count = functions.length - 1;
        let res = x;
        for (let i = count; i >= 0; i--) {
            let fn = functions[i];
            res = fn(res)
        }
        return res
    }
};
const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4));// 9