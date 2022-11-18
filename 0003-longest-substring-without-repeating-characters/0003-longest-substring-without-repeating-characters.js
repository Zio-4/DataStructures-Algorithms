/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    
    const subString = new Set()
    
    let left = 0
    
    let max = 0
    
    for (let right = 0; right < s.length; right++) {
        let curr = s[right]
        
        if (subString.has(curr)) {
            while (subString.has(curr)) {
                subString.delete(s[left])
                left++
            }
        }
        subString.add(curr)
        max = Math.max(max, subString.size)
    }
    
    return max
};

// var lengthOfLongestSubstring = function(s) {
//     if (!s) return 0
    
//     const subString = new Set()
    
//     let left = 0
    
//     let max = 0
    
//     for (let right = 0; right < s.length; right++) {
//         let curr = s[right]
        
//         if (subString.has(curr)) {
//             while (subString.has(curr)) {
//                 subString.delete(s[left])
//                 left++
//             }
//             subString.add(curr)
//         } else {
//             subString.add(curr)
//             max = Math.max(max, subString.size)
//         }
//     }
    
//     return max
// };


// Sliding window and add to a Set()

// APPROACH

    // Initialize a set
    // Initialize left and right pointers
        // start right at 0 index to add the first element

    // Initialize a max variable

    // loop and check if the element at right pointer is in the set
        // If it is in the set:
            // calculate max
            // while the value is in the set:
                // remove values at the left index and move left up
            // add the value again to the set once done with while loop

        // If not in set,
            // Add with right pointer

        // Keep updating max based on the size of the largest set

    // return max 