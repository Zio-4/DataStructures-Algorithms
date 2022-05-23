/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    if (tickets.length === 1) return tickets[0]
    
    let time = 0
    
    while (tickets[k] !== 0) {
    
        for (let i = 0; i < tickets.length; i++){
            if (tickets[k] === 0) return time
            if (tickets[i] !== 0) {
                tickets[i]= tickets[i] - 1
                time++
            }
            
        }
    }
    
    return time
};

// Loop over the tickets while the k element is not 0
// for every iteration if the element it not 0 subtract 1
// keep a counter for every subtraction operation
// return the counter (time)
