const express = require('express');
const async = require('hbs/lib/async');
const router = new express.Router();

//Create home page
router.get('', async (req,res) => {
    res.status(201).render('index', {
        phone: '0984 26 3990'
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

module.exports = router