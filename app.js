require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({limit: '10mb'}));

app.get('/', function (req, res) {
  res.send({
    message: 'Welcome to Todo api'
  });
});

app.use('/todos', require('./todo/todo_router'));
app.use('/users', require('./user/user_router'))

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`server up on http://localhost: ${process.env.SERVER_PORT}`);
})