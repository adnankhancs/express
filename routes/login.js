const express = require('express'); 
 const router = express.Router(); 
  
  
 router.get('/login', (req, res, next) => { 
   res.send(`
 <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">

 <input id="username" type="text" name"title">

 <button type="submit">add</button>

</form>`); 
 }); 
  
 router.post("/product", (req, res, next) => { 
    console.log("here iam");
      console.log("req.body"); 

   console.log(req.body); 
   res.redirect('/chats/'); 
 }); 
module.exports = router;


