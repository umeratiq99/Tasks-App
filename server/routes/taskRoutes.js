const express=require('express');
const router=express.Router();

const {createTask, findTasks, updateTasks, deleteTasks}=require('../controllers/taskControllers');

//allTasks, aTasks, updateTasks, deleteTasks
router.post('/', createTask);
// router.get('/', allTasks);
 router.get('/', findTasks);
 router.put('/:id', updateTasks);
 router.delete('/:id', deleteTasks);

module.exports=router;