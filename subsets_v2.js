/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description input [1,2,3] will rerun [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 */
var subsets = function(nums) {
    var ans = [], tmp = [];
    ans.push([]);
    nums.sort();
    for(let i = 0; i < nums.length; i++) {
        let ansLength = ans.length;
        for(let j = 0; j < ansLength; j++) {
            tmp = ans[j].slice();
            tmp.push(nums[i]);
            ans.push(tmp);
        }
    }

    return ans;
};
