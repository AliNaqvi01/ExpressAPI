const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    phone: String,
    email: String,
})

const Data = mongoose.model('data', DataSchema)

module.exports = Data;