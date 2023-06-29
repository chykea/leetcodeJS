/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0;
    while (x != 0) {
        if (res > Math.pow(2, 31) - 1 || res < Math.pow(2, -31)) return 0
        let dight = x % 10;
        // console.log(dight);
        res = res * 10 + dight;
        x = ~~(x / 10);
    }
    return res
};
console.log(reverse(-321));