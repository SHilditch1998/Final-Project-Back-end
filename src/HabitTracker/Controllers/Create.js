const Habit = require("../DataBase-Tracker/model/model");

async function AddHabit(req,res) {
    try {
        const create=await Habit.create({
           title:req.body.title,
           color:req.body.color,
           completed:req.body.completed,
        });
        console.log(create);
        
        res.status(200).json(create);
    } catch (error) {
        res.status(402).json({error:"network error"})
    }
}
module.exports=AddHabit;