const express  = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('POST WORKS');
    next();
})
router.post('/rest/unAuth',(req,res,next)=>{
 console.log(req.body);
 res.status(200);
 res.send("request received");
 next();
})

module.exports =router;