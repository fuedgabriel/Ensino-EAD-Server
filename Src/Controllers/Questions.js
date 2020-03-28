const mongoose = require('mongoose');

const Questions = mongoose.model('Questions');


module.exports = {
    async insert(req, res) {
        const cat = await Questions.create(req.body);
        return res.json(cat);
    },
    async searchQuestions(req, res) {
        const { matter = B } = req.query;
        const cat = await Questions.find({ Matter: matter });
        return res.json(cat);
    },
    async selectAll(req, res) {
        const cat = await Questions.find();
        return res.json(cat);
    }
};