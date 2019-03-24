const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const MenuSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    created_till_now:{
        type:Number,
        required:true
    },
    predicted:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

module.exports = Item = mongoose.model('menu', MenuSchema);