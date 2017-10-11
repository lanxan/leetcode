/**
 * @param {number[]} nums
 * @return {number[][]}
 * * @description input [1,2,3] will rerun [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 */
 
var subsets = function(nums) {
    var ans = [];
    ans.push([]);
    if (nums.length == 0) {
        return ans;
    } else {
        for(let subsum = 0; subsum < nums.length; subsum++) {
            let tmp = [];
            let top = subsum;
            if (subsum == 0) {
                for(let i = 0; i < nums.length; i++) {
                    ans.push([nums[i]]);
                }
            } else {
                nums.sort();
                for(let i = 0; i < (nums.length - subsum); i++) {
                    tmp = [];
                    for(let x = i; x < top; x++) {
                        tmp.push(nums[x]);
                    }

                    for(let j = top; j < nums.length; j++) {
                        var subset = tmp.slice();
                        subset.push(nums[j]);
                        ans.push(subset);
                    }
                    top++;
                }
            }
        }
    }

    return ans;
};
