let x1 = 666; // число
let x2 = Boolean(7); // логич. тип
let x3 = '666'; // строка
let x4 = undefined //тип не определен
let value = x1
if(typeof value === 'number'){
  console.log(value + ' - это число')
}else if(typeof value === 'string'){
  console.log(value + ' - это строка')
}else if(typeof value === 'boolean'){
  console.log(value + ' - это логический тип')
}else{
  console.log('Тип не определен')
}
