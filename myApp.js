let express = require('express');
let app = express();
let path = __dirname + '/views/index.html'
let style_path = __dirname + '/public'

require('dotenv').config() 

// app.get("/",function(req, res) {
//     res.send('Hello Express');
//   })

app.get("/json", function(req, res) {
  return process.env.MESSAGE_STYLE === "uppercase" ? res.json({"message": "HELLO JSON"}) : res.json({"message": "Hello json"});
  })

// app.use("/public", express.static(style_path))


































 module.exports = app;
