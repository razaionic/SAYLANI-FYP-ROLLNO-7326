const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
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
    done:{
        type:Boolean,
        default: false
    },
    date :{
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);