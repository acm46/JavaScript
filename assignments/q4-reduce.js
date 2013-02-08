function reduce (xs, fn, seed) {
  var i = seed ? 0 : 1;
  var answer = seed;
  for (i; i < xs.length; i++){
  	answer = fn(answer ? answer : xs[0], xs[i]);
  }
  return answer; 
}