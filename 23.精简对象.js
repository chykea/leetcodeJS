var compactObject = function (obj) {

    if (Array.isArray(obj)) {
        return obj.filter(item => item).map(compactObject)
    }
    for (let key in obj) {
        if (!Boolean(obj[key])) delete obj[key]
        else if (typeof obj[key] === 'object' && obj[key] != null) obj[key] = compactObject(obj[key])
    }
    return obj
};
console.log(compactObject([null, 0, 5, [0], [false, 16]]));