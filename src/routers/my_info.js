const express = require('express');
const async = require('hbs/lib/async');
const router = new express.Router();

const Info = require('../models/my_info');
//Create add info router
router.post('/add_info', async (req,res) => {
    const info = new Info(req.body)
    
    try{
        await info.save()
        res.status(201).send({info})
        console.log(info.last_name + ' ' + info.middle_name + ' ' + info.first_name + ' was created succesful!')
    }catch(e){
        res.status(400).send(e.message)
        console.log(e.message)
    }
})



module.exports = router