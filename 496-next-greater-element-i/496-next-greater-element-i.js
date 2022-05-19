/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
//     if (nums1.length === 1 && nums2.length ===1 && nums1 === nums2) return [-1]
//     const ans = []

//     for (let i = 0; i < nums1.length; i++){
//         let num = nums1[i]
//         let idxNums2 = nums2.indexOf(num)
        
//         for (let i = idxNums2; i < nums2.length; i++){
//             let num2 = nums2[i]
            
//             if (num2 > nums2[idxNums2]){
//                 ans.push(num2)
//                 break
//             } else if (i === nums2.length - 1){
//                 ans.push(-1)
//             }
//         }
//     }
//     return ans
// };

var nextGreaterElement = function(findNums, nums) {
    return findNums.map(n => {
        let found = nums.indexOf(n);
        
            // find the next greater element's index
            while (nums[++found] < n);
            // -1 if not found
            if (found >= nums.length) found = -1;
            else found = nums[found];

        
        return found;
    });
};

// Loop over nums1, for every number find it in nums2 then iterate from that point till the end looking for a greater number
// if nothing found, push -1 to ans array

45 - 28