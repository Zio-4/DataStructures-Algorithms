/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let y = sr
    let x = sc
    
    const startColor = image[sr][sc]
    
    function dfs(row, col) {
       //      top
       // left        right
       //      bottom
        
        if (row < 0 || 
            col >= image[0].length || 
            row >= image.length || 
            col < 0 ||
            image[row][col] !== startColor || 
            image[row][col] === color) {
            return
        }
        
        image[row][col] = color
      
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row + 1, col)
        dfs(row, col - 1)
        
    }
    
    dfs(sr, sc)
    
    return image
};

// DFS on the matrix

// Conditions out of bounds in any direction || color is different || the color is already the new one