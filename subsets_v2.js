/**
 * @param {number[]} nums
 * @return {number[][]}
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
