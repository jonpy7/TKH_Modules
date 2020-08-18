// Challenge 3:
//CodePen: https://codepen.io/jperalta7/pen/xxVZwNy

// Step 1: Take the following lyrics as a long string and use the split string method to change it to an array of string

var Quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me,";

//Making use of the split method
//Example: var ar = fruitsarray.split(', '); // split string on comma space

//var re = /:\s|,\s/; // split on colon space or comma space
var Lyrics = Quote.split(' ');
console.log(Lyrics);

// Step 2: Iterate thru each string and when a string has the letter ‘s’ in it replace it with ‘$’

for(i=0; i < Lyrics.length; i++){
 if (Lyrics[i].includes("s") || Lyrics[i].includes("S")){
   var iteration = Lyrics[i].replace(/s/ig, "$");
   Lyrics[i] = iteration
 }
}
console.log(Lyrics); 

// Step 3: join the array back into a string again using ‘ ‘ as a separator with the join string method.
var newLyrics = Lyrics.join(" ")

// Step 4: Log the new string to your screen
console.log(newLyrics)


