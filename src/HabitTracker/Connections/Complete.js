const Habit = require("../DataBase-Tracker/model/model");

async function CompleteHabit(req,res) {
    const updatedCompletion= req.body.completed;
    try {
        const updateHabit=await Habit.findByIdAndUpdate
        ({habitID:req.body.habitID,
            completed:updatedCompletion,
            new:true
        });
        if(!updateHabit){
            res.status(404).json({error:"Habit not found"})
        }else{
            res.status(200).json(updatedHabit)
        }
    } catch (error) {
        res.status(500).json({error:"complete js error"})   
    }
};
module.exports=CompleteHabit;