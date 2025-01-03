var mdb = require('mongoose')
var productSchema = mdb.Schema({
    productName : String,
    price : Number,
    descrption : String
})

var product_schema = mdb.model("product",productSchema)
module.exports = product_schema
