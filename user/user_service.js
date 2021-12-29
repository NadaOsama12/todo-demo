const userDao = require('./user_dao')


exports.createUser = async (user) => {
 return userDao.createUser(user)
}

exports.getAllUser = async () => {
 return userDao.getAllUser()
}

exports.getUserDetails = async (userId) =>{
 let user = await userDao.getUserDetails(userId)
 if (user === null){
  console.log("user is not exist!")
  throw error;
 }

 return user
}