const express = require("express");
const router = express.Router();


const adminController =require('../controllers/adminController');
const { render } = require("ejs");

router.get("/signup",(req,res)=>{


    res.render("signup")
})

router.get("/signin",(req,res)=>{


    res.render("index")

})
router.post("/login",adminController.loginAdminUser);
router.post('/CreateAdminUser', adminController.createAdminUser)


module.exports=router