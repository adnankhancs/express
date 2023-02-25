const http=require('http');
const express=require("express");
const bodyparser=require("body-parser");

const app=express()

app.use(bodyparser.urlencoded())

app.use('/add-product',(req,res,next)=>{
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
app.use('/product',(req,res,next)=>{
    console.log("inside /product");
    console.log(req.body);

    res.redirect('/')
})


app.use('/',(req,res,next)=>{
    console.log("inside a middelware");
    next();// allows the request to move to next middleware
})
app.use((req,res,next)=>{
    console.log("inside second middelware");
    res.send(` <h1> ki haal chaal hain ji <!h1>`)
})
const server=http.createServer(app);
            


server.listen(3000);