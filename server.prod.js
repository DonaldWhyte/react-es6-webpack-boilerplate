const express = require('express');

const static_content_dir = __dirname + '/public';
console.log('Static directory: ' + static_content_dir)

const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(static_content_dir));
// views is directory for all template files
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
