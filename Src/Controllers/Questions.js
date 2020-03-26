const mongoose = require('mongoose');

const Questions = mongoose.model('Questions');


module.exports = {
    async insert(req, res) {
        const cat = await Questions.create(req.body);
        return res.json(cat);
    },
    async selectIdUser(req, res) {
        const cat = await Questions.find({ Id_User: req.params.id });
        return res.json(cat);
    },
    async selectTipo(req, res) {
        const cat = await Questions.find({ Tipo: req.params.id });
        return res.json(cat);
    },
    async selectAll(req, res) {
        const cat = await Questions.find();
        return res.json(cat);
    }
};