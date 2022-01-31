const model = require('../../models');
const TodoModel = model.todos;//

exports.createTodo = async (todo) => {
  let dto = {
    title: todo.title,
    content: todo.content,
    user_id: todo.user_id
  };

  let result = await TodoModel.create(dto);
  return Promise.resolve(result.toJSON());//
};

exports.getById = async (id) => {
  let result = await TodoModel.findOne({
    where: {
      todo_id: id
    },
  });

  return Promise.resolve(result === null ? null : result.toJSON());//
};

exports.getAllTodos = async () => {
  let order = [["created_at", "DESC"]];//
  let options = {
    order: order,
    raw: false
  };
  let result = await TodoModel.findAll(options);
  result = result.map(row => row.toJSON());
  return Promise.resolve(result);
};

