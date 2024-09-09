const Habit = require("../DataBase-Tracker/model/model");

async function DeleteHabit(req,res) {
    try {
        const DeleteHabit=await Habit.destroy(
            {where:
                { HabitId:req.body.HabitId,
                    title:req.body.title,
            }})
            console.log(DeleteHabit)
        return res.status(200).json({message:"Habit Deleted"})
    } catch (error) {
        res.status(405).json({error:"Unable to delete Habit"});
    }
    
};
module.exports=DeleteHabit;