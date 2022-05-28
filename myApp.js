let express = require('express');
let app = express();
var bGround = require('fcc-express-bground')
require('dotenv').config();



// app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req,res) {
    var odpowiedz = {"messege": "Hello json"}; 
    if (process.env.MESSAGE_STYLE==="uppercase"){
        odpowiedz.messege = odpowiedz.messege.toUpperCase()
    }
    res.json(odpowiedz);
  })



































 module.exports = app;
