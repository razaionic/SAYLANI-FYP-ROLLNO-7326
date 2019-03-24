const express = require('express');
const router = express.Router();
const Menu = require('../../models/Menu');
const json2xls = require('json2xls');
const fs = require('fs');
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: 'APP_ID',
  key: 'API_KEY',
  secret: 'SECRET_KEY',
  cluster: 'CLUSTER',
  encrypted: true
});


router.use(json2xls.middleware);

router.get('/', (req,res) => {
    Menu.find()             //retruns promise
    .sort({_id: 1})
    .then(items => res.json(items))
});



router.get('/report', (req,res) => {
    var mapped =  Menu.find()             //retruns promise
    .then(items => {
        res.xls('report.xlsx',items,{
            fields:[ 'name',
             'created_till_now',
            'predicted']
        });
    });  
});

router.post('/', (req,res) => {
    const newItem = new Menu(req.body);
    newItem.save()
    .then(()=>pusher.trigger('my-channel', 'mainPage', {newItem}))
    .then(item => res.json(item));
});

router.put('/', (req,res) => {
    const newItem = {
        created_till_now: req.body.created_till_now+req.body.quantity
        }
    Menu.findOne({name:req.body.name})
    .then(menu => menu.updateOne({created_till_now:menu.created_till_now+req.body.quantity})
    .then( () => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))

});

router.put('/predict', (req,res) => {
    const newItem = {
        predicted: req.body.predicted
        }
    Menu.findOne({name:req.body.name})
    .then(menu => menu.updateOne(newItem)
    .then(()=>  pusher.trigger('my-channel', 'reload',{}))
    .then( () => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
});




module.exports = router;