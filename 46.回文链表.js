/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return false
    if (head && !head.next) return true
    let arr = [], cur = head;
    while (cur != null) {
        arr.push(cur);
        cur = cur.next
    }
    cur = null;
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        if (arr[left].val !== arr[right].val) return false
        left++;
        right--;
    }
    return true

};