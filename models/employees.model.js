const mongoose = require('mongoose');

const employeesSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  department: { type: String, require: true },
});

mongoose.model('Employee', employeesSchema);
