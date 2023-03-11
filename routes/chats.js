const express = require('express'); 
const expdataress = require('express'); 

 const router = express.Router(); 
 const fs = require('fs') 
  
 router.get('/chats', (req, res, next)=> { 

    fs.readFile('message.txt', function(err, data) {


        if(err) throw err;
           a = data.toString();        
           // Printing the response array
           console.log(a);
           res.send(`<form action="/pro"
           onsubmit="document.getElementById('username').value=localStorage.getItem('username')"  method="POST">
          <h1>${a}</h1>
           <input id="message" type="text" name="message" placeholder="lol" >
           <input id="username"  type="hidden" name="username">
           <button type="submit">Send this message</button>
          
          </form>`); 
           
        //    return res.end();  
        
     });
    
     
//          res.send(`<form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')"  method="POST"> 
//          <input id="message" name="message" type="text" placeholder="message"> 
//          <input id="username" name="username" > 
//          <button type="submit">Send</button> 
//          </form><br>` 
//          ); 
// console.log("lolol")    
}); 
  
 // /admin/add-product => POST 
 router.post("/pro",(req, res)=>{ 
    console.log("here we are")
     console.log(req.body); 
     fs.writeFile('message.txt',` ${req.body.username} : ${req.body.message}`,{flag: 'a'} ,(err) => { 
        err ? console.log(err) : res.redirect('/chats/'); 
     }) 
// res.redirect('/chats/'); 
}); 
module.exports = router;