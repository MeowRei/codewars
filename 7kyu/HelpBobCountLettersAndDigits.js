function countLettersAndDigits(input)
{
  const search = input.match(/(\d)|([a-z])/gmi)
  return search ? search.length : 0
}
const input = "?"
console.log(countLettersAndDigits(input))