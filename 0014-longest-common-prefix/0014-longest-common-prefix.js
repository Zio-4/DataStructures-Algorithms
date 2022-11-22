/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     if (strs.length < 2) return strs[0]
    
//     strs.sort((a,b) => a.length - b.length)
    
//     let pre = strs[0].split('')
    
//     for (let i = 1; i < strs.length; i++) {
//         let word = strs[i]
        
//         // word can be ""
//         if (!word.length) return ""
        
//         for (let j = 0; j < word.length; j++) {
//             if (j == 0 && pre[0] !== word[j]) {
//                 return ""
//             }
            
//             if (word[j] !== pre[j]) {
//                 pre.splice(j)
//             }
//         }
//     }
    
//     return pre.join('')
// };

var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0];
};

// 17 min


// APPROACH


    // Take the first and use it as base for prefix
        // split it into an array to easily remove end characters

    // EDGE CASE: If the first letter does not match in any word, we can break the loop and return ""

    // Compare every letter int he next word to the base prefix
        // if a letter does not match, then from there we pop off of the base prefix array

