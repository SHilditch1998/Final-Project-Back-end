require("dotenv").config();
require("./Users/DataBase/Connection");


const express=require("express");
const cors=require("cors");
// User connecion to the server
const Account = require("./Users/DataBase/Model/DucklingModel"); 
const userRouters = require("./Users/Routes/AllRoutes");


const app=express();
app.use(express.json());
app.use(cors());
const port=process.env.PORT||5003;
app.get ("/health",(req,res)=>res.status(200).send("API is healty"))
app.use(userRouters);
Account.syncIndexes({alter:true});
app.listen(port,()=>console.log(`Server is listening on port ${port}`))
