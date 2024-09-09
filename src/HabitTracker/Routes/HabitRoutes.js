const {Router}=require("express");


const AddHabit = require("../Controllers/Create");
const CompleteHabit = require("../Controllers/Complete");
const AllHabits = require("../Controllers/List");
const DeleteHabit = require("../Controllers/Delete");
const updateHabit = require("../Controllers/update");

const habitRouters=Router();

habitRouters.post("/Habit/Add",AddHabit);
habitRouters.get("/Habits/list",AllHabits);
habitRouters.put("/Habit/edit",updateHabit);
habitRouters.delete("/Habit/remove",DeleteHabit);
habitRouters.put("/Habit/completed",CompleteHabit);

module.exports=habitRouters;

