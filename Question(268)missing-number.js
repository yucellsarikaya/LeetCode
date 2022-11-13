/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/submissions/detail/841296920/
 */
var missingNumber = function(nums) {
   for(var i = 0; i<= nums.length; i++){
       const varMi = nums.find(j => j === i)
       if(varMi === undefined){
           return i
       }
   }
};