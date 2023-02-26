const http=require('http');
const express=require("express");
const shoproutes=require("./routes/shop");
const adminroutes=require("./routes/admin");


const bodyparser=require("body-parser");

const app=express()

app.use(bodyparser.urlencoded())

app.use('/admin',adminroutes);
app.use('/shop',shoproutes);
app.use((req,res,next)=>{
    res.status(404).send(`<h1>page not found......404<!h2>`)
})



const server=http.createServer(app);
            


server.listen(3000);