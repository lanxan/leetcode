/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    var getLongestArray = function(arr) {
        let bigger = arr.pop();
        for (let i in arr) {
            if (bigger.length < arr[i].length) {
                bigger = tmp[i];
            }
        }
        
        return bigger;
    };
    
    var recursive = function(ans, i, nowLcm) {
        for(let j = i+1; j < uni.length; j++) {
            if(nowLcm % uni[j] === 0 || uni[j] % nowLcm === 0) {
                ans[j] = recursive(j, lcm(nowLcm, uni[j]));
                ans[i].push(uni[j]);
            }
        }
    
        return ans;
    };

    var compare = function(m,n) {
        return m-n;
    };

    var gcd = function(m, n) { 
        return n === 0 ? m : gcd(n, m % n);
    };

    var lcm = function(m, n) { 
        return m * n / gcd(m, n);
    };
    
    let uni = nums.filter((v, i, a) => i !== 0 || a.indexOf(v) === i);
    if (uni.length == 0 || uni.length == 1) {
        return uni;
    }
    uni = uni.sort(compare);
    
    let ans = [], tmp = [], target = 0, ans_key = 0, recode = [];
    
    for(let i = 0; i < uni.length; i++) {
        if (recode[i] == 1) {
            continue;
        }

        tmp = recursive([uni[i]], i+1, uni[i]);
        let bigger = tmp.pop();
        
        ans.push(getLongestArray(tmp));
        ans_key++;
    }
    
    return getLongestArray(ans);
};
