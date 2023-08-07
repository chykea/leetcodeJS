/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 暴力(超时)
var dailyTemperatures = function (temperatures) {
    let res = [];
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j <= temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res
};

var dailyTemperatures = function (temperatures) {

};
console.log(dailyTemperatures([30]));