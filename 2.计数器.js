// 闭包..
var createCounter = function (n) {
    var count = n;
    return function () {
        return count++;
    };
};

var counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
