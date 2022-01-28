


module.exports = function towelSort (matrix) {
  if (!matrix){return []}
  return matrix.flatMap(function(arr, i){
    if (i%2 === 1){
      arr= arr.reverse()
    }
    return arr

  });
}
