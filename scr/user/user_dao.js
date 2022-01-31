const model = require ('../../models')
const userModel = model.users


exports.createUser = async (user) =>{
 let dto = {
  name: user.name,
 }
 let result = await userModel.create(dto)
 return Promise.resolve(result.toJSON())
}

exports.getAllUser = async () => {
 let result = await userModel.findAll()
 return Promise.resolve(result.map(raw => raw.toJSON()))
}

exports.getUserDetails = async (id) => {
 let result = await userModel.findOne({
  where: { 
   user_id: id
  }}
 )
 return Promise.resolve(result.toJSON())
}