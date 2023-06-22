/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head) return null
    let cur = head, tmp = null;
    let arr = []
    while (cur != null) {
        tmp = cur.next;
        cur.next = null
        arr.push(cur)
        cur = tmp
    }
    arr.sort((a, b) => a.val - b.val)
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }
    return arr[0]
};