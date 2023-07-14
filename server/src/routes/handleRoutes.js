const express = require("express");
const userRoutes = require("./userRoutes");
const taskRoutes = require("./taskRoutes");
const { validateToken } = require("../authorization/services");

const app = express();

app.use("/user", userRoutes);
app.use('/',validateToken);
app.use("/tasks",taskRoutes);

module.exports=app;