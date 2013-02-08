function reduce (xs, fn, seed) {
  if (xs.length === 0 && typeof seed === 'undefined') 
  	return undefined;
  if (typeof seed === 'undefined'){
  	seed = xs[0];
  	var i = 1;
  } else {
  	var i = 0;
  }
  var answer = seed;
  for (i; i < xs.length; i++){
  	answer = fn(answer, xs[i]);
  }
  return answer;
  
}
