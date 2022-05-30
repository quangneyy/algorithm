// n^2
var twoSum = (nums, target) => {
    // n 
    for (let i = 0; i < nums.length; i++) {
        // n
        for (let j = i + 1; j < nums[i].length; j++) {
            if ((nums[i]+nums[j]) === target) {
                return [i, j];
            }
        }
    }
}