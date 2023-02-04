const { Router } = require("express");

const student = Router()

student.post("/create",(req,res)=>{
    res.send("Student Create")
})

student.get("/read",(req,res)=>{
    res.send("Student Get")
})

student.put("/update",(req,res)=>{
    res.send("Student update")
})

student.delete("/delete",(req,res)=>{
    res.send("Student Delete")
})

module.exports = student