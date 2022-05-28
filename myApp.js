let express = require('express');
let app = express();
require('dotenv').config();

app.get("/json", (req,res)=>{
    if (process.env.MESSAGE_STYLE=="uppercase"){
        return res.json({"message": "HELLO JSON"})
    }
        res.json({"messege": "Hello json"})
  })



































 module.exports = app;
