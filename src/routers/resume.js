const express = require('express');
const async = require('hbs/lib/async');
const router = new express.Router();

const Resume = require('../models/resume');
//Create add info router
router.post('/add_resume', async (req,res) => {
    const resume = new Resume(req.body)
    try{
        await resume.save()
        res.status(201).send({resume})
        console.log('Resume was created succesful!')
    }catch(e){
        res.status(400).send(e.message)
        console.log(e.message)
    }
})


module.exports = router