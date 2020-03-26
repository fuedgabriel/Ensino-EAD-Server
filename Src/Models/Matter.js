const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Title: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    }

});

mongoose.model('Matter', UsersSchema)