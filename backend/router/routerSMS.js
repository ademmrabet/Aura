const router=require('express').Router();
const controllerSMS=require('../controller/Sms');
router.post('/api/sendsms', function(req, res){
    controllerSMS.messageCallBack
})

module.exports={routerSMS:router}