const express = require('express');

const app=express();

app.use("/", (req,res)=>{
    res.send("Hello World");
})

app.listen(4000,(req,res)=>{
    console.log("server running")
})