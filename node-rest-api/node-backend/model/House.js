const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HouseSchema = new Schema({
    _id:{type: String},
    year: { type: String },
    censustakername: { type: String },
    numberofpeople: { type: String },
    state: { type: String },
    city: { type: String },
    street: { type: String },
    zip: { type: String }
}, {
    collection: 'houses'
});

module.exports = mongoose.model('Homes', HouseSchema);
