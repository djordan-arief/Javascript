/*


Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 0){
            let number_zero = nums.splice(nums.indexOf(nums[i]), 1);
            nums.push(0)
        }
    }
    return nums
};

moveZeroes([0,0,1]);