// require the express after installing
const express= require("express");
const Cookie_Parser=require("cookie-parser");

const Port =8000;
const db=require("./config/mongoose.js");
const router=require("./routes/index");
const app=express();

app.use(express.urlencoded());
app.use(Cookie_Parser());


app.set('view engine','ejs');
app.set('views','./views');
app.use('/',router);

app.listen(Port,function(err){
    if(err){
        console.log(`Error during running the server ${err}`);
        return ;
    }
    // observe the console.log statement it is interpolation
    console.log(`server is listening and running successfully at port : ${Port}`);
})