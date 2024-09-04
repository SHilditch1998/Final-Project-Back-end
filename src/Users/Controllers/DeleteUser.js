const Account = require("../DataBase/Model/DucklingModel");

async function DeleteAccount(req,res) {
    try {
        const result=await Account.findOneAndDelete(
            {
                email:req.body.email,
                password:req.body.password
            })
            console.log(result);
            res.status(200).send(`${req.body.email} you're account has been deleted 🐤`);
    } catch (error) {
        console.log(error);
        res.status(409).json({message:`you're account couldn't be deleted ${res.status}`})

        console.log("Delete Account error");
    }
};
module.exports=DeleteAccount;
