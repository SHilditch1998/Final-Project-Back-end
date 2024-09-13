const Habit = require("../DataBase-Tracker/model/model");

async function DeleteAll(req,res) {
    try {
        const AllHabits=await Habit.find({where:{Account_Id:req.body.Account_Id}})
        const DeleteAll= await Habit.distroy(AllHabits)
        if(!AllHabits){
            res.status(406).json({message:"unable to remove all habits"})
        }else{
            res.status(200).json({message:"successfully deleted all habits"})
        }
    } catch (error) {

        console.log(error);
        res.status(410).json({errormessage:error})
        
    }
    
}