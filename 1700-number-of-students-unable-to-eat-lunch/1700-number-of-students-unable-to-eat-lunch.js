/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let counter = 0
    
    while (students.length && counter < sandwiches.length){
        let stu = students.shift()
        let sand = sandwiches[0]
        
        if (stu === sand) {
            sandwiches.shift()
            counter = 0
        } else {
            students.push(stu)
            counter++
        }
    }
    
    return students.length
};


// stu[,1,1,1,]   sand[,0,1,1]

// Keep a counter every time a student is pushed to the back, reset it when a sandwich is taken (pop)

// Loop through 