var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var session = require('express-session');

var homeRouter = require('./routes/home');
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var personalAreaRouter = require('./routes/personalArea');
var postRouter = require('./routes/post');
var profileRouter = require('./routes/profile');
var registerRouter = require('./routes/register');
var updateProfileRouter = require('./routes/update-user');

var app = express();

require('./src/db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: '_secret_',
  resave: false,
  saveUninitialized: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

// Static pages
app.use('/contact', (req, res, next) => {
  res.render('contact', {
    page: 'contact'
  });
});

app.use('/aboutus', (req, res, next) => {
  res.render('aboutus', {
    page: 'aboutUs'
  });
});

app.use('/', indexRouter);
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/post', postRouter);
app.use('/profile', profileRouter);
app.use('/personalArea', personalAreaRouter);
app.use('/update/profile', updateProfileRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  //console.log(err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
