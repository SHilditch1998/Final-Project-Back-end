const Habit = require("../DataBase-Tracker/model/model");

async function CompleteHabit(req,res) {
    const updatedCompletion= req.body.completed;
    try {
        const completeHabit=await Habit.findOne
        ({where:{
            title:req.body.title
        }});
        console.log(completeHabit);
        
        
        if(completeHabit===true){
            updatedCompletion
            res.status(200).json({message:"you completed a task"})
        }else{
            res.status(404).json({message:"you didn't complete this task"})
        }
    } catch (error) {
        res.status(500).json({error:"complete js error"})   
    }
};
module.exports=CompleteHabit;