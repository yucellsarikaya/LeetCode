/**
 * @param {number[]} nums
 * @return {boolean}
 https://leetcode.com/submissions/detail/841294012/
 */
var containsDuplicate = function(nums) {
    const ayniOlanlariCikar = new Set(nums);
    if(ayniOlanlariCikar.size !== nums.length)
        return true
    return false;
};
