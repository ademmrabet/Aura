const router=require("express").Router()
const mailcontroler=require('../controller/mailer')

router.post('/api/sendmail',mailcontroler.nodemail)

module.exports={mailer:router}