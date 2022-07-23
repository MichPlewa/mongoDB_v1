const Employee = require('../models/employees.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Employee.find().populate('department'));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Employee.countDocument();
    const rand = Math.floor(Math.random() * count);
    const emp = new Employee.findOne().populate('department').skip(rand);
    if (!emp) res.status(404).json({ message: 'Not found' });
    else res.json(emp);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const emp = await new Employee.findById(req.params.id).populate(
      'department'
    );
    if (!emp) res.status(404).json({ message: 'Not found' });
    else res.json(dec);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.postOne = async (req, res) => {
  try {
    const { firstName, lastName, department } = req.body;
    const newEmployee = new Employee({ firstName, lastName, department });
    await newEmployee.save();
    res.json(await Employee.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.editOne = async (req, res) => {
  const { firstName, lastName, department } = req.body;
  try {
    const emp = await Employee.findById(res.params.id);
    if (emp) {
      await new Employee.updataOne(
        { _id: res.params.id },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            department: department,
          },
        }
      );
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.json({ message: err });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (emp) {
      await Employee.deleteOne({ _id: req.params.id });
      res.json(await Employee.find());
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
