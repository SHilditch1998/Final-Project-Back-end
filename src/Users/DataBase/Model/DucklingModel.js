const mongoose= require ("mongoose");

const userSchema = new mongoose.Schema({

    name:{type:String, require:false, unique:false},
    username:{type:String, require:true, index:{unique:true}},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true, unique:false}  
});
const Account = mongoose.model('Account',userSchema);
module.exports=Account;
