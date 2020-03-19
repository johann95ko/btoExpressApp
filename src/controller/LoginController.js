var express = require("express");
var router = express.Router();
let userData = require("../database/UserDb");
const UserDAO = require("../models/UserDao");
const userDao = new UserDAO(userData);

/* get Users. */
router.route("/").get((req, res) => {
  userDao.readUser(req, res);
});

/* Login Page */
router.route("/login").get((req, res) => {});

/* Register Page */
router.route("/register").get((req, res) => {});

/* Register Handle. */
router.route("/register").post((req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = []
  // 
});

/* sign up. */
router.route("/signup").post((req, res) => {
  userDao.createUser(req, res);
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
