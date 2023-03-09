var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  app.get("/cairn/logo", function(req, res) {
    var requestSettings = {
        url: 'https://cairn.edu/wp-content/uploads/2021/09/cairn_sealweb500.jpg',
        method: 'GET',
        encoding: null
    };

    request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
});
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
