let a = prompt('Введите число');
let value = +a;
let remainderDivisions;
let resultValue = '';

if( isNaN(value)){
  resultValue='Упс, кажется, вы ошиблись.'
}else if(a === null){
  resultValue='Не хочешь вводить, как хочешь.'
}else if(typeof value === 'number'){
  resultValue=`${value} - число.`
  if(value % 2 === 1){
    remainderDivisions = 'Это нечётное число.'
  }else{
    remainderDivisions = 'Это чётное число.'
  }
}else{
  resultValue='Упс, кажется, вы ошиблись.'
}

console.log(resultValue, remainderDivisions);
