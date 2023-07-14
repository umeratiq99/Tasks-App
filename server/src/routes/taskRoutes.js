const express = require("express");
const router = express.Router();
const {
  validations,
  validateResult,
} = require("../validators/taskValidations");

const {
  createTask,
  findTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskControllers");

//allTasks, aTasks, updateTasks, deleteTasks
router.post("/", validations, validateResult, createTask);
router.get("/", validations, validateResult, findTasks);
router.patch("/updateTask", validations, validateResult, updateTasks);
router.delete("/", validations, validateResult, deleteTasks);

module.exports = router;
