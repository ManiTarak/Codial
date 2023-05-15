const express= require("express");
const user_Controller=require("../controller/user_controller.js");
const router= express.Router();

router.get("/profile",user_Controller.profile);
router.get("/signup",user_Controller.SignUp);
router.get("/signin",user_Controller.SignIn);


module.exports=router;