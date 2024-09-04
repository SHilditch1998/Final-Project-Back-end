const Habit = require("../DataBase-Tracker/model/model");

async function AllHabits(req,res) {
    try {
        const AllHabits=await Habit.findAll({});
        res.status(200).json({AllHabits})
    } catch (error) {
        console.log(error);
        res.status(414).json({error:`Couldn't list Habits ${res.status}`});
    }
};
module.exports=AllHabits;