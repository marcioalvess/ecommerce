const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userName:{
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model('User',Schema);