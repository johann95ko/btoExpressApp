let userData = require("../DB/UserDb");

class UserDao {
  constructor(modelData) {
    this.modelData = modelData;
  }
  readUser(req, res) {
    this.modelData
      .find()
      .then(eachUser => res.send(eachUser))
      .catch(err => res.status(400).json("Error: " + err));
  }
  createUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new userData({
      email,
      password
    });

    newUser
      .save()
      .then(() => res.json("User added"))
      .catch(err => res.status(400).json("Error: " + err));
  }

  updateUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    userData
      .findById(req.params.id)
      .then(user => {
        user.email = email;
        user.password = password;
        user
          .save()
          .then(() => res.json(user))
          .catch(err => res.status(400).json("Error: " + err));
      })
      .catch(err => res.status(400).json("Error: " + err));
  }

  deleteUser(req, res) {
    Contacts.findByIdAndDelete(req.params.id)
      .then(() => res.json("User deleted."))
      .catch(err => res.status(400).json("Error: " + err));
  }
}

module.exports = UserDao;
