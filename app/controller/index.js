const Step = require('../model/step');
const Form = require('../model/form');

async function step(req, res){
    try {
        const step = await Step.findAll();
        res.json(step);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Post Form Data
async function form(req, res){
    try {
        const form = await Form.create(req.body);
        res.json({ success: true, form });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

// Post Score Data
async function score(req, res){
    try {
        const score = await Score.create(req.body);
        res.json({ success: true, score });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    step,
    form,
    score
}