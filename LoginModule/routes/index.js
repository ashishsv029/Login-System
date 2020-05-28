const express=require('express');
const router=express.Router();
const {ensureAuthenticated}=require('../config/auth') ;
router.get('/',(req,res)=>res.render('welcome'));
//ensure authenticated is a middleware for protection during sessoins
router.get('/dashboard',ensureAuthenticated,(req,res)=>{

    res.render('dashboard',{name:req.user.name});
})
module.exports=router;