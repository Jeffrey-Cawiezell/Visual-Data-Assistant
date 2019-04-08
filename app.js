const express = require('express');
const path = require('path');
// Init App
const app = express();


// Load View Engine
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


// **** Routes ****

// Home Route
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Courses'
	});

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
