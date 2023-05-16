const User=require("../models/user");
module.exports.profile =function(req,res){
    return res.end("<h1>THIS IS User Profile Page</h1>");
};

module.exports.SignIn = function(req,res){
 res.render("user_sign_in",{
    title : "Codial | SignIn"
 });
};

module.exports.Create = function(req,res){
    //checking whether password and confirm password is same or different
    if(req.body.password!=req.body.Confirmpassword){
       return  res.redirect('back');
    }
    //checking whether email is registered already or not
    User.find({'email':req.body.email}).then((user)=>{
        //if email not registered then create user in data base
        if(user.length==0){
            User.create(req.body).then((result)=>{
                console.log("hello");
                return res.redirect("/user/signin");
              
            }).catch((err)=>{
                console.log("error while creating a user in database");
                return;
            });

       }//if user already existed return back to sign up page
       else{
        return res.redirect('back');
       }
    }).catch((err)=>{
        console.log("error while checking whether user existed in database ");
        return ;
    });
};

module.exports.SignUp = function(req,res){
    res.cookie("edhookati","chalsale");
    res.render("user_sign_up",{
       title : "Codial | SignUp"
    });
};