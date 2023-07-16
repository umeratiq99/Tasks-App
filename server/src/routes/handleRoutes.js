const express = require("express");
const userRoutes = require("./userRoutes");  // requering user routes
const taskRoutes = require("./taskRoutes");  // requering tasks routes
const { validateToken } = require("../authorization/services");  // requering JWtoken validation middleware

const app = express();

// User Routes
app.use("/user", userRoutes);
// Applying JWT validation before moving to task routes
app.use('/',validateToken);
// Tasks Routes
app.use("/tasks",taskRoutes);

module.exports=app;