const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Title: {
        required: true,
        type: String
    },
    Answers: {
        required: false,
        type: Array
    },
    Correct: {
        required: true,
        type: Number
    },
    Matter: {
        required: true,
        type: Number
    },

});

mongoose.model('Questions', UsersSchema)