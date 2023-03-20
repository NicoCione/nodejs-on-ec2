var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<html><body><img src="https://cairn.edu/wp-content/uploads/2021/09/cairn_sealweb500.jpg" alt="CairnImage.jpeg" style="width:500px;height:500px;"></body></html>'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
