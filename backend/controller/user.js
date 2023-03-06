const {connection} = require('../configurationDB/config');
const crypto = require('crypto');
const auth = require('../middleware/auth');
const utile = require('../middleware/utile');
const session = require('../controller/session')

module.exports={
    CreateUser : ((req,res)=>{
        let lastAtPos = req.body.email.lastIndexOf('@');
        let lastDotPos = req.body.email.lastIndexOf('.');
        let passwordHashed =crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
        let query = `select * from user where email="${req.body.email}"`
        connection.query(query, (error, results)=>{
            if(error){
                res.status(500).send(error)
            }else if((results.length>0 && results[0].email===req.body.email)){
                res.status(200).send("user exists")
            }else if(!results.length && results===undefined){
                res.status(202).send("Something went wrong my guy!")
            }else if((!(lastAtPos < lastDotPos && lastAtPos > 0 && req.body.email.indexOf('@@') === -1 && lastDotPos > 2 && (req.body.email.length - lastDotPos) > 2 ))){
                res.status(400).send('ya MR yehdik rabi format email ghalta')
            }else{
                let query = `INSERT INTO user(userName, email,phoneNumber, password, confirm_password,photo,role) VALUES("${req.body.userName}","${req.body.email}","${req.body.phoneNumber}","${passwordHashed}","${passwordHashed}","${req.body.photo}","${req.body.role}")`
                connection.query(query,(error,results)=>{
                    if(error){
                        res.status(500).send(error)
                    }else{
                        res.status(200).send("user created")
                    }
                })
            }
        })
    }),

    VerifyUser :(req,res)=>{
        var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
        const query=`select * from user where email="${req.body.email}"`
        connection.query(query,(error,results)=>{
          if(error){
            res.status(500).send(error)
          } else if(results.length>0 && results[0].password===passwordHashed ){
           var session=utile.RandomString(32)
            auth.CreateSession(req,res,results[0].id,session)
          }else if(results.length===0 || results[0].password!==passwordHashed  ){
                 res.status(200).send('somthing went wrong')
          }else{
            res.status(404).send("not found")
          }
        })
      },
      Logout:(req,res)=>{
        console.log(req.cookies)
        session.Delete(req.cookies.test).then((result)=>{
          if(result){
            res.status(200).send('user logout')
          }
        }).catch((err)=>{
          res.status(500).send(err)
        })
      },

      GetUser:(req,res)=>{
        const query=`select * from user where id="${req.params.id}"`
        connection.query(query,(error,result)=>{
          error ? res.status(500).send(error) : res.status(200).send(result)
        })
      },
    
       DeleteUser:(req,res)=>{
        const query=`delete from user where id="${req.params.id}"`
        connection.query(query,(error,result)=>{
          error ? res.status(500).send(error) : res.status(200).send(result)
        })
      },
       
       UpdateUser:(req,res)=>{
        const query = `UPDATE user SET userName="${req.body.userName}",userPhone="${req.body.phoneNumber}",userMail="${req.body.email}",userPassword="${passwordHashed}",confirmUserPassword="${passwordHashed}",role="${req.body.role}", photo=${req.body.photo} WHERE id="${req.params.id}"`;
        connection.query(query, (error, result) => {
          error ? res.status(500).send(error) : res.status(200).send('Update User OK');
        });
       }
}
