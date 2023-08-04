/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === ']') {
            if (stack.pop() !== '[') return false
        }
        else if (c === '}') {
            if (stack.pop() !== '{') return false
        }
        else if (c === ')') {
            if (stack.pop() !== '(') return false
        } else
            stack.push(c)

    }
    return stack.length === 0 ? true : false
};
console.log(isValid("{[]}"));