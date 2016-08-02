
var mymodule = require('./06_make_it_modular_module')

// function callback(err,files) {
//   if (err) {
//     console.log(err);
//   } else {
//     files.forEach(function(file){
//       console.log(file);
//     });
//   }
// }
// mymodule(process.argv[2],process.argv[3],callback)



mymodule(process.argv[2], process.argv[3], function(err,files) {
  if (err) {
    console.log(err);
  } else {
    files.forEach(function(file){
      console.log(file);
    });
  }
})

// Suggested Implementation

// var filterFn = require('./solution_filter.js')  
// var dir = process.argv[2]  
// var filterStr = process.argv[3]  
 
// filterFn(dir, filterStr, function (err, list) {  
//  if (err)  
//    return console.error('There was an error:', err)  
 
//  list.forEach(function (file) {  
//    console.log(file)  
//  })  
// })  


