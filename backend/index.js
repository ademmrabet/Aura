const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require("./router/userRouter");
app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200,
    })
)
app.use(cookieParser());

app.use(express.json()); 
//adem don't forget to setup the routers below! :)
app.use('/',userRouter)
app.listen(port,()=>console.log(`serv running on port ${port}`));