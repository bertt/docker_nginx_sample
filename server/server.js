var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World root!' + JSON.stringify(req.headers))
})

app.get('/hoho', function (req, res) {
  res.send('Hello World hoho!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})