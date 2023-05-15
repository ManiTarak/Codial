module.exports.profile =function(req,res){
    return res.end("<h1>THIS IS User Profile Page</h1>");
};

module.exports.SignIn = function(req,res){
 res.render("user_sign_in",{
    title : "Codial | SignIn"
 });
};

module.exports.SignUp = function(req,res){
    res.cookie("edhookati","chalsale");
    res.render("user_sign_up",{
       title : "Codial | SignUp"
    });
   };