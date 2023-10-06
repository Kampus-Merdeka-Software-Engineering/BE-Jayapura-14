const Nama = require('../model/nama');
const Form = require('../model/form');

async function nama(req, res){
    try {
        const nama = await Nama.findOne();
        res.json(nama);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Post Form Form Data
async function form(req, res){
    try {
        const form = await Form.create(req.body);
        res.json({ success: true, form });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    nama,
    form
}