/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) return head
    let pre = null, cur = head, next = null;
    while (cur != null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next
    }

    while (pre != null) {
        console.log(pre.val);
        pre = pre.next
    }
    return pre
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

reverseList(arr[0])