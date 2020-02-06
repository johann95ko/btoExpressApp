var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
const port = process.env.port || 5000; //Means either deploy to an external host like Heroku or deploy on local host 5000
  app.listen(port,()=>console.log(`Server started on port: ${port}`)); 

app.use('/users', usersRouter);

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

// Connecting to MongoDB via Mongoose
mongoose.connect('mongodb+srv://BTOAdmin:BTOAdmin@cluster0-bwpyl.mongodb.net/test?retryWrites=true&w=majority', { 
        useNewUrlParser: true
    }, function(err, db) {

    }
)
    .then(()=> console.log('MongoDB Connected Successfully!')) //Display message when database is connected
    .catch(err=>console.log(err));

module.exports = app;
