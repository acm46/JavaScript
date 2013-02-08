function map (xs, fn) {
var mapped = [];
for (var i = 0; i < xs.length; i++){
	mapped.push(fn(xs[i]));
}
return mapped;
}