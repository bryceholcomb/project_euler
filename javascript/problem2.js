// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// Generate a fibonnacci sequence whose last number falls below 4 mil
function fib(up_to) {
  // initialize an array of [0, 1], need first two to build on
  var fibSequence = [0, 1];
  var i = 1;
  // some kind of loop to create sequence
  while (true){
  // add the most recent element in the list and the next most recent
    var nextValue = fibSequence[i] + fibSequence[i - 1];
  // when the next value is more than 4 mil, break from the loop
    if (nextValue > up_to) break;
  // push that value in to the fibSequence
    fibSequence.push(nextValue)
    i++
  }
  // return the value
  return fibSequence;
}

console.log(fib(100));