const expect = require('chai').expect;
const Department = require('../departments.model');

describe('Department', () => {
  it('should throw an error if no "name" is provided', () => {
    const department = new Department();
    department.validate((err) => {
      expect(err.errors.name).to.exist;
    });
  });
});
