/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    let res = [];
    for (let i = 0; i < rowsCount; i++) {
        res.push([]);
    }
    let seq = true;
    let start = 0;
    for (let i = 0; i < this.length; i++) {

        res[start].push(this[i])
        console.log(start);
        if (seq) {
            if (start === rowsCount - 1) {
                seq = false
            } else {
                start++
            }
        } else {
            if (start === 0) {
                seq = true
            } else {
                start--
            }
        }
    }
    return res
}

var nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(nums.snail(5, 4));