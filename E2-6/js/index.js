let arr = ["2", "2", "2", "2", "2"];
let item = "";

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    item = "Все значения равны";
  } else {
    item = "Не все значения равны";
    break;
  }
}
console.log(item);
