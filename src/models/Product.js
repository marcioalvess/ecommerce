const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    ProductName:{
        type: 'string',
        required: true
    },
    ProductDescription:{
        type: 'string',
        required: true
    },
    ProductPrice:{
        type: 'string',
        required: true
    },
    ProductQuantity:{
        type: Number,
        required: true
    },
    ProductImage:{
        type: 'string',
    },
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Product',Schema);