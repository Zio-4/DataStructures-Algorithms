/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (temperatures.length === 1) return [0]
    
    let days = []
    
    while(temperatures.length) {
        let currTemp = temperatures[0]
        
        temperatures.shift()
        
        let hotterDay = temperatures.findIndex(ele => ele > currTemp)
        
        hotterDay > -1 ? days.push(Math.abs(hotterDay + 1)) : days.push(0)
    }
    
    return days
};