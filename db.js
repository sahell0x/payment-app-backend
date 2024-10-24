const mongoose = require("mongoose");

(async function(){
   try{
    await mongoose.connect("mongodb+srv://leeugaming34:9826405638@cluster0.ftlll.mongodb.net/payment");
   }
   catch{
        console.log("failed to connect with db")
   }
})();

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('disconnected', () => {
    console.error('MongoDB disconnected! Trying to reconnect...');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected');
});


const userSchema = mongoose.Schema({
    userName:String,
    passWord:String,
    firstName:String,
    lastName:String
});

const User = mongoose.model("User",userSchema);

module.exports= {User};