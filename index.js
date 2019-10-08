const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

//bring all routes
const auth = require('./routes/api/auth');
const questions = require('./routes/api/questions');
const profile = require('./routes/api/profile');

const app = express();

//Moddleware for express/bodyparser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//mongoDB configuration
const db = require('./setup/myurl').mongoURL;

// Attempt to connect to database
mongoose
  .connect(db)
  .then(() => console.log('Connected to Database...'))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());
//Config for JWT strategy
require('./strategies/jsonwtStrategy')(passport);

//Just for testing
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Actual routes
app.use('/api/auth', auth);
app.use('/api/questions', questions);
app.use('/api/profile', profile);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Running...');
});
