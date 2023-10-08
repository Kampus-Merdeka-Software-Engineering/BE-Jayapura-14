const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

router.get('/step', controller.step);
router.post('/form', controller.form);

module.exports = router;