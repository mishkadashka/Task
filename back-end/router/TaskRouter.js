const express = require('express');
const {
    createTask,
    getTasks,
    isDoneTask,
    deleteTask,
    updateTask,
    checkedTask
} = require('../controller/TaskController');

const router = express.Router();

router 
 .get('/list', getTasks)
//  .get('/count', isDoneTask)
 .post('/add', createTask)
 .delete('/delete', deleteTask)
 .patch('/update', updateTask)
//  .patch('/checked', checkedTask)

 module.exports = router;