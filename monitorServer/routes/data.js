const express = require('express');
const mongoose =require('mongoose');
const Data = require('../models/data.model');
const router = express.Router();

router.post("/send", async (req, res) => {
    let newData = new Data({data: req.body});

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

router.get("/getAll", async (req, res) => {
    try{
        Data.find({}).sort({createdAt: -1}).exec((err, docs) => {
            if(err)
                res.status(500).json("Sorted Error");
            else
                res.json(docs);
        });
    } catch(err) {
        res.status(500).send("Error has occured");
    }

})

module.exports = router;