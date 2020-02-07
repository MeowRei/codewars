function divisibleBy(numbers, divisor){
return numbers.filter(elem => elem % divisor == 0)
}
// const arr = [1, 2, 3, 4, 5, 6]
// const num = 2
// console.log(divisibleBy(arr,num))