const bcrypt=require("bcrypt");

const hashPassword=async (req,res,next) => {
    try {
        textPassword=req.body.password;
        salt_Rounds=parseInt(process.env.SALT_ROUNDS)
        const hashedPassword= await bcrypt.hash(textPassword,salt_Rounds);
        req.body.password=hashedPassword
        next();
    } catch (error) {
        console.log(error)
        res.status(460).json({message:"internal server error", error:error})   
    }
};
module.exports=hashPassword;