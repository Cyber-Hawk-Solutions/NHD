"use strict";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var pug = require('pug');
var port = process.env.PORT || 3000;
var passport = require('passport');
let LocalStrategy = require("passport-local");
let passportLocalMongoose = require("passport-local-mongoose");
let User = require('./models/user')
var flash = require('connect-flash');
var session = require('express-session');

//Config
var database = require('./config/database.js')

mongoose.connect(database.url);

//Routes
var emailRouter = require('./routes/emails');
var invoiceRouter = require('./routes/invoices');
var estimateRouter = require('./routes/estimates');

var app = express();

// view engine setup
app.set('view engine', 'pug');
app.set('views', './views');
app.set('view options', { debug: true })


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
//*********************************************
app.use(require("express-session")({
  secret: 'nhdsecret', //session secret
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//************************************************



//routes
require('./routes/route.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.get('/', function(req, res) {
  res.render('index.pug', {user: req.user});
});

app.get('/plan', function(req, res) {
  res.render('plan', {user: req.user});
});

app.get('/gallery', function(req, res) {

  let gallery = {
    'dredgeBay': ['dredge-bay/1.jpg', 'dredge-bay/2.jpg', 'dredge-bay/3.jpg', 'dredge-bay/4.jpg', 'dredge-bay/5.jpg'],
    'denfields': ['denfields/1.jpg', 'denfields/2.jpg', 'denfields/3.jpg', 'denfields/4.jpg', 'denfields/5.jpg'],
    'paynters': ['paynters/1.jpg', 'paynters/2.jpg', 'paynters/3.jpg', 'paynters/4.jpg' ,'paynters/5.jpg', 'paynters/6.jpg', 'paynters/7.jpg'],
    'friarshill': ['friars-hill/1.jpg', 'friars-hill/2.jpg', 'friars-hill/3.jpg', 'friars-hill/4.jpg', 'friars-hill/5.jpg', 'friars-hill/6.jpg'],
    'royalgardens': ['royal-gardens/1.jpg', 'royal-gardens/2.jpg', 'royal-gardens/3.jpg', 'royal-gardens/4.jpg', 'royal-gardens/5.jpg'],
  }
  res.render('gallery', {user: req.user, gallery: gallery});
});

app.get('/contact', function(req, res) {
  res.render('contact', {user: req.user});
});

app.get('/learn', function(req, res) {
  res.render('learn', {user: req.user});
});


app.use('/api/email', emailRouter);
app.use('/api/invoice', invoiceRouter);
app.use('/api/estimate', estimateRouter);


app.get('/services', function(req, res) {
  res.render('services', {user: req.user});
});

app.get('/app-estimate', function(req, res) {
  res.render('cost-estimator', {user: req.user});
});

//The 404 Route (ALWAYS Keep this as the last route)
app.use(function (req, res, next) {
  res.status(404);
  res.render('index.pug');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
