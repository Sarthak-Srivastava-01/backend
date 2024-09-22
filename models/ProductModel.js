// To import all of mongoose
// const mongoose = require('../connnection');

// To import specific
const {Schema, model} = require('../connnection');

// To define structure
const mySchema = new Schema({
    product_name : {type : String, required : true},
    product_brand : {type : String, required : true},
    product_price : {type : String, required : true},
    createdAt : {type : Date, default : Date.now}
})

module.exports = model('product', mySchema);