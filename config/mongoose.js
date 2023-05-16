const mongoose=require("mongoose");

//connect to db

mongoose.connect("mongodb://127.0.0.1:27017/codial_db_list");

//acquire the connection (to check connection is succesful)

const db=mongoose.Connection;