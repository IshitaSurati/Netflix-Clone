const express=require("express");
const { Signup, Login, Logout } = require("../controllers/auth.controller");

const Auth_router=express.Router();

Auth_router.post("/signup",Signup )
Auth_router.post("/login",Login )
Auth_router.post("/logout",Logout )

module.exports=Auth_router;