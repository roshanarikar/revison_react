const http = require("http");

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("This is home page")
    } else if(request.url==="/data"){
        response.end("This is data page")
    }else{
        response.end("Invalid end point")
    }
})

server.listen(4500,()=>{
    console.log("This server is running on 4500")
})