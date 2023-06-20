/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head) return head
    let cur = head, target = null;
    let arr = []
    while (cur != null) {
        arr.push(cur);
        cur = cur.next
    }
    if (arr.length - n == 0) return head.next // 只有一个节点的情况,并且删除的节点为当前节点,直接放回null即可
    target = arr[arr.length - n];
    cur = head
    while (cur != null) {
        if (cur.next != target) { cur = cur.next; continue; }
        cur.next = cur.next.next;
        break;
    }
    return head
};
let arr = []
let head = [1, 2, 3, 4, 5]
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
for (let i = 0; i < head.length; i++) {
    arr.push(new ListNode(head[i]))
}
for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
}
removeNthFromEnd(arr[0], 2)