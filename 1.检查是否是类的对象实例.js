/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    function checkIfInstanceOf(obj, classFunction) {
        if (obj === null || obj === undefined || classFunction == null || classFunction == undefined) return false;
        while ((obj = obj.__proto__) && obj !== classFunction.prototype);
        return obj === classFunction.prototype;
    }
};

console.log(checkIfInstanceOf(Array, Object));
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */