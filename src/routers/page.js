const express = require('express');
const async = require('hbs/lib/async');
const parallel = require('run-parallel')
const router = new express.Router();

const Info = require('../models/my_info');
const Resume = require('../models/resume');


//Create home page
router.get('', async (req,res, next) => {
    Info.find((err, docs) => {
        if (!err) {
            res.status(201).render('index', {
               phone: docs[0].phone,
               email: docs[0].email,
               bio: docs[0].bio
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
})

//Create resume page
router.get('/resume', async (req,res) => {
    parallel([
        function (callback) {
            Info.find((err, infoDocs) => {
                if (!err) {
                    callback(null, infoDocs)
                } else {
                    console.log('Failed to retrieve the Course List: ' + err);
                }
            });
        },
        function (callback) {
            Resume.find((err, resumeDocs) => {
                if (!err) {
                    callback(null, resumeDocs)
                } else {
                    console.log('Failed to retrieve the Course List: ' + err);
                }
            });
        }
      ],
      // optional callback
      function (err, results) {
        console.log(results[1][0].job_timeline)
        res.status(201).render('resume', {
            //pass job data to view
            job_timeline: results[1][0].job_timeline,
            job_position: results[1][0].job_position,
            job_details: results[1][0].job_details,

            //pass education data to view
            edu_timeline: results[1][0].edu_timeline,
            edu_major: results[1][0].edu_major,
            edu_details: results[1][0].edu_details,

            //pass education data to view
            skill_status: results[1][0].skill_status,
            skill_title: results[1][0].skill_title,
            skill_details: results[1][0].skill_details,

            //pass info data to view
            phone: results[0][0].phone,
            email: results[0][0].email
        });
    })
   
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
    res.status(201).render('login');
})

//Create sign up page
router.get('/signup', async (req,res) => {
    res.status(201).render('ability');
})

module.exports = router