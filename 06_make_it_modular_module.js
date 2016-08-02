var fs = require('fs');



module.exports = function(path,ext,done) {
  // fs.readdir(path, function(err,callback) {
  //   if (!err) {
  //     function searchStringInArray(text, callback) {
  //       for (var j=0; j<callback.length; j++) {
  //           var n = callback[j].indexOf(text);
  //           if (n > 0) {
  //             console.log(callback[j]);
  //           }
  //       }
  //     }
  //     searchStringInArray(text, callback)
  //   }
//  });
  fs.readdir(path, function(err, files) {
    if (err)
      return done(err);

      var goodFiles = [];
      for (var j=0; j<files.length; j++) {
        var n = files[j].indexOf(ext);
        if (n > 0) {
          goodFiles.push(files[j]);
        }
      }
      done(null, goodFiles);
  });
};

// Suggested Implementation

 // var fs = require('fs')  
 // var path = require('path')  
   
 // module.exports = function (dir, filterStr, callback) {  
   
 //   fs.readdir(dir, function (err, list) {  
 //     if (err)  
 //       return callback(err)  
   
 //     list = list.filter(function (file) {  
 //       return path.extname(file) === '.' + filterStr  
 //     })  
   
 //     callback(null, list)  
 //   })  
 // }  

