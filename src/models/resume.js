const mongoose = require('mongoose');
const validator = require('validator');

const resumeSchema = new mongoose.Schema({
    job_timeline:{
        type: Array,
        default: [],
        required: true
    },
    job_position:{
        type: Array,
        default: [],
        required: true
    },
    job_details:{
        type: Array,
        default: [],
        required: true
    },
    edu_timeline:{
        type: Array,
        default: [],
        required: true
    },
    edu_major:{
        type: Array,
        default: [],
        required: true
    },
    edu_details:{
        type: Array,
        default: [],
        required: true
    },
    skill_status:{
        type: Array,
        default: [],
        required: true
    },
    skill_title:{
        type: Array,
        default: [],
        required: true
    },
    skill_details:{
        type: Array,
        default: [],
        required: true
    }
},
{
    timestamps: true
})

const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume