/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(input) {
    var start = 0
    var end = input.length - 1
    while (start < end) {
        var s = input.charCodeAt(start)
        var e = input.charCodeAt(end)
    
        if (!isLetter(s)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }
    
        if (toLowerCase(s) !== toLowerCase(e)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}


// Edge case

    // String is empty or just has non alpha characters => true
    // String is length of 1



// Approach 

    // turn to lowercase
    // split string by spaces to get an array of all the words 
    // iterate through every word and remove (splice) non Alpha characters
    // join the array
    // Loop with two pointers, one at the beggining and one at the end
        // if the characters don't match return false
        // else if left and right pointers meet then return true




    