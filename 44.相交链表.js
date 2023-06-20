/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let left = headA, right = headB;
    while (left != right) {
        left = left == null ? headB : left.next
        right = right == null ? headA : right.next
    }
    return left
};