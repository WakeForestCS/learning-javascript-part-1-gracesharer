//var express = require('express');
//create the express object and pass it to the http server
//var var app = express();
//var http = require('http').Server(app);
// var port = process.env.PORT || 3000;
// 
// http.listen(port, function(){
//   console.log()('Listening on localhost '+ port);
//
// });



var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

app.get('/grace', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));
});

//localhost number
app.listen(8080);

//writes to the console
console.log('beep beep');


// Car object
  var car = {
    color:'gold',
    make:'honda crv',
    year:'2015',
    price:'10,000',
    setPrice: function (price) {
      this.price = price;
    }
  }

console.log(car.price);
car.setPrice('20,000');
console.log(car.price);
