const mongoose = require('mongoose');

const Matter = mongoose.model('Matter');


module.exports = {
    async insert(req, res) {
        const cat = await Matter.create(req.body);
        return res.json(cat);
    },
    async selectAll(req, res) {
        const cat = await Matter.find();
        return res.json(cat);
    }
};