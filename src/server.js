var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var session = require("express-session");
var app = express();
const passport = require("passport");
var mongoose = require("mongoose");

// Passport config
require("./config/passport")(passport);

// // EJS
app.use(express.urlencoded({ extended: false }));

var grantRouter = require("./controller/GrantsManager");
var btoRouter = require("./controller/BtoManager");
var loginRouter = require("./controller/LoginManager");
var mapRouter = require("./controller/MapsManager");

app.use("/api/bto", btoRouter);
app.use("/api/grants", grantRouter);
app.use("/api/login", loginRouter);
app.use("/api/map", mapRouter);

// Set static folder
app.use("/", express.static(path.join(__dirname, "../client/build")));

// app.use(express.static("../client/build"));
// app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
);

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "./views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(logger("dev"));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

const connection =
  "mongodb+srv://larrylee3107:90points!@cluster0-bpf6b.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

// Connecting to MongoDB via Mongoose
// const db = require("./config/keys").mongoURI;

// mongoose.connect(db).catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
