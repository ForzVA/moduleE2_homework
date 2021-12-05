let cities = new Map([
  ["Minsk", "Belarus"],
  ["Moscow", "Russia"],
  ["Berlin", "Germany"],
  ["Kiev", "Ukraine"]
]);

for (let elem of cities) {
  console.log(`${elem[0]} is the capital of ${elem[1]}`);
}
