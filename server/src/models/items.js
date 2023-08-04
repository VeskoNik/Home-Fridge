const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    date: {
        type: Date,
        required: true
        
    },
    type: {
        type: String,
        minLength: 3,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//
    },
    calories: {
        type: Number,
        min: 1,
        required: true
    },

    description: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true
    },

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    // donations: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }]
})


const Items = mongoose.model('Animals', itemsSchema);
module.exports = Items;