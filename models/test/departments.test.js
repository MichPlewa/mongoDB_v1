const expect = require('chai').expect;
const Department = require('../departments.model');

describe('Department', () => {
  it('should throw an error if no "name" is provided', () => {
    const department = new Department();
    department.validate((err) => {
      expect(err.errors.name).to.exist;
    });
  });
  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
    for (let name of cases) {
      const dep = new Department({ name });

      dep.validate((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });
  it('should throw an error if "name" is longer than 20 or shorter than 5', () => {
    const cases = ['Abd', 'Lorem ipsum, lorem ipsum', 'Adbc'];
    for (let name of cases) {
      const dep = new Department({ name });

      dep.validate((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });
  it('should not throw an error if "name" is ok', () => {
    const cases = ['Human resources', 'Management'];
    for (let name of cases) {
      const dep = new Department({ name });

      dep.validate((err) => {
        expect(err).to.not.exist;
      });
    }
  });
});
