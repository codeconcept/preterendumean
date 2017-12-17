const mongoose = require('mongoose');
require('../models/Item');
const Item = mongoose.model('Item');

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    }catch(err) {
        console.error(err);
    }
};

exports.addItem = async (req, res) => {
    try{
        const item = await (new Item(req.body)).save();
        console.log('item ', item);
        res.json(item);
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
}