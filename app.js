const filterOutOdds = (...arguments) =>
arguments.filter((num) => num % 2 ===0);


const numeros = [2, 4, 6, 8, 10, 1, 1.25]
const findMin = (...nums) => {
    return nums.reduce((min, next) => min < next ? min : next)
}
console.log(findMin(...numeros));

const firstList = {a:1, b:2};
const secondList = {c:3, d:4};
const mergeObjects = (a, b) => ({...a, ...b}); // need parenthesis, otherwise error
console.log(mergeObjects(firstList, secondList));


const doubleAndReturnArgs = (arr, ...more) => {
    const double = more.map((v) => v * 2);
    return [...arr, ...double];
  }
  console.log(doubleAndReturnArgs([1,2,3],4,4));
  console.log(doubleAndReturnArgs([2],10,4));
  
  