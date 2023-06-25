/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null
    let size = 0;
    let tmp = head, last = null;
    while (tmp != null) {
        size++;
        if (tmp && tmp.next == null) last = tmp
        tmp = tmp.next
    }

    let cnt = k % size;
    if (cnt == 0) return head
    tmp = head;
    let tmpLinked = null
    for (let i = 0; i < size - cnt - 1; i++) {
        tmp = tmp.next
    }
    tmpLinked = tmp.next
    tmp.next = null
    last.next = head;
    return tmpLinked

};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let nums = [0, 1, 2]
let node = buildLinked(nums)
function buildLinked(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.push(new ListNode(nums[i]))
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }
    return arr[0]
}


function logs(head) {
    let cur = head;
    while (cur != null) {
        console.log(cur.val)
        cur = cur.next
    }
}

logs(rotateRight(node, 4))