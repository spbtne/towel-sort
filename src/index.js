
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix === undefined || matrix.length === 0) { let result = []; return result }

    let result = matrix.map(function(elem,index)                       
 {
    if (index % 2 === 0) {
      return elem
    }
    else {
      return elem.reverse();
    }
  })
  return result.reduce((acc, it) => [...acc, ...it], []);

  
  towelSort (matrix);
}
