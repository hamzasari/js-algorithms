/**
 * Gets the fibonacci sequence as an array for the given length
 * 
 * Time complexity for this function: Big-O = O(n)
 *
 * @param {number} n length of the desired fibonacci sequence
 * @returns {Array} array of the fibonacci sequence
 */
const fibonacci = (n) => {
  // parameter checking
  if (n === null || n === undefined) throw new Error('There should be at least 1 parameter');
  if (typeof(n) !== 'number') throw new TypeError('Invalid parameter type: parameter must be a number');

  const baseArray = [0, 1];

  // edge cases
  if (n <= 0) return null;
  if (n === 1) return [0];
  if (n === 2) return baseArray;

  // time complexity(for loop below): O(n)
  //   the loop count is determined by the input n, and count of this loop 2 to n - 1
  for (let i = 2; i < n; i++) {
    // time complexity(line below): O(1)
    //   array push: O(1) + array access: O(1) + array access: O(1) = O(3) -> O(1)
    baseArray.push(baseArray[i - 1] + baseArray[i - 2]);
  }

  return baseArray;
};

module.exports = fibonacci;
