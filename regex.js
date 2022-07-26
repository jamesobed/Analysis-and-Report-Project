let str = "aaaa     aanaaaa     anaaa   aa";
let str2 = str.split(" ").join("");

let b = str2.replace(/a/g, "");
console.log(b);

let s = "21.108";
console.log(typeof s);
let num = Number(s);
let num1 = parseFloat(s);
let num2 = parseInt(s);
console.log(num);
console.log(num1);
console.log(num2);
/**
 * Number
 * parseInt
 * ParseFloat
 */

let input = [
  { name: "Mary", age: 35, gender: "f" },
  { name: "Mary", age: 20, gender: "m" },
  { name: "Mary", age: 15, gender: "m" },
  { name: "Mary", age: 25, gender: "f" },
  { name: "Mary", age: 10, gender: "m" },
  { name: "Mary", age: 50, gender: "f" },
  { name: "Mary", age: 40, gender: "m" },
];

let ageBelow25 = (input) => {
  let maleAges = 0;
  let femaleAges = 0;
  for (let i of input) {
    if (i.gender === "f" && i.age <= 25) {
      femaleAges += i.age;
    }
    if (i.gender === "m" && i.age <= 25) {
      maleAges += i.age;
    }
  }
  return { totalMaleAges: maleAges, totalFemaleAges: femaleAges };
};

console.log(ageBelow25(input));

let arrayMultiples = (x) => {
  let arrayM = [];
  for (let n of x) {
    for (let i = 1; i <= 5; i++) {
      console.log(n, i);
      arrayM.push(n * i);
    }
  }
  return arrayM;
};
console.log(arrayMultiples([1, 4]));

let returnArrayDuplicate = (x) => {
  let seen = [];
  let duplicate = [];
  for (let i of x) {
    if (seen.includes(i)) {
      if (!duplicate.includes(i)) {
        duplicate.push(i);
      }
    }
    seen.push(i);
  }
  //   return  Array.from(new Set(duplicate))
  return duplicate;
};

console.log(returnArrayDuplicate([1, 2, 1, 3, 4, 5, 2, 2, 2, 6, 1]));
