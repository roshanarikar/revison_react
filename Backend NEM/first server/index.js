const http = require("http");
const fs = require("fs")

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("This is home page")
    } else if(request.url==="/data"){
        fs.readFile("./data.json",(err,data)=>{
            if(err){
                response.write(err)
                response.end()
            }else{
                response.end(data)
            }
        })
    }else{
        response.end("Invalid end point")
    }
})

server.listen(4500,()=>{
    console.log("This server is running on 4500")
})