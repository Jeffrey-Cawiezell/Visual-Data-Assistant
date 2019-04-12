const express = require('express');
const path = require('path');
// Init App
const app = express();



//Declare static folder to be served. It contains the js, images, css, etc.
app.use(express.static('speech-test'));

// **** Routes ****

// Home Route
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/speech-test/SpeechApiTest.html'))
});

// Add Route
/*app.get('/courses/add', (req, res) => {*/
/*res.render('add_course', {*/
/*title:'Add course'*/
/*});*/
/*});*/

// Add Submit POST Route
/*app.post('/courses/add', (req, res) => {*/
/*console.log('Submitted');*/
/*return;*/
/*});*/

// Start the server
app.listen(3000, () => {
	console.log('Listening on port 3000!');
});
