const express=require("express");

const router=express.Router();
const home_action=require("../controller/home_controller.js");
router.get("/",home_action.home);
console.log("In Router");

module.exports = router;
