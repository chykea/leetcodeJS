/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let dummy = new ListNode(null, 0)
    dummy.next = head;
    let cur = dummy, next = null, nextnext = null;
    while (cur.next != null && cur.next.next != null) {
        nextnext = cur.next.next.next;
        next = cur.next;

        cur.next = cur.next.next;
        cur.next.next = next
        cur.next.next.next = nextnext
        cur = cur.next.next
    }
    return dummy.next

};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}