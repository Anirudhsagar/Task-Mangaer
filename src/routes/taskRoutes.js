const express = require('express');
const routerT = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');



routerT.get('/get', getTasks);
routerT.post('/task', createTask);
routerT.put('/:id', updateTask);
routerT.delete('/:id', deleteTask);

module.exports = {routerT};