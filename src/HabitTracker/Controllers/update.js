const { logger } = require("sequelize/lib/utils/logger");
const Habit = require("../DataBase-Tracker/model/model");

async function updateHabit(req,res) {
    try {
        
        const update= await Habit.update({title:req.body.editiedHabit},
            {where:{
                HabitId:req.body.HabitId,
            }})
        console.log(update);
        
        res.status(200).json({message:"Habit updated"})
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"unable to update habit"})
        console.log("update failed");
        
        
    }
    
}
module.exports=updateHabit;