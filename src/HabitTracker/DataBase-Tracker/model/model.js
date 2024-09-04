const mongoose=require("mongoose");

const HabitSchema=new mongoose.Schema({
    habitId:{type:mongoose.Schema.Types.ObjectId ,required:true},
    title:{type:string,required:true},
    color:{type:string,required:true},
    repeatMode:{type:String,enum:["Daily","weekly"],default:"daily"},
    completed:{type:Object,default:{} },
    createdAt:{type:Date,default:Date.now}
});
const Habit=mongoose.model("Habit",HabitSchema)

module.exports=Habit;
