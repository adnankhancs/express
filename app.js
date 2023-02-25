const http=require('http');
const express=require("express");
const app=express()
app.use((req,res,next)=>{
    console.log("inside a middelware");
    next();// allows the request to move to next middleware
})
app.use((req,res,next)=>{
    console.log("inside second middelware");
    res.send({ "key1": "value" })
})
const server=http.createServer(app);
            


server.listen(3000);