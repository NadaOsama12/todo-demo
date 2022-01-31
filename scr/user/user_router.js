const express = require('express')
const router = express.Router()
const userController = require('./user_controller')

router.route('/')
  .post(userController.createUser)
  .get(userController.getAllUser)

router.route('/:user_id')
  .get(userController.getUserDetails)


module.exports = router;
