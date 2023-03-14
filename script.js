// Exercise #1
const monthlyPayment = (totalCost, interestFee, fee) =>
  totalCost + totalCost * interestFee + fee;

console.log(monthlyPayment(2500, 0.01, 3));
// payment = costs + (costs * 0.01) + 3

// Exercise #2
// #### Part 1
const greeting = ((name1 = "John"), (name2 = "Smith"), (name3 = "Lieu"));
{
  console.log("Welcome " + name1 + ", " + name2 + ", " + name3 + ".");
}

// #### Part 2
const johnAges = (currentYear, birthYear) => currentYear - birthYear;
console.log(johnAges(2023, 1990));

const smithAges = (currentYear, birthYear) => currentYear - birthYear;
console.log(smithAges(2023, 1995));

const lieuAges = (currentYear, birthYear) => currentYear - birthYear;
console.log(lieuAges(2023, 1999));

// #### Part 3

// function catAge(years) {
//     let catYears = 0
// ​
//     if(years === 1) {
//         return 15
//     }
//     if(years === 2) {
//         return 25
//     }
// ​
//     catYears = (years - 2) * 4 + 25
// ​
//     return catYears
// }
// ​
// console.log(catAge(3))
