const express = require('express');
const async = require('hbs/lib/async');
const router = new express.Router();

const info = require('../models/my_info');
//Create home page
router.get('', async (req,res) => {

    res.status(201).render('index', {
        phone: '0984 26 3990'
    });
})

//Create certificate page
router.get('/resume', async (req,res) => {
    res.status(201).render('resume');
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