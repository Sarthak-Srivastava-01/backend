// To import all of mongoose
// const mongoose = require('../connnection');

// To import specific
const {Schema, model} = require('../connnection');

// To define structure
const mySchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, unique : true},
    password : String,
    createdAt : {type : Date, default : Date.now}
})

module.exports = model('users', mySchema);