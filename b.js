const h = require('http')
//console.log(h)
// localhost:3000
// //create server
http://localhost:port/
h.createServer(function(req,res){
    res.write('welcome node to himanshu bhadoria server')
    res.end()

}).listen(3000,()=>console.log("Server is running localhost:3000"))