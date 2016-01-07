var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var bodyParser = require('body-parser');

var Pusher = require('pusher');

Pusher.app_id = '165033';
Pusher.key = 'a21c1d876b090ae230df';
Pusher.secret = '78ac97b8825d1adc0f48';

var pusher = new Pusher({ appId: Pusher.app_id, key: Pusher.key, secret:  Pusher.secret });

app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

pusher.trigger( 'chat_channel', 'message', { msg: "Welcome!" } );