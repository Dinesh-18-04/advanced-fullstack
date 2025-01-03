var mdb = require("mongoose");
var loginSchema = mdb.Schema({
  Email: String,
  Password: String,
});
var loginModule = mdb.model("login", loginSchema);
module.exports = loginModule;
