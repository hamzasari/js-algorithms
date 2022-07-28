const chai = require('chai');

const fibonacci = require('../src/algorithms/01_fibonacci-sequence');

/**
 * I used https://www.browserling.com/tools/fibonacci-numbers to generate
 *  fibonacci sequences, but I added 0 as the first element of every sequence.
 */

const fibonacci001 = [0];
const fibonacci002 = [0, 1];
const fibonacci003 = [0, 1, 1];

const fibonacci007 = [0, 1, 1, 2, 3, 5, 8];

const fibonacci010 = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34
];

const fibonacci100 = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
  832040,
  1346269,
  2178309,
  3524578,
  5702887,
  9227465,
  14930352,
  24157817,
  39088169,
  63245986,
  102334155,
  165580141,
  267914296,
  433494437,
  701408733,
  1134903170,
  1836311903,
  2971215073,
  4807526976,
  7778742049,
  12586269025,
  20365011074,
  32951280099,
  53316291173,
  86267571272,
  139583862445,
  225851433717,
  365435296162,
  591286729879,
  956722026041,
  1548008755920,
  2504730781961,
  4052739537881,
  6557470319842,
  10610209857723,
  17167680177565,
  27777890035288,
  44945570212853,
  72723460248141,
  117669030460994,
  190392490709135,
  308061521170129,
  498454011879264,
  806515533049393,
  1304969544928657,
  2111485077978050,
  3416454622906707,
  5527939700884757,
  8944394323791464,
  14472334024676220,
  23416728348467684,
  37889062373143900,
  61305790721611580,
  99194853094755490,
  160500643816367070,
  259695496911122560,
  420196140727489660,
  679891637638612200,
  1100087778366101900,
  1779979416004714000,
  2880067194370816000,
  4660046610375530000,
  7540113804746346000,
  12200160415121877000,
  19740274219868226000,
  31940434634990100000,
  51680708854858330000,
  83621143489848430000,
  135301852344706760000,
  218922995834555200000
];

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