const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;

router.get('/employees', (req, res) => {
  req.db
    .collection('employees')
    .fine()
    .toArray((err, data) => {
      if (err) res.status(500).json({ message: err });
      else if (!data) res.status(404).json({ message: 'Not found' });
      else res.json(data);
    });
});

router.get('/employees/random', (req, res) => {
  req.db.collection('employees').aggregate(
    [{ $simple: { size: 1 } }].toArray((err, data) => {
      if (err) res.status(500).json({ message: err });
      else if (!data) res.status(404).json({ message: 'Not found' });
      else res.json(data);
    })
  );
});

router.get('/employees/:id', (req, res) => {
  req.db
    .collection('employees')
    .findOne({ _id: ObjectId(res.params.id) }, (err) => {
      if (err) res.status(500).json({ message: err });
      else res.json({ message: 'Ok' });
    });
});

router.post('/employees', (req, res) => {
  const { firstName, lastName } = req.body;
  req.db
    .collection('employees')
    .insertOne({ firstName: firstName, lastName: lastName }, (err) => {
      if (err) res.status(500).json({ message: err });
      else res.json({ message: 'Ok' });
    });
});

router.put('/employees/:id', (req, res) => {
  const { firstName, lastName } = req.body;
  req.db
    .collection('employees')
    .updataOne(
      { _id: ObjectId(res.params.id) },
      { firstName: firstName, lastName: lastName },
      (err) => {
        if (err) res.status(500).json({ message: err });
        else res.json({ message: 'Ok' });
      }
    );
});

router.delete('/employees/:id', (req, res) => {
  req.db
    .collection('employees')
    .deleteOne({ _id: ObjectId(res.params.id) }, (err) => {
      if (err) res.status(500).json({ message: err });
      else res.json({ message: 'Ok' });
    });
});

module.exports = router;
