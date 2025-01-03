mdb = require('mongoose')
var signup_schema = mdb.Schema(
    {
        Name:String,
        Email:String,
        Password:String
    }
)
var signupModel = mdb.model("signup",signup_schema)
module.exports = signupModel