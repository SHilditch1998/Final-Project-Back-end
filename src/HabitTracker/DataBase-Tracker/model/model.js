const SQLconnnection=require("../../../Users/DataBase/Connection");
const {DataTypes}=require("sequelize");

const Habit =SQLconnnection.define("Habit",{

    HabitId:
    {
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true,
        alllowNull:false
    },

    title:
    {
        type:DataTypes.STRING,
        required:true,
        alllowNull:false,
        unique:false
    },


    color:
    {
        type: DataTypes.STRING,
        alllowNull:false,
        required:true,
        unique:false
    },


    completed:
    {
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },

    Account_ID:
    {
        type:DataTypes.BIGINT
    }

});

module.exports=Habit
