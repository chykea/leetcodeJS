/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let pre = 0, cur = 1;
    yield pre;
    yield cur
    while (true) {
        [pre, cur] = [cur, cur + pre]
    }
};
