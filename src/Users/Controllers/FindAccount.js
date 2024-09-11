const jwt= require("jsonwebtoken");
const Account = require("../DataBase/Model/DucklingModel");
const Habit = require("../../HabitTracker/DataBase-Tracker/model/model");
async function findAccount(req,res) {
  try {
    const token=req.header("Authorization").replace("Bearer ","");
    const privatekey=process.env.JWT_KEY;
    const decodedToken=await jwt.verify(token,privatekey);
    const userEmail=decodedToken.email;
    const checkAccountExsites= await Account.findOne({where:{email:userEmail}})
    const Usergraphs=await Habit.findAll({where:{Account_ID:checkAccountExsites.Account_ID}})
    console.log(checkAccountExsites.Account_ID);
    
    console.log(decodedToken);
    if (checkAccountExsites===false) {
      return res.status(404).json({ errormessage: "Account not found",error:error });
    }else{
      res.status(200).json({message:"found",email:checkAccountExsites,usergraphs:Usergraphs});
    }
  } catch (error) {
    console.error("Error finding account:", error);
    res.status(500).json({ errormessage: "Server error",error:error });
  }
}

module.exports = findAccount;



  // Update to refer to 'Account' if that's the model name
// Function to find account by JWT token (ID is extracted from token)
 // The account ID will be available in req.user (set by checkToken)
// Assuming req.user.id contains the account ID from the token