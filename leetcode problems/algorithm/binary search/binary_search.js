/*

Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

*/

var search = function(nums, target) {
    const sorted_arr = nums.sort((a, b)=>{
        return a -b
    })
    
    for (let i = 0; i < sorted_arr.length; i ++){
        return sorted_arr.indexOf(target)
    }
    
};

search([-1,0,3,5,9,12], 2);