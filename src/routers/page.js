const express = require('express');
const async = require('hbs/lib/async');
const router = new express.Router();

const Info = require('../models/my_info');
const Resume = require('../models/resume');


//Create home page
router.get('', async (req,res, next) => {
    Info.find((err, docs) => {
        if (!err) {
            res.status(201).render('index', {
               phone: docs[0].phone,
               email: docs[0].email
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
})

//Create resume page
router.get('/resume', async (req,res) => {
    Resume.find((err, docs) => {
        if (!err) {
            res.status(201).render('resume', {
                job_timeline: docs[0].job_timeline,
                job_position: docs[0].job_position,
                job_details: docs[0].job_details,

                edu_timeline: docs[0].edu_timeline,
                edu_major: docs[0].edu_major,
                edu_details: docs[0].edu_details,

                skill_status: docs[0].skill_status,
                skill_title: docs[0].skill_title,
                skill_details: docs[0].skill_details,
                
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
})

//Create certificate page
router.get('/certificate', async (req,res) => {
    res.status(201).render('certificate');
})

//Create certificate page
router.get('/ability', async (req,res) => {
    res.status(201).render('ability');
})

//Create login page
router.get('/login', async (req,res) => {
    res.status(201).render('ability');
})

//Create sign up page
router.get('/signup', async (req,res) => {
    res.status(201).render('ability');
})

module.exports = router