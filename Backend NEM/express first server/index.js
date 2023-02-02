const express = require("express");
const fs = require("fs");


const app = express()


app.get("/",(req,res)=>{
    res.end("hello world")
})


app.listen(4500,()=>{
    console.log("Server is running on 4500")
})