const todoServices = require('./todo_service')

exports.createTodo = async (req, res) => {
  try {
    console.log('Create Todo controller');
    let dto = {
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id
    }
    const todo = await todoServices.createTodo(dto);
    res.status(201).send(todo);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send({
      message: e.message
    });
  }
}

exports.getAllTodos = async (req, res) => {
  try {
    const results = await todoServices.getAllTodos();
    res.status(200).send(results);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send({
      message: e.message
    });
  }
}

exports.getTodoDetails = async (req, res) => {
  try {
    let id = req.params.todo_id;
    const result = await todoServices.getTodoDetails(id);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send({
      message: e.message
    });
  }
}