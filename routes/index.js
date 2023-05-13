const express=require("express");

const router=express.Router();
const home_action=require("../controller/home_controller.js");
const users_routeObj=require("./users.js");

router.get("/",home_action.home);
router.use("/user",users_routeObj);
console.log("In Router");

module.exports = router;
