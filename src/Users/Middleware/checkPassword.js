const bcrypt=require("bcrypt");
const Account=require("../DataBase/Model/DucklingModel");


const checkPassword=async (req,res,next) => {
    try {
        const textPassword=req.body.password;
    

        const userDetails=await Account.findOne({

            email:req.body.email
        });
            
            console.log(req.body.email);

        console.log(userDetails);

        const hashedPassword=userDetails.password;
        console.log(hashedPassword);
        const check=await bcrypt.compare(textPassword,hashedPassword)
        console.log(check);
        if(check === true){
            next()
        }else{
            res.status(400).send("Password Incorrect");
        }
    } catch (error) {
        console.log(error);
        res.status(505).json({message:"something went wrong",
            errorMessage:error
        })
    }
}
module.exports=checkPassword;