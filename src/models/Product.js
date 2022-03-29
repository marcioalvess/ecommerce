const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    productName:{
        type: 'string',
        required: true
    }, 
    productDescription:{
        type: 'string',
        required: true
    },
    productPrice:{
        type: 'string',
        required: true
    },
    productQuantity:{
        type: Number,
        required: true
    },
    productImage:{
        type: 'string',
    },
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Product',Schema);