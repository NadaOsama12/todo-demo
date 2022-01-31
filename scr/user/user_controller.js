const userServices = require('./user_service')
// const user = require('../models/user')

exports.createUser = async (req, res) => {
 try {
  let us ={
   name: req.body.name
  }
  const user = await userServices.createUser(us)
  res.status(201).send(user)
 } catch(e) {
  console.log(e)
  res.status(e.status || 500).send({
   message: e.message
  })
 }
}

exports.getAllUser = async (req, res) => {
 try {
  const user = await userServices.getAllUser()
  res.status(201).send(user)
 } catch(e) {
  cosnole.log(e)
  res.status(e.status || 500).send({
   message: e.massage
  })
 }
}

exports.getUserDetails = async (req, res) => {
 try {
  let id = req.params.user_id
  const user = await userServices.getUserDetails(id)
  res.status(201).send(user)
 } catch(e) {
  console.log(e)
  res.status(e.status || 500).send({
   message: e.message
  })
 }
}