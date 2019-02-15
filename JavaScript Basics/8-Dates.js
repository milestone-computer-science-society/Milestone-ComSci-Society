//
// MCSS - JavaScript Basics: Dates
//

const date = new Date();   // Create new date variable

console.log(date.getFullYear());       // Get year
console.log(date.getMonth());          // Get month (0-11)
console.log(date.getDate());           // Get day (1-31)
console.log(date.getHours());          // Get hours (0-23)
console.log(date.getMinutes());        // Get minutes (0-59)
console.log(date.getSeconds());        // Get seconds (0-59)
console.log(date.getMilliseconds());   // Get miliseconds (0-999)
console.log(date.getDay());            // Get day (0-6)

console.log(date.getTime());           // Get miliseconds since January 1, 1970
