function removeDuplicateWords(x)
{
  let set = new Set();
  x.split(' ').forEach(element => {
    set.add(element)
  });
  return [...set].join(' ')
}


const s = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(removeDuplicateWords(s))