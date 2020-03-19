var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var expressLayouts = require("express-ejs-layouts")
var app = express();

// // EJS
// app.use(expressLayouts)
// app.set('view engine', 'ejs')

var grantRouter = require("./controller/GrantsController");
var btoRouter = require("./controller/BtoController");
var loginRouter = require("./controller/LoginController");
var mapRouter = require("./controller/MapsController");


app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// app.set("port", process.env.PORT || 5000);


app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/bto", btoRouter);
app.use("/api/grants", grantRouter);
app.use("/api/login", loginRouter);
app.use("/api/map", mapRouter);

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

module.exports = app;
