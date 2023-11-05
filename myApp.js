let express = require('express');
let app = express();
let path = __dirname + '/views/index.html'
let style_path = __dirname + '/public'

// app.get("/",function(req, res) {
//     res.send('Hello Express');
//   })

app.get("/public", function(req, res) {
    res.sendFile(path)
  })
app.use("/public", express.static(style_path))


































 module.exports = app;
