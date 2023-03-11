const express=require("express");
const Router=express.Router();
Router.get('/',(req,res,next)=>{
    console.log("inside a middelware");
    next();// allows the request to move to next middleware
})
Router.get('/',(req,res,next)=>{
    console.log("inside second middelware");
    res.send(` <h1> ki haal chaal hain ji <!h1>`)
})



module.exports=Router;