const Employee = require('../employees.model.js');
const expect = require('chai').expect;

describe('Employee', () => {
  it('should throw an error if no "name" is provided', () => {
    const employee = new Employee();
    employee.validate((err) => {
      expect(err.errors.firstName).to.exist;
    });
  });
});
