const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Title: {
        required: true,
        type: String
    },
    Description: {
        required: false,
        type: String
    },
    Type: {
        required: true,
        type: String
    },
    Link: {
        required: true,
        type: String
    },
    Image: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    }


});

mongoose.model('Documents', UsersSchema)