let express = require('express');
let app = express();
let path = __dirname + '/views/index.html'
let style_path = __dirname + '/public'

// app.get("/",function(req, res) {
//     res.send('Hello Express');
//   })

app.get("/json", function(req, res) {
  res.json({"message": "Hello json"})
  })

// app.use("/public", express.static(style_path))


































 module.exports = app;
