
// 暴力解法
var addDigits = function (num) {
    if (num < 10) return num
    let queue = [num + ""];
    while (queue.length !== 0) {
        let c = queue.pop().split('').map(item => parseInt(item));
        let sum = c.reduce((pre, cur) => {
            return pre + cur
        })
        if (sum >= 10) queue.push(sum + "")
        else return sum
    }
};
// 数学方法
var addDigits = function (num) {
    if (num == 0) return 0
    if (num % 9 == 0) return 9
    return num % 9
};
var addDigits = function (num) {

    while (num >= 10) {
        let sum = 0;
        while (num != 0) {
            sum += num % 10;
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num
}


console.log(addDigits(386));