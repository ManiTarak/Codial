const express= require("express");
const user_Controller=require("../controller/user_controller.js");
const router= express.Router();

router.get("/profile",user_Controller.profile);
router.get("/signup",user_Controller.SignUp);
router.get("/signin",user_Controller.SignIn);
router.get("/signout",user_Controller.Signout);
router.post("/Create",user_Controller.Create);
router.post("/create-session",user_Controller.Create_Session);

module.exports=router;