/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/submissions/detail/841302882/
 */
var singleNumber = function(nums) {
    for(var i =0; i< nums.length; i++){
        const twoItemFilter = nums.filter(j => j === nums[i])
        if(twoItemFilter.length === 1){
            return twoItemFilter[0]
        }
    }
};