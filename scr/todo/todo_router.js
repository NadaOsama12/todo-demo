const express = require('express');
const router = express.Router();
const todoController = require('./todo_controller');

router.route('/')
  .post(todoController.createTodo)
  .get(todoController.getAllTodos);

router.route('/:todo_id')
  .get(todoController.getTodoDetails);

module.exports = router;
