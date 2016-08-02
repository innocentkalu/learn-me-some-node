var fs = require('fs');
var path = process.argv[2];
var text = process.argv[3];
function printFiles(path,text) {
  fs.readdir(path, function(err,list) {
    if (!err) {
      function searchStringInArray(text, list) {
        for (var j=0; j<list.length; j++) {
            var n = list[j].indexOf(text);
            if (n > 0) {
              console.log(list[j]);
            }
        }
      }
      searchStringInArray(text, list)
    }
  })
}
printFiles(path,text);

//Suggested Solution

 // var fs = require('fs')  
 // var path = require('path')  
   
 // fs.readdir(process.argv[2], function (err, list) {  
 //   list.forEach(function (file) {  
 //     if (path.extname(file) === '.' + process.argv[3])  
 //       console.log(file)  
 //   })  
 // })  

