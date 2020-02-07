function sumOfMinimums(arr){
  return arr.map(elem => elem.sort((a, b) => a - b)).reduce((total, elem) =>
  total + elem[0] ,0)
}
// const arr = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]
// console.log(sumOfMinimums(arr))