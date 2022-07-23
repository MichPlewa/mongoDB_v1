const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, require: true },
  client: { type: String, require: true },
});

mongoose.model('Product', productSchema);
