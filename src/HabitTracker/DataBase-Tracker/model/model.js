const SQLconnnection=require("../../../Users/DataBase/Connection");
const {DataTypes}=require("sequelize");
const Account = require("../../../Users/DataBase/Model/DucklingModel");

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
        unique:true
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
 
Habit.belongsTo(Account,
     { as: "accounts", foreignKey: "Account_ID"}
);
Account.hasMany(Habit, 
    { as: "habits", foreignKey: "Account_ID"}
);
 
module.exports=Habit
