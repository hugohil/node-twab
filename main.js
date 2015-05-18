var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var global = require('./config');

server.listen(global.config.port);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/write', function (req, res){
  res.sendFile(__dirname + '/public/write.html');
})

app.get('/twabs', function (req, res) {
  res.sendFile(__dirname + '/' + global.config.file);
});

io.on('connection', function (socket){
  socket.on('written', function (params){
    if(params.pass === global.config.writePass){
      fs.appendFile(global.config.file, params.txt + '\n', function (err){
        if(err){
          console.log('Error while writing in', global.config.file);
        }
      });
      io.emit('new-txt', params.txt);
    } else {
      console.log('wrong password !');
    }
  });
})

console.log('server running on http://localhost:' + global.config.port);