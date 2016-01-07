var express = require('express');
//var bodyParser = require('body-parser');
//var Pusher = require('pusher');

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '165033',
  key: 'a21c1d876b090ae230df',
  secret: '78ac97b8825d1adc0f48',
  encrypted: true
});
pusher.port = 443;

var app = express();

/*app.use(express.bodyParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));*/

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

//var pusher = new Pusher({ appId: APP_ID, key: APP_KEY, secret:  APP_SECRET });

/*app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/*Pusher.app_id = '165033';
Pusher.key = 'a21c1d876b090ae230df';
Pusher.secret = '78ac97b8825d1adc0f48';*/



//pusher.trigger( 'chat_channel', 'message', { msg: "Welcome!" } );