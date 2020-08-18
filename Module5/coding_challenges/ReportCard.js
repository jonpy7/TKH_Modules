// Report Card Appliacion
// Juan Peralta 08/20
// Enter a score to get a grade letter. from 0 to 100.

//CodePen
//https://codepen.io/jperalta7/pen/bGpVXKa

//Variable grade = input
const grade = this.parseInt(prompt("What is your grade:"));

//Function using a Switch to get Grading Score
function GradingScore(grade) {
  var score;

  switch (true) {
    case grade > 95 && grade <= 100:
      score = "A+";
      break;
    case grade > 88 && grade <= 95:
      score = "A";
      break;
    case grade > 84 && grade <= 88:
      score = "B+";
      break;
    case grade > 76 && grade <= 84:
      score = "C+";
      break;
    case grade > 70 && grade <= 76:
      score = "C";
      break;
    case grade > 67 && grade <= 70:
      score = "D+";
      break;
    case grade > 64 && grade <= 67:
      score = "D";
      break;
    case grade <= 64:
      score = "F";
      break;

    case grade > 100 && grade < 0:
      score = "Wrong Score";
      break;

    default:
      return "Wrong Score";
  }

  return score;
}

console.log(GradingScore(grade));
