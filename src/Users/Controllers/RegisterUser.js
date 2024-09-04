const Account = require("../DataBase/Model/DucklingModel");

async function AddAccount(req,res) {
    try {
        const account=await Account.create
        ({
            name:req.body.name,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }); 
        
        console.log(account);

        res.status(200).json({message:`${req.body.username} you're account has been created 🐣`});
    } catch (error) {
        console.log(error);

        res.status(404).json({message:`${req.body.name}account failed to be created ${res.status}`});

        console.log("registering account error");
    }
    
}
module.exports=AddAccount;
