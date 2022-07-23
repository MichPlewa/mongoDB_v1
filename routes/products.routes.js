// post.routes.js

const express = require('express');
const { getRandom } = require('../controllers/employee.controller');
const Control = require('../controllers/product.controler');
const router = express.Router();

router.get('/products', Control.getAll);

router.get('/products/random', getRandom);

router.get('/products/:id', Control.getById);

router.post('/products', Control.postOne);

router.put('/products/:id', Control.editOne);

router.delete('/products/:id', Control.deleteOne);

module.exports = router;
