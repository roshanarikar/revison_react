const { Router } = require("express");

const teacher = Router()

teacher.post("/create",(req,res)=>{
    res.send("teacher Create")
})

teacher.get("/read",(req,res)=>{
    res.send("teacher Get")
})

teacher.put("/update",(req,res)=>{
    res.send("teacher update")
})

teacher.delete("/delete",(req,res)=>{
    res.send("teacher Delete")
})

module.exports = teacher