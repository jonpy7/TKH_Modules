// Challenge 1
// First Name - Last Name
// Below have a list of full names, we want to split these names into an array containing
// the first and last names as separate items.
// Then we want to push these names to two different arrays named first_name,
// last_name
// [“Westly Snipes”, “Nicholas Cage”, “Nasir Jones”, “Sean Carter”, “Sean Combs”,
// “Michael Jordan”, “Patrick Ewing”]


//CodePen: https://codepen.io/jperalta7/pen/RwaaWqd

// Challenge 1
// First Name - Last Name

var RawNames = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

const firstname = [], lastname = [];

// // Splitting these names into an array containing
for(i =0; i < RawNames.length; i++){
   TreatedNames = RawNames[i].split(" ");
  firstname.push(TreatedNames[0])
  lastname.push(TreatedNames[1])
}
console.log(firstname);
console.log(lastname);

// Write your script in the folder for Module 5 and push it to GitHub.
