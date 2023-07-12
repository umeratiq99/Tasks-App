const express=require('express');
const router=express.Router();

const {createTask, findTasks, updateTasks, deleteTasks}=require('../controllers/taskControllers');

//allTasks, aTasks, updateTasks, deleteTasks
router.post('/', createTask);
 router.get('/', findTasks);
 router.put('/updateTask', updateTasks);
 router.delete('/', deleteTasks);

module.exports=router;