const {Router}= require("express");


const AddAccount = require("../Controllers/RegisterUser");
const ChangePassword = require("../Controllers/ChangePassword");
const ListAccounts = require("../Controllers/ListAccounts");
const DeleteAccount = require("../Controllers/DeleteUser");
const Login = require("../Controllers/Login");
const checkToken = require("../Middleware/checkToken");
const hashPassword = require("../Middleware/hashedPassword");
const checkPassword=require("../Middleware/checkPassword");


const userRouters=Router();

userRouters.post("/Account/Register",hashPassword,AddAccount);
userRouters.get("/Friends/List",checkToken,ListAccounts);
userRouters.put("/Account/UpdatePassword",checkToken,ChangePassword);
userRouters.delete("/Account/DeleteDuckling",checkToken,DeleteAccount);
userRouters.post("/Account/Login",checkPassword,Login);

module.exports=userRouters;