const express = require("express");
const app = express();
const studentRouter = require("./routes/student.route")
const teacherRouter = require("./routes/teacher.route")

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/student",studentRouter)

app.use("/teacher",teacherRouter)

app.listen(3000,()=>{
    console.log("Server is running port 3000")
})