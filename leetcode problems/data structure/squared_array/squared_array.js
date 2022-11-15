/*

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.


*/
var sortedSquares = function(nums) {
    const square_arr = nums.map((num)=>{
        return Math.pow(num, 2)
    })
    
    return square_arr.sort((a, b)=>{
        return a-b
    })
};

sortedSquares([-4,-1,0,3,10]);