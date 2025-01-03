var mdb = require('mongoose')
var userSchema = mdb.Schema({
    Name : String,
    Email : String,
    Feedback : String,
})

var user_schema = mdb.model("users",userSchema)
module.exports = user_schema