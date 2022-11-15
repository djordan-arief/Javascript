/*

Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.


*/
var searchInsert = function(nums, target) {
    nums.push(target)
    const sorted_arr = nums.sort((a, b)=>{
        return a-b
    })
    
    for (let i = 0; i < sorted_arr.length; i++){
        return sorted_arr.indexOf(target)
    }
};