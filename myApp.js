let express = require('express');
let app = express();
require('dotenv').config();

if (process.env.MESSAGE_STYLE==uppercase){
    app.get('/json', function(req, res) {
      res.json({ "message": "HELLO JSON" })
    }); 
  }
  else {
    app.get('/json', function(req, res) {
      res.json({ "message": "Hello json" })
  }); 
  
  }



































 module.exports = app;
