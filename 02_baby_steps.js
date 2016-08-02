var arr = process.argv
var length = Number(arr.length);
var sum = 0
for (var i = 2; i < length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum)

// Suggested solution
// var result = 0  
       
// for (var i = 2; i < process.argv.length; i++)  
//  result += Number(process.argv[i])  
 
// console.log(result) 