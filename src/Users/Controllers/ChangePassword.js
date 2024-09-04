const Account = require("../DataBase/Model/DucklingModel");
const bcrypt = require("bcrypt");

async function ChangePassword(req,res) {
    try {
        salt_Rounds=parseInt(process.env.SALT_ROUNDS)
        console.log(salt_Rounds);
        console.log(req.body.newPassword);
        
        const hashedNewPassword=await bcrypt.hash(req.body.newPassword,salt_Rounds);
    
        console.log(hashedNewPassword);

        const result=await Account.updateOne({email:req.body.email},{password:hashedNewPassword})
        console.log(result);

        res.status(200).json({message:"Your password updated successfully",results:result})
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"Your password couldn't be updated",errorMessage:error});
        console.log("change password error");
        
    }
    
};
module.exports=ChangePassword;