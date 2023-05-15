const mongoose =require("mongoose");
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        unquie: true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    }

},{
    timestamps:true
});

const User = new mongoose.model('User',userSchema);
module.exports = User;
