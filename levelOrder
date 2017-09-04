/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var ans = [];
    if (root !== null) {
        loop(root, 0);
    }
    
    return ans;

    function loop(node, level) {
        
        if (node.left !== null) {
            loop(node.left, level+1);
        }
        if (node.right !== null) {
            loop(node.right, level+1);
        }
        if (!Array.isArray(ans[level])) {
            ans[level] = [];
        }
        
        ans[level].push(node.val);
    }
};
