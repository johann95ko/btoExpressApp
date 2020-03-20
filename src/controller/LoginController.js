var express = require("express");
var router = express.Router();
let userData = require("../database/UserDb");
const UserDAO = require("../models/UserDao");
const userDao = new UserDAO(userData);


/* See Users in Database */
router.route("/").get((req, res) => {
  userDao.readUser(req, res);
});

/* Register Handle. */
router.route("/register").post((req, res) => {
  userDao.createUser(req, res);
});

/* Sign in Handler. */
router.route("/verify").post((req, res, next) => {
  userDao.verifyuser(req, res, next);
});

/* Log out Handler. */
router.route("/logout").get((req, res) => {
  userDao.logout(req, res);
});

/* Delete User. */
router.route("/delete/:id").delete((req, res) => {
  userDao.deleteUser(req, res);
});

module.exports = router;
