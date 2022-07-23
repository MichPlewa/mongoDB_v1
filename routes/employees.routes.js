const express = require('express');
const router = express.Router();
const Control = require('../controllers/employee.controller');

router.get('/employees', Contorl.getAll);

router.get('/employees/random', Control.getRandom);

router.get('/employees/:id', Control.getById);

router.post('/employees', Control.postOne);

router.put('/employees/:id', Control.editOne);

router.delete('/employees/:id', Control.deleteOne);

module.exports = router;
