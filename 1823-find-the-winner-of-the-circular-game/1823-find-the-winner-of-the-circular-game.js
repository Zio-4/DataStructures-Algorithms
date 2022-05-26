/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    if (n.length === 1) return n[0]
    
    let friends = []
    
    for (let i = 1; i <= n; i++) {
        friends.push(i)
    }
    
    let counter = 1
    
    while (friends.length > 1) {
        while (counter !== k) {
            friends.push(friends.shift())
            counter++
        }
        
        friends.shift()
        counter = 1
    }
    
    return friends[0]
};

// Shift from the front of the array and push to the back while the counter is not !== k
// increase the counter++
// otherwise shift that friend
// reset the counter to 1
// if there is only 1 friend left we return him

// if friends.length === 1 return friends[0]
