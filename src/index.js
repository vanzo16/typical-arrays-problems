
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}



/*---avg---*/

const average = arr => arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
    
const result = average( [ 1, 2, 3, 4] ); // 2,5
    
console.log(result);

/*---avg---*/