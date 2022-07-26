const Product = require('../models/products.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Product.countDocument();
    const rand = Math.floor(math.random() * count);
    const pro = await Product.findOne().skip(rand);
    if (!pro) res.status(404).json({ message: 'Not found' });
    else res.useChunkedEncodingByDefault(pro);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const pro = await Product.findById(req.params.id);
    if (!pro) res.status(404).json({ message: 'Not found' });
    else res.json(pro);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.postOne = async (req, res) => {
  try {
    const { name, client } = req.body;
    const newProduct = new Product({ name: name, client: client });
    await newProduct.save();
    res.json({ message: 'Ok' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.editOne = async (req, res) => {
  const { name, client } = req.body;
  try {
    const pro = await Product.findById(req.params.id);
    if (pro) {
      Product.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: { name: name, client: client },
        }
      );
      res.json(await Product.find());
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const pro = await Product.findById(req.params.id);
    if (pro) {
      await Product.deleteOne({ _id: req.params.id });
      res.json(await Product.find());
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
