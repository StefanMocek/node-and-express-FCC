let express = require('express');
let app = express();
const process = require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (req,res)=>{
    if (process.env.MESSAGE_STYLE=="uppercase"){
        return res.json({"message": "HELLO JSON"})
    }
        res.json({"messege": "Hello json"})
  })



































 module.exports = app;
