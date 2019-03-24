const express = require('express');
const router = express.Router();

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: 'APP_ID',
  key: 'API_KEY',
  secret: 'SECRET_KEY',
  cluster: 'CLUSTER',
  encrypted: true
});



//Item Model 
const Item = require('../../models/Item');

router.get('/', (req,res) => {
    Item.find({done:false})             //retruns promise
    .sort({_id: 1})
    .then(items => res.json(items))
});

router.post('/', (req,res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => {
        pusher.trigger('my-channel', 'my-event', {item});
        res.json(item);
    });
    
});

router.put('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then(item => item.updateOne({done:true})
    .then(()=>pusher.trigger('my-channel', 'reload', {item}))
    .then( () => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});

module.exports = router;