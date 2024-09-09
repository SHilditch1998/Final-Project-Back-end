const SQLconnection=require("../Connection");
const {DataTypes}=require("sequelize");


const Account=SQLconnection.define("Account",{
    Account_ID:{type:DataTypes.BIGINT,autoIncrement:true,primaryKey:true,unique:true,allowNull:true},
    username:{type:DataTypes.STRING,unique:true,allowNull:false},
    name:{type:DataTypes.STRING,unique:false,allowNull:false},
    email:{type:DataTypes.STRING,unique:false,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false,unique:false}
});

module.exports=Account;