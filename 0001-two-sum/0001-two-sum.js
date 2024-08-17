/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
    let now = 0
    let match = null
    
    while(true) {
       let v = target - nums[now] 
       let result = nums.findIndex((num, index) => num === v && now !== index)
        
       if(result !== -1) {
           match = result
           break;
       }
        
       now += 1
   }
    
    return [now, match]
};