let express = require('express');
let app = express();
let path = __dirname + '/views/index.html'

// app.get("/",function(req, res) {
//     res.send('Hello Express');
//   })

app.get("/",function(req, res) {
    res.sendFile(path)
  })


































 module.exports = app;
