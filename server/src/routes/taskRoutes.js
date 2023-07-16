const express = require("express");
const router = express.Router();
// Requring Middleware validations for query and body params 
const {
  validations,
  validateResult,
} = require("../validators/taskValidations");

// Requering CRUD APIs for users
const {
  createTask,
  findTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskControllers");

//Creating, Geting, updating and deleting tasks
router.post("/", validations, validateResult, createTask);
router.get("/", validations, validateResult, findTasks);
router.patch("/updateTask", validations, validateResult, updateTasks);
router.delete("/", validations, validateResult, deleteTasks);

module.exports = router;
