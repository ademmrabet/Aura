const nodemailer = require('nodemailer');
require('dotenv').config();
const transpoter = nodemailer.createTransport({
    service:"gmail",
    port:587,
    host:'smtp.gmail.com',
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    },
    tls:{
        rejectUnauthorized:false,
    }
})

transpoter.verify(function(error,success){
    error? console.log(error) : console.log('server is ready to take recieve messages')
})

const nodemail = async (req,res,next)=>{
    var FullName = req.body.FullName
    var Email = req.body.Email
    var Subject = req.body.Subject
    var Message = req.body.Message
    let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
        </head>
        <body>
            <div>
                <center>
                    <h1>${FullName}</h1>
                    <h2>${Subject}</h2>                
                    <h1>${Email}</h1>
                    <h1>${Message}</h1>
                </center>
            </div>
        </body>
    </html>
    `
    var mail = {
        from : req.body.Email,
        to: "adem.mrabet99@gmail.com",
        Subject : Subject,
        text : Message,
        html:html
    }
    transpoter.sendMail(mail,(err, data)=>{
        err? res.json({
            status: 'fail'
        }) 
        : res.json({
            status:'success'
        })
    })
}
module.exports={nodemail}