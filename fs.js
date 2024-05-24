const f = require('fs')
// console.log(f)
// f.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{   //utf8 file format hota //event callback es6
//     if(err) throw err;
//     console.log(data);

// });
// console.log("hello pninfosys")
// const data = f.readFileSync(__dirname + "/hello.txt", "utf-8");
// console.log(data);
// console.log('hello pninfosys')


try{
    const data = f.readFileSyn(__dirname + "/hello.txt", "utf-8");
console.log(data);

}catch(error){
    console.log(error)
}
console.log('hello pninfosys')