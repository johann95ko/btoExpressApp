var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

var indexRouter = require("./controller/index");
var btoDescRouter = require("./controller/btoDescription");
var grantRouter = require("./controller/GrantsController");
var housingRouter = require("./controller/BtoController");
var loginRouter = require("./controller/LoginController");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// app.set("port", process.env.PORT || 5000);
const port = process.env.port || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", indexRouter);
app.use("/api/btoDescription", btoDescRouter);
app.use("/api/housing", housingRouter);
app.use("/api/grants", grantRouter);
app.use("/api/login", loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.listen(app.get('port'));

app.listen(port, () => console.log(`Server started on port: ${port}`));

// Connecting to MongoDB via Mongoose
mongoose
  .connect(
    "mongodb+srv://larrylee3107:90points!@cluster0-bpf6b.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    },
    function(err, db) {}
  )
  .then(() => console.log("MongoDB Connected Successfully!")) //Display message when database is connected
  .catch(err => console.log(err));

module.exports = app;
