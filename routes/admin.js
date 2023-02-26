const express=require("express");
const Router=express.Router();



Router.use('/add-product',(req,res,next)=>{
    console.log("Add product wala");

    res.send(` <html>
    <body>
    
    
    
    <form action='/product' method='POST'>
     
      <input type="text" id="name" name="name" ><br>
      <input type="text" id="size" name="size" ><br>
      
      <input type="submit" value="Submit">
    </form> 
    </body>
    </html>`)
})
Router.use('/product',(req,res,next)=>{
    console.log("inside /product");
    console.log(req.body);

    res.redirect('/')
})
module.exports=Router;