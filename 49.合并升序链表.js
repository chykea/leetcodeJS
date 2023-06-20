/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null
    let l1 = list1, l2 = list2;
    let arr = [];
    while (l1 != null && l2 != null) {
        if (l1.val > l2.val) {
            arr.push(l2)
            l2 = l2.next
        } else {
            arr.push(l1)
            l1 = l1.next
        }
    }
    while (l1 != null) {
        arr.push(l1)
        l1 = l1.next
    }
    while (l2 != null) {
        arr.push(l2)
        l2 = l2.next
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }
    return arr[0]
};  