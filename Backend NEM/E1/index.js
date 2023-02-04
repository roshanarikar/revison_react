const http = require("http");
const fs = require("fs")
const dns = require("node:dns")
const cowsay = require("cowsay")
var array = ["Roshan","Yogesh","Nrupul","Pulkit","Prateek"]
let param = process.argv[2]

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.setHeader("Content-type", "text/html")
       response.end("<h1>Hello First Node</h1>")
    } 
    else if(request.url==="/writeinfile"){
        fs.writeFile("./employee.txt","Employee Names are as foloows",()=>{
            if(err){
                request.end("There is an error")
                console.log(err)
            }
            else{
                response.setHeader("Conetxt-text","text/html")
                response.end("<h1>Data is written in file</h1>")
            }
        })
    }
    else if(request.url==="/enternames"){
        array.map(ele=>{
            fs.appendFile("./employee.txt",`\n${ele} `,(err)=>{
                if(err){
                    response.end("There is error in adding names")
                    console.log(err)
                }
                else{
                    response.setHeader("Content-type","text/html")
                    response.end("<h1>All the names are added</h1>")
                }
            })
        })
    }
    else if(request.url==="/alldetail"){
        fs.readFile("/employee.txt","utf-8",(err,data)=>{
            if(err){
                response.end("There is error in reading file")
                console.log(err)
            }
            else{
                response.end(cowsay.say({
                    text:data
                }))
            }
        })
    }
    else if(request.url==="/address"){
        dns.lookup(param,(err,address,family)=>{
            response.write("The IP Adress is\n")
            response.end(address)
        })
    }
    else if(request.url=="/delete"){
       fs.unlink("./employee.txt",(err)=>{
        if(err){
            response.end("There is some error")
            console.log(err)
        }
        else{
            response.setHeader("Content-type","text/html")
            response.end("<h1>File has been deleted</h1>")
        }
       })
    }
    else{
        response.setHeader("Content-type","text/html")
        response.end("<h1>invalid endpoints</h1>")
    }
})


server.listen(4500,()=>{
    console.log("The server is running on port 4500")
})