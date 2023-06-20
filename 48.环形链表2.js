/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head) return null
    let set = new Set(), cur = head;
    while (cur != null) {
        if (set.has(cur)) return cur
        set.add(cur)
        cur = cur.next
    }
    return null
};