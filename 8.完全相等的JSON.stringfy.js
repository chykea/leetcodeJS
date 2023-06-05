/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (typeof o1 !== 'object' || typeof o2 !== 'object' || o1 === null || o2 === null) return o1 === o2
    if ((typeof o1 === 'object' && typeof o2 !== 'object') || (typeof o1 !== 'object' && typeof o2 === 'object')) return false
    if (Object.entries(o1).length !== Object.entries(o2).length || (Array.isArray(o1) ^ Array.isArray(o2))) return false

    let flag = true
    for (let key in o1) {
        if ((typeof o1[key] === 'object' && o1[key] !== null) && (typeof o2[key] === 'object' && o2[key] !== null)) {
            return flag && areDeeplyEqual(o1[key], o2[key])
        } else if (o1[key] !== o2[key]) {
            return false
        }
    }

};