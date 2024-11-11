const array = ["Данила", "Дарья", "Мария", "Мария"];
const number = [1, 2, 3, 4, 5];
// array.push('Дима');
// array.unshift("Дима");
// fname = array.shift();
// const name = array.pop();

// console.log("Names: ", array, name);
// const reverse = array.toReversed()
// const letters = [1, 7, 5, 2]
// console.log(
//   letters.sort(function (a, b) {
//     return b - a;
//   })
// );
// console.log(array.toSpliced(0, 2));
// console.log(array);

// const greateWoman = "Дарья";
// const index = array.indexOf(greateWoman);
// console.log(index)
// array[index] = 'Дарья Горбунова'
// console.log(array[index]);
// const nameee = array.with(index, 'Дарья')
// console.log(nameee);
// console.log(array);

// const newNumber = number.map(function(item) {
//     return item + 1;
// })


// console.log(number);
// console.log(newNumber);


// const people = [
//   { name: "Данила", budget: 2000 },
//   { name: "Дарья", budget: 3000 },
//   { name: "Макс", budget: 1000 },
//   { name: "Олег", budget: 500 },
// ]

// let findPeople
// for(let person of people) {
//     if(person.budget === 3000){
//         findPeople = person
//     }
// }
// const findPeople = people.find(function(person){
//     return person.budget >= 500
// })

// const finded = people.find((p) => p.budget === 3000)

// let sumBudget = 0;
// const filtered = people.filter((p) => p.budget > 1000)
// console.log(filtered);

// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })

// const byBudgetFilter = (p) => p.budget > 2000;
// const takeBudget = (p) => p.budget;

// const sumBudget = people
//   .filter(byBudgetFilter)
//   .map(takeBudget)
//   .reduce((acc, p) => acc + p);

// console.log(sumBudget);

const string = "?алед каК !тевирП";

const reversed = string.split('').reverse()
.join('!').split('').filter((c) => c !== '!').join('')

console.log(reversed)