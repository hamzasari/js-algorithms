const chai = require('chai');

const {
  fibonacci001,
  fibonacci002,
  fibonacci003,
  fibonacci007,
  fibonacci010,
  fibonacci100
} = require('../mock/01_fibonacci-sequence');

const fibonacci = require('../src/algorithms/01_fibonacci-sequence');

describe('FibonacciSequence', () => {
  it('should throw an error as there should be at least 1 parameter', () => {
    chai.expect(() => fibonacci()).to.throw('There should be at least 1 parameter');
  });

  it('should throw an error as parameter should be a number', () => {
    chai.expect(() => fibonacci('my sequence')).to.throw('Invalid parameter type: parameter must be a number');
  });

  it('should return fibonacci sequence of -1', () => {
    chai.expect(fibonacci(-1)).deep.to.equal(null);
  });

  it('should return fibonacci sequence of 0', () => {
    chai.expect(fibonacci(0)).deep.to.equal(null);
  });

  it('should return fibonacci sequence of 1', () => {
    chai.expect(fibonacci(1)).deep.to.equal(fibonacci001);
  });

  it('should return fibonacci sequence of 2', () => {
    chai.expect(fibonacci(2)).deep.to.equal(fibonacci002);
  });

  it('should return fibonacci sequence of 3', () => {
    chai.expect(fibonacci(3)).deep.to.equal(fibonacci003);
  });

  it('should return fibonacci sequence of 7', () => {
    chai.expect(fibonacci(7)).deep.to.equal(fibonacci007);
  });

  it('should return fibonacci sequence of 10', () => {
    chai.expect(fibonacci(10)).deep.to.equal(fibonacci010);
  });

  it('should return fibonacci sequence of 100', () => {
    chai.expect(fibonacci(100)).deep.to.equal(fibonacci100);
  });
});
