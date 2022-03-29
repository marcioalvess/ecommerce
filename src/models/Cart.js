const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    address:{
        street:{
            type:String,
            required:true
        },
        number:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
    },
    payment:{
        card:{
            type:String,
        },
        cvc:{
            type:String,
        }
    }
});

module.exports = mongoose.model('Cart',Schema);