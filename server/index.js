

const fs=require('fs')

console.log("starting...")
fs.writeFile("create.txt","contenet",(err)=>{
    console.log("file is created",err)
})
console.log("finished...."