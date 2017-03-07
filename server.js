var http = require("http"),
	url = require("url"),
	app = http.createServer(onRequest).listen(8181);
function onRequest (request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("hellow world again again.");
	response.end();
}
var WebSocketServer = require("ws").Server,
	server = new WebSocketServer({server:app});
server.on('connection', function(socket) {
  socket.on('message', function(message) {
    console.log(message + ' Received');
    if(message === 'CodingDefined') {
      socket.send('CodingDefined Blog!!');
    }
  });

  socket.on('close', function(msg, disconnect) {
    console.log(msg + ' ' + disconnect);
  });
});	