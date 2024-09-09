const Account = require("../DataBase/Model/DucklingModel");

const ListAccounts=async (req,res) => {
    try {
        const listOfAllAccounts= await Account.findAll({});

        res.status(200).json({message:"All Ducklings,🐤🐤🐤",
            ListAccounts:listOfAllAccounts})
    } catch (error) {
        console.log(error);
        res.status(500).json({errormessage:error})
        console.log(`unable to list ducklings`)
    }
};
module.exports=ListAccounts;
