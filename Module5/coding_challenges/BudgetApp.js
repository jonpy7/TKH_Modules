// Budgeting App
//Juan Peralta 08/20

// Variables
const income = this.parseFloat(prompt("Weekly Income:"));
const foodCost = this.parseFloat(prompt("Food Cost:"));
const housingCost = this.parseFloat(prompt("Housing Cost:"));
const transportation = this.parseFloat(prompt("Transportation Cost:"));
const otherCosts = this.parseFloat(prompt("Other Cost:"));
const YearSavings = this.parseFloat(
  prompt("How much do you want to save in a year?")
);

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

//Take yearly savings and divide it by 52
//To find if enough money to save weekly to achive goal.
const WeeklySavingGoal = YearSavings / 52;

//Now, we need to some math to determin weekly expenses
const weeklyExpenses = foodCost + housingCost + transportation + otherCosts;

//Also, we need to substract all the expenses from their income.
const remainingBalance = income - weeklyExpenses;

// Then we need to run a conditional check to see if the amount left over is greater than or less than the amount they need to save a week.
if (round(remainingBalance, 2) >= round(WeeklySavingGoal, 2)) {
  // If it is, we tell them they are on track;
  console.log("You are on track to your saving goals.");
  document.write("You are on track to your saving goals.");
  document.writeln("");
}

//if not, we tell them they need to save X amount more a week, X is the difference
// between what they do save and what they need to save
else {
  console.log("You need to save $" +
      round((remainingBalance - WeeklySavingGoal) * -1, 2) +
      " Extra a week."
  );
    document.write(
    "You need to save $" +
      round((remainingBalance - WeeklySavingGoal) * -1, 2) +
      " Extra a week."
  );
    document.writeln("");
};
console.log("Your Weekly Expenses are $" + weeklyExpenses );
console.log("Your Remaining Balance is $" + round(remainingBalance, 2));
console.log("Your Weekly Saving Goal is $" + round(WeeklySavingGoal, 2));


//Document Write. To display on HTML Body
document.write("Your Weekly Expenses are $" + weeklyExpenses + ". ");
document.write("Your Remaining Balance is $" + round(remainingBalance,2) + ". ");
document.write("Your Weekly Saving Goal is $" + round(WeeklySavingGoal,2));