const http = require('http');
var url = process.argv[2];
callback = function(response) {
   var str = '';

//another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
   str += chunk;
   console.log(str);
   str = '';
  });

//the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
  response.on('error', function(err) {
    console.log(err);
  });
}

http.get(url, callback).end();

// Suggested Solution

 var http = require('http')  
       
 http.get(process.argv[2], function (response) {  
   response.setEncoding('utf8')  
   response.on('data', console.log)  
   response.on('error', console.error)  
 })  
