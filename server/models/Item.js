const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const itemSchema = new mongoose.Schema({
    date_borrowed: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String
    },
    owner: {
        type: String,
        required: 'Le nom est obligatoire'
    },
    borrower: {
        type: String,
        required: 'Le nom de l\'emprunteur est obligatoire'
    },
    borrower_email: {
        type: String
    },
    borrower_phone_number: {
        type: String
    },
    date_given_back: {
        type: Date
    },
});

module.exports = mongoose.model('Item', itemSchema);