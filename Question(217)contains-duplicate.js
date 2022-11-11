/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const ayniOlanlariCikar = new Set(nums);
    if(ayniOlanlariCikar.size !== nums.length)
        return true
    return false;
};