/*

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.


*/
var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};

maxSubArray ([5,4,-1,7,8]);