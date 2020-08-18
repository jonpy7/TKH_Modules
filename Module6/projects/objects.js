//Cars
let car = {
  make: "Nissan",
  model: "Maxima",
  Year: "2015",
  doors: "4",
  gear: "automatic",
  color: "white",
  Features: function() {
    console.log("Car Features: This car is a " + this.make +" " + this.model + ", " + "Year " + this.Year
    +". Color: " + this.color + "With " + this.doors + " doors and " + this.gear + " shift gear.")
  },
  get maker() {
    return this.make;
  },
  set maker(maker) {
    this.make = maker;
  }

};
car.maker = "Toyota";
car.model = "Sienna";
car.doors = 5;

let person = {
  name: "Juan",
  lastname: "Peralta",
  language: "en",
  musicgenre: "Rock",
  profession: "Systems Engineer",
  tellUsAboutYourself: function() {
    console.log("About Person: Hello My name is " +this.name +" and I like most music genre and decades in special " + this.musicgenre 
    + " I like it when I am writing computer programs or working in the computer in general."
    + "For reading or writing texts, I may like Classical Music for studying, for you know to get focused and creative.")
  },
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  }
};

person.lang = "es"

//Animals
let cat = {
  name: "Cleo" ,
  breed: "Tuxedo" ,
  age: 2 ,
  legs: 4 ,
  speech: function (){alert( "Cat Speech: Meow." )
  },

   get breeder() {
    return this.breed;
  },
  set breeder(breeder) {
    this.breed = breeder;
  }
};

cat.breeder = "Kinkalow"

  
  //Adding more methods and attributes 
  //using the object name and dot notation and atribute name
  
  cat.color = "black and white"
  //cat.color // "black and white"

  //Sports
  let Sports = {
    discipline: "Soccer",
    players: 22,
    element: "foot ball",
    Scoring:  "goalposts",

    GateKeeper: function() {
      console.log("Goal Keepers: Protect and block " + this.element +" "+"from opposite team player to kick the  " + this.element + " "
       + "from scoring by blocking " + this.element + "entering the " + this.Scoring)
    },
    get sport() {
      return this.discipline;
    },
    set sport(sport) {
      this.discipline = sport;
    }
  };
   Sports.sport = "Basketball";
   Sports.element = "Basket ball";

//Printing to Console
console.log (car);
console.log(cat, person, Sports);

car.Features()
cat.speech()
person.tellUsAboutYourself()

Sports.GateKeeper()

Sports.sport