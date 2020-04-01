const mongoose = require('mongoose');

const Documents = mongoose.model('Documents');


module.exports = {
    async insert(req, res) {
        const cat = await Documents.create(req.body);
        return res.json(cat);
    },
    async searchDocuments(req, res) {
        const { matter = B } = req.query;
        const cat = await Documents.find({ id: matter });
        return res.json(cat);
    },
    async selectAll(req, res) {
        const cat = await Documents.find();
        return res.json(cat);
    }
};