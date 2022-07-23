const mongoose = require('mongoose');

const departmentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

mongoose.model('Department', departmentSchema);
