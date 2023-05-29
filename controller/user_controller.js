const User=require("../models/user");
module.exports.profile =function(req,res){
    if(req.cookies.User_id&&req.cookies.User_id!=null){
        User.findById(req.cookies.User_id).then((userData)=>{
            return res.render("user_profile",{
                title:"user profile",
                userdata:userData
             })
        }).catch((error)=>{
                console.log("error while searching for user in database for displaying profile of a user ");
                return; 
             });
    }else{
        return res.redirect('/user/signin');
    }
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

module.exports.Create_Session=function(req,res){
   User.find({'email':req.body.email}).then((user)=>{
    if(user.length>0){
        if(user[0].password==req.body.password){
            console.log(user[0]._id);
            res.cookie("User_id",user[0]._id);
           return res.redirect("/user/profile");
        }
        else{
            return res.redirect('back');
        }
    }
    else{
         return res.redirect('/user/signup');
    }
   }).catch((err)=>{
    console.log("error while signing in ");
    return ;
   })
}

module.exports.Signout =function(req,res){
    console.log(req.cookies);
    return res.redirect('/user/signin');
}