const {Register, Login}=require("../services/userServices")
// const Users = require("../models/users");
// const bcrypt = require("bcrypt");
const { createTokens } = require("../authorization/services");

//Register
const register = async (req, res) => {
  try {
    const reg=await Register(req.body);
    if(reg){
        res.status(200).json({ message: "Registeration successful" });
    }else{
        res.status(400).json({ message: "Something went wrong!" });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// Login
const login = async (req, res) => {
    try{
        const log= await Login(req.body);
        if(log.success){
            const accessToken = createTokens(log.response);
            log["token"] = accessToken;
            res.cookie("access-token", accessToken, {
              maxAge: 60 * 60 * 24 * 1000,
              //httpOnly: true,
            });
            res.status(200);
        }else{
            res.status(400);
        }
        res.send({message: log.message , token: log.token });
    }catch(err){
        res.status(400).json({ error: err });
    }
};

// Logout
const logout = async (req, res) => {
  res.clearCookie("access-token");
  res.status(200).json({ message: "Logout successful" });
};

module.exports = { register, login, logout };
