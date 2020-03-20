var express = require("express");
var router = express.Router();
let userData = require("../database/UserDb");
const UserDAO = require("../models/UserDao");
const userDao = new UserDAO(userData);
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const passport = require("passport");

/* get Users. */
router.route("/").get((req, res) => {
  userDao.readUser(req, res);
});

/* Login Page */
router.route("/signin").get((req, res) => {});

/* Register Page */
router.route("/register").get((req, res) => {});

/* Register Handle. */
router.route("/register").post((req, res) => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(4)
      .max(20)
      .required(),
    email: Joi.string()
      .email()
      .min(4)
      .max(20)
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required(),
    password2: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .options({
        language: {
          any: {
            allowOnly: "!!Passwords do not match"
          }
        }
      })
  });

  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      res.send(err.details[0].message);
    } else {
      const { name, email, password, password2 } = req.body;

      userData.findOne({ email: email }).then(user => {
        if (user) {
          res.send("user exists");
        } else {
          const newUser = new userData({
            name,
            email,
            password
          });

          //Hash password
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              // Set password to hash
              newUser.password = hash;
              newUser
                .save()
                .then(() => res.json("user registration successful"))
                .catch(err => res.status(400).json("Error: " + err));
            })
          );
        }
      });
    }
  });
});

/* Sign in Handler. */
router.route("/signin").post((req, res, next) => {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.send("username or password does not exist");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      res.send("login success");
    });
  })(req, res, next);
});

/* Log out Handler. */
router.route("/logout").get((req, res) => {
  req.logout();
  res.send("logged out");
});

/* update user. */
router.route("/update/:id").put((req, res) => {
  userDao.updateUser(req, res);
});

/* verify user. */
router.route("/verify").post((req, res) => {
  userDao.setBto(req, res);
});

/* set Login Token. */
router.route("/logintoken").post((req, res) => {
  userDao.setBto(req, res);
});

router.route("/delete/:id").delete((req, res) => {
  userDao.deleteUser(req, res);
});

module.exports = router;
