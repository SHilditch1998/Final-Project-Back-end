const jwt=require("jsonwebtoken")
const Account = require("../DataBase/Model/DucklingModel");
const { where } = require("sequelize");

async function checkToken(req,res,next) {
    try {
        const token=req.header("Authorization").replace("Bearer ","");
        const privateKey=process.env.JWT_KEY;
        const decodedToken= await jwt.verify(token,privateKey);
        const userEmail=decodedToken.email;
        const checkAccountExsites= await Account.findOne({where:{email:userEmail}})
        if(checkAccountExsites===false){
            throw new error(`you're Account doesn't exsit`)
        }else{
            req.body.email=userEmail
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"token check failed"})
        console.log("token error");
    }
};
module.exports=checkToken;