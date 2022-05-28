let express = require('express');
const res = require('express/lib/response');
let app = express();
var bGround = require('fcc-express-bground')
require('dotenv').config();

app.use((req,res)=>{
    console.log(req.method, req.path + " - " + req.ip)
    next()
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (req,res) => {
    var odpowiedz = {"messege": "Hello json"}; 
    if (process.env.MESSAGE_STYLE==="uppercase"){
        odpowiedz.messege = odpowiedz.messege.toUpperCase()
    }
    return res.json(odpowiedz);
  })



































 module.exports = app;
