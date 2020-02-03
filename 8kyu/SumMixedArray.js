function sumMix(x){
  return x.reduce((acc, cur) => Number(acc) + Number(cur))
}


const x = [9, 3, '7', '3']

console.log(sumMix(x))
