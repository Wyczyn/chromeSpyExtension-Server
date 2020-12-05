const express = require('express');
const mongoose = require('mongoose');
const DataError = require('../models/dataError.model');

const router = express.Router();

router.post("/sendErrors", async (req, res) => {
    let newData = new Data({error: req.body});

    try{
        await newData.save((err, data) => {
            if(err)
                res.status(500).json("Error with saving data")
            else
                res.status(200).json(data);
        });
    } catch(err) {
        res.status(500).send(err);
    }
    
})

router.get("/getAllErrors", async (req, res) => {
    try{
        const data = await DataError.find();
        res.json(data);
    } catch(err) {
        res.status(500).send("Error has occured");
    }

});


module.exports = router;