// Exercise #1
const monthlyPayment = (totalCost, interestFee, fee) =>
  totalCost + totalCost * interestFee + fee;

console.log(monthlyPayment(2500, 0.01, 3));
// payment = costs + (costs * 0.01) + 3

// Exercise #2
// #### Part 1
const greeting = {
  nameOne: "John",
  nameTwo: "Smith",
  nameThree: "Lieu",
};

// #### Part 2
const friendsAge = {
  nameOneAge: 2023 - 1990,
  nameTwoAge: 2023 - 1995,
  nameThreeAge: 2023 - 1999,
};
// #### Part 3

const introFriend = () => {
  console.log(
    "Welcome " +
      greeting.nameOne +
      ", you are " +
      friendsAge.nameOneAge +
      ". Welcome " +
      greeting.nameTwo +
      ", you are " +
      friendsAge.nameTwoAge +
      ". Welcome " +
      greeting.nameThree +
      ", you are " +
      friendsAge.nameThreeAge +
      "."
  );
};
introFriend();

// #### Challenge Yourself
// #### Part 1
// function studentsGrade() {
//   let grade = 5;
//   if (score >= 5) {
//     grade = "true";
//   } else if (score > 8) {
//     grade = "Excellent";
//   } else if (score === 11) {
//     grade = "Perfect";
//   }
//   return grade;
// }
// console.log(studentsGrade());
