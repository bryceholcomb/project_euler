// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumOfMultiplesWithArray(array) {
  return array.reduce(function(sum, n) {
    return (n % 3 === 0 || n % 5 === 0) ? sum + n : sum;
  }, 0);
}

console.log(sumOfMultiplesWithArray(array))
