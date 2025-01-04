mdb = require('mongoose')
var feedbachSchema = mdb.Schema(
    {
        Name:String,
        Email:String,
        Feedback:String
    }
)
var FeedbackModule = mdb.model("feedback",feedbachSchema)
module.exports = FeedbackModule