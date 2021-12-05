let arr = ['1', '2', 'JS', 'Python', 'CSS', 'HTML']
console.log(`Количество элементов в массиве - ${arr.length}:`)
let arrAll = arr.forEach(function(item, index, array){
  console.log(item);
})