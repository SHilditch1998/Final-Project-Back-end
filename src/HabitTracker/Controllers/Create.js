const Habit = require("../DataBase-Tracker/model/model");
const jwt=require("jsonwebtoken");
const Account=require("../../Users/DataBase/Model/DucklingModel")

async function AddHabit(req,res) {
    try {
         const token=req.header("Authorization").replace("Bearer ","");
         const privatekey=process.env.JWT_KEY;
         const decodedToken=await jwt.verify(token,privatekey);
         console.log("decoded token");
         const userEmail=decodedToken.email;
         const checkAccountExsites= await Account.findOne({where:{email:userEmail}})
         
        const create=await Habit.create({
           title:req.body.title,
           color:req.body.color,
           completed:req.body.completed,
           Account_ID:checkAccountExsites.Account_ID
        });
        console.log(create);
        
        res.status(200).json(create);
    } catch (error) {
        res.status(402).json({error:"network error"})
    }
}

module.exports=AddHabit;