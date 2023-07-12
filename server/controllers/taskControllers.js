const Tasks = require("../models/tasks");

//create a task for specific user
const createTask = async (req, res) => {
  try {
    const data = { ...req.body, userid: req.userId };

    const newtask = await Tasks.create(data);
    res.json(newtask);
  } catch (err) {
    console.error(err.message);
  }
};

// // getting all tasks for certain user
const findTasks = async (req, res) => {
  try {
    let options={};
    let where = {};
    where.userid = req.userId;
    if (req.query.status) {
      where.status = req.query.status;
    }
    options.where=where;
    if(req.query.order && req.query.orderby)
    {
      options.order=[req.query.orderby , req.query.order];
    }
  const tasks = await Tasks.findAll(options);
    res.json(tasks);
  } catch (err) {
    res.status(404).send(err);
    console.log(err.message);
  }
};

// //updating values in existent task
const updateTasks = async (req, res) => {
  try {
    const userid = req.userId;
    const { id } = req.params;
    const obj = req.body;
    console.log(typeof req.body.status);
    const utask = await Tasks.update(obj, {
      where: {
        id,
        userid,
      },
    });
    res.json(utask);
  } catch (err) {
    console.error(err.message);
  }
};
//deleting a task
const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const userid = req.userId;
    const dtask = await Tasks.destroy({
      where: {
        id,
        userid,
      },
    });
    res.json(dtask);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { createTask, findTasks, updateTasks, deleteTasks };
//, allTodo, aTodo, updateTodo, deleteTodo };
