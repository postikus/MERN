/**
 * Created by Ignat on 23.03.2017.
 */
var express = require('express');
var app = express();
app.use('/', express.static('dist'));
// app.get('/', function (req, res) {
  // res.send('./dist/index.html');


// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
