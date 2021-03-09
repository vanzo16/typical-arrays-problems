
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



/*---max---*/

var max = [1, 2, 3, 4];

for (var i = 0; i < max.length; i++) {
    if(max[i] > max[0]){
        max[0] = max[i];
    }
 
}
console.log(max[0]);

/*---max---*/

/*---min---*/

var min = [1, 2, 3, 4];

for (var i = 0; i < min.length; i++) {
    if(min[i] < min[0]){
        min[0] = min[i];
    }

}
console.log(min[0]);


/*---min---*/
