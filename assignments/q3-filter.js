function filter (xs, condition) {
  var filtered = [];

  for (var i = 0; i < xs.length; i++){
  	if (condition(xs[i])) filtered.push(xs[i]);
  }

  return filtered;

}
