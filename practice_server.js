const a = require('http')
// localhost:3500
http://localhost:port/
a.createServer(function(req,res){
    res.write('hello gwl it my server')
    res.end()
}).listen(3500,()=>console.log("Server is running"))
