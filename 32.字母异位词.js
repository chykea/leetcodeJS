/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map()

    for (let i = 0; i < strs.length; i++) {
        let arr = Array.from(strs[i])

        arr.sort()
        let key = arr.toString()
        let item = map.get(key)
        if (!item) {
            map.set(key, [strs[i]])
        } else {
            map.set(key, [...item, strs[i]])
        }
    }
    return Array.from(map.values())
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

