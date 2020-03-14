class User {
  constructor(email, verified, password) {
    this.email = email;
    this.verified = verified;
    this.password = password;
  }
  getEmail() {
    return this.email;
  }
  setEmail(newEmail) {
    this.email = newEmail;
    // set database email
  }
  getPassword() {
    return this.password;
  }
  setPassword(newPassword) {
    this.password = newPassword;
    // set database password
  }
  getVerified(){
    // check if password is in database
    return true
  }
}
