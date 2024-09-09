require("dotenv").config();
require("./Users/DataBase/Connection");


const express=require("express");
const cors=require("cors");


// User connections
const Account = require("./Users/DataBase/Model/DucklingModel"); 
const userRouters = require("./Users/Routes/AllRoutes");

// habit connections
const Habit = require("./HabitTracker/DataBase-Tracker/model/model");
const habitRouters = require("./HabitTracker/Routes/HabitRoutes");

const app=express();
app.use(express.json());
app.use(cors());
const port=process.env.PORT||5003;
app.get ("/health",(req,res)=>res.status(200).send("API is healty"))



app.use(userRouters,habitRouters);

Account.sync({alter:true});
Habit.sync({alter:true});

app.listen(port,()=>console.log(`Server is listening on port ${port}`))
