const Habit = require("../DataBase-Tracker/model/model");

async function AddHabit(res,req) {
    try {
        const create=await Habit.create({
           habitId,
           title,
           color,
           repeatMode,
           completed,
           createdAt 
        });
        const savedHabit=await newHabit.save();
        res.status(200).json(savedHabit);
    } catch (error) {
        res.status(402).json({error:"network error"})
    }
}