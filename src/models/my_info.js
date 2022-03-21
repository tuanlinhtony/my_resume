const mongoose = require('mongoose');
const validator = require('validator');

const infoSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    middle_name:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: true
    },
    born:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
    ,
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const Info = mongoose.model('Info', infoSchema)

module.exports = Info