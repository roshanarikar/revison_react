const express = require("express");
const fs = require("fs");


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.end("hello world")
})

app.get("/students",(req,res)=>{
    const data= fs.readFileSync("./db.json","utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.students)
    res.json(parse_data.students)
})    

app.get("/teachers",(req,res)=>{
    const data= fs.readFileSync("./db.json","utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.teachers)
    res.json(parse_data.teachers)
})    

app.post("/addStudent",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    const parse_data = JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(parse_data))
    console.log(data.students)
    res.json(data.students)
})

app.post("/addTeacher",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    const parse_data = JSON.parse(data)
    parse_data.teachers.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(parse_data))
    console.log(data.teachers)
    res.json(data.teachers)
})

app.listen(4500,()=>{
    console.log("Server is running on 4500")
})