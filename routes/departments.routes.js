const express = require('express');
const router = express.Router();
const Control = require('../controllers/departments.controller');

router.get('/departments', Control.getAll);

router.get('/departments/random', Control.getRandom);

router.get('/departments/:id', Contorl.getById);

router.post('/departments', Control.postOne);

router.put('/departments/:id', Contorl.editOne);

router.delete('/departments/:id', Control.deleteOne);

module.exports = router;
