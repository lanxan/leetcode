/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    if (l1 === null && l2 === null) {
        return new ListNode();
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1; 
    }
    
    let ans = new ListNode(0), node = ans; 
    let val1 = 0, val2 = 0, ones = 0, tens = 0;

    while (l1 !== null || l2 !== null) {
        if (l1 !== null) {
            val1 = l1.val;
            l1 = l1.next;
        } else {
            val1 = 0;
        }

        if (l2 !== null) {
            val2 = l2.val;
            l2 = l2.next;
        } else {
            val2 = 0;
        }

        sum = val1 + val2 + tens;
        if (sum >= 10) {
            tens = 1;
            ones = sum - 10;
        } else {
            tens = 0;
            ones = sum;
        }

        node.next = new ListNode(ones);
        node = node.next;
    }

    if (tens !== 0) {
        node.next = new ListNode(tens);
    }

    return ans.next;
};
