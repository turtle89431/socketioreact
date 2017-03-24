var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
  client.emit('hello',{message:"hello"});
  client.on('event', function(data){
      client.emit('ok',"you said " + data);
  });
  client.on('disconnect', function(){});
});
server.listen(8000);