const todoDao = require('./todo_dao');

exports.createTodo = async (todo) => {
  return todoDao.createTodo(todo);
}

exports.getAllTodos = async () => {
  return todoDao.getAllTodos();
}

exports.getTodoDetails = async (todoId) => {  //
  let todo = await todoDao.getById(todoId); //
  if (todo === null) {
    let error = new Error('Todo is not exist');
    error.status = 404;
    throw error;
  }

  return todo;
}