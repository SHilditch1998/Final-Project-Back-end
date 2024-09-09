const {sequelize,Sequelize}=require("sequelize");
const SQLconnection=new Sequelize(process.env.MYSQL_URI);

try {
    SQLconnection.authenticate();
    console.log("successfully connectedto the database");
} catch (error) {
    console.log(error);
};
module.exports=SQLconnection;
