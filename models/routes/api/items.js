const express = require('express');
const router = express.Router();

//Item Model 
const Item = require('../../models/Item');

// @route GET api/items
// @desc get ALL items 
// @access Public
router.get('/', (req,res) => {
    Item.find()             //retruns promise
    .sort({date: -1})
    .then(items => res.json(items))
});

module.exports = router;