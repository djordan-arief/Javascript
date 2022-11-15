/*

Given an integer array nums, return true if 
any value appears at least twice in the array, 
and return false if every element is distinct.


*/
var containsDuplicate = function(nums) {
    let duplicate = []
    let status = false;
    for (let i = 0; i < nums.length; i++){
        if (duplicate.includes(nums[i])){
            status = true
        }
        else{
            duplicate.push(nums[i])
        }
    }
    
    return status
};

containsDuplicate([1, 2, 3, 4])