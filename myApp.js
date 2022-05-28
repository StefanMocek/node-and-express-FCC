let express = require('express');
const res = require('express/lib/response');
let app = express();
require('dotenv').config();

app.use((req,res, next)=>{
    console.log(req.method + " " + req.path + " - " + req.ip);
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
