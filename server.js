var express = require('express');

var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '165033',
  key: 'a21c1d876b090ae230df',
  secret: '78ac97b8825d1adc0f48',
  encrypted: true
});
pusher.port = 443;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

/*app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//pusher.trigger( 'chat_channel', 'message', { msg: "Welcome!" } );

app.post('/api/', function(request, response) {
	var input = request.body;

	pusher.trigger( 'chat_channel', 'message', { msg: input.message } );
	console.log(input);

  response.send("done");
});