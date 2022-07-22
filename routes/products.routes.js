// post.routes.js

const express = require('express');
const router = express.Router();
const db = require('./../db');

router.get('/products', (req, res) => {
  req.db
    .collection('products')
    .find()
    .toArray((err, data) => {
      if (err) res.status(500).json({ message: err });
      else if (!data) res.status(404).json({ message: 'Not found' });
      else res.json(data);
    });
});

router.get('/products/random', (req, res) => {
  req.db.collection('products').aggregate(
    { $simple: { size: 1 } }.toArray((err, data) => {
      if (err) res.status(500).json({ message: err });
      else if (!data) res.status(404).json({ message: 'Not found' });
      else res.json(data);
    })
  );
});

router.get('/products/:id', (req, res) => {
  req.db
    .collection('products')
    .findeOne({ _id: ObjectId(res.params.id) }, (err) => {
      if (err) res.status(500).json({ message: err });
      else res.json({ message: 'Ok' });
    });
});

router.post('/products', (req, res) => {
  const { name, client } = req.body;
  req.db
    .collection('products')
    .insertOne(
      { _id: ObjectId(res.params.id) },
      { name: name, client: client },
      (err) => {
        if (err) res.status(500).json({ message: err });
      }
    );
});

router.put('/products/:id', (req, res) => {
  const { name, client } = req.body;
  req.db
    .collection('products')
    .updataOne(
      { _id: ObjectId(res.params, id) },
      { name: name, client: client },
      (err) => {
        if (err) res.status(500).json({ message: err });
        else res.json({ message: 'Ok' });
      }
    );
});

router.delete('/products/:id', (req, res) => {
  req.db
    .collection('products')
    .deleteOne({ _id: ObjectId(res.params.id) }, (err) => {
      if (err) res.status(500).json({ message: err });
      else res.json({ message: 'Ok' });
    });
});

module.exports = router;