// Create web server with Node.js
// Run with: node comments.js
// Then visit: http://localhost:3000/

const express = require('express');
const app = express();

// Set up EJS
app.set('view engine', 'ejs');

// Set up static files
app.use(express.static('public'));

// Set up routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/comments', function(req, res) {
  res.render('comments');
});

// Set up server
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});