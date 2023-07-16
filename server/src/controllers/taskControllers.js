// Requring task services
const { create, retrieve, update, deletes } = require("../services/taskServices");

//create a task for specific user
const createTask = async (req, res) => {
  try {
    const data = { ...req.body, userid: req.query.user };

    const newtask = await create(data);
    if (newtask.success) {
      res.status(200).json(newtask.response);
    } else {
      res.status(400).json(newtask.message);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// // getting all tasks for certain user
const findTasks = async (req, res) => {
  try {
    let options = {};
    let where = {};
    where.userid = req.query.user;
    if (req.query.status) {
      where.status = req.query.status;
    }
    options.where = where;
    if (req.query.order && req.query.orderby) {
      options.order = [[req.query.orderby, req.query.order]];
    }
    const tasks = await retrieve(options);
    if (tasks.success) {
      res.status(200).json(tasks.response);
    } else {
      res.status(400).json(tasks.message);
    }
  } catch (err) {
    res.status(404).json(err.message);
  }
};

// //updating values in existent task
const updateTasks = async (req, res) => {

  try {
    let where = {};
    where.userid = req.query.user;
    const id = req.query.id;
    where.id = id;
    const obj = req.body;
    const utask = await update(obj,where);
    if (utask.success) {
      res.status(200).json(utask.response);
    } else {
      res.status(400).json(utask.message);
    }
  } catch (err) {
    res.status(404).json(err.message);
  }
};
//deleting a task
const deleteTasks = async (req, res) => {
  try {
    const where={}
    const { id, user } = req.query;
    where.id=id;
    where.userid = user;
    console.log(where);
    const dtask = await deletes( {where});
    if (dtask.success) {
      res.status(200).json(dtask.response);
    } else {
      res.status(400).json(dtask.message);
    }
  } catch (err) {
    res.status(404).json(err.message);
  }
};

module.exports = { createTask, findTasks, updateTasks, deleteTasks };
