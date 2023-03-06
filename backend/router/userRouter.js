const router = require('express').Router()
const middleware = require('../middleware/auth')
const userControler = require('../controller/user')
router.post('/api/createUser', userControler.CreateUser)
router.post('/api/login',userControler.VerifyUser)
router.get('/api/session', middleware.VerifySession)
router.get('/api/logout',userControler.Logout)
router.get('/api/getUser',userControler.GetUser)
router.patch('/api/updateUser',userControler.UpdateUser)
router.delete('/api/deleteUser',userControler.DeleteUser)

module.exports = {userRouter:router}