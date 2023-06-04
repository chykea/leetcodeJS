var TimeLimitedCache = function () {
    this.dataStore = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let flag = true;
    if (!this.dataStore[key]) {
        flag = false;
    }
    this.dataStore[key] = {
        value,
        duration,
        timeStamp: performance.now()
    }
    return flag;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    let nowDate = performance.now();
    let val = this.dataStore[key].value;
    let timeStamp = this.dataStore[key].timeStamp;
    let duration = this.dataStore[key].duration;
    if (val && (nowDate - timeStamp) < duration) {
        return val;
    }
    delete this.dataStore[key];
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let keyArr = Object.keys(this.dataStore);
    let count = 0;
    for (let key of keyArr) {
        count += this.get(key) === -1 ? 0 : 1;
    }
    return count;
};

