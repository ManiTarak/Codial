const passport=require('passport');
const LocalStartegy=require('passport-local').Strategy;
const User=require('../models/user');

//Authentication using passport.js
passport.use(new LocalStartegy({
    usernameField:'email'
},
function(email,password,done){
    //find a user and establish identity
     User.findOne({email:email}).then((user)=>{
        if(!user || user.password!=password){
            console.log("Invalid Username/Password");
            return done(null,false);
        }
        return done(null,user);
     }).catch((err)=>{
        if(err){
            console.log("Error while finding user ---> passport");
            return done(err);
        }
     });
}
));

//serializing the user to decide which key is to be kept in the cookies

passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserializing the user from the key in the cookies

passport.deserializeUser(function(id,user){
    User.findById(id).then((user)=>{
        return done(null,user);
    }).catch((err)=>{
        if(err){
            console.log("Error while finding the user --->passport");
            return done(err);
        }
    })
});

module.exports=passport;
