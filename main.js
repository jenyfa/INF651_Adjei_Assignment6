/* Practice Assignment 6:
Complete this javascript file according to the individual instructions
given in the comments. 
*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an object named webDev that cannot be reassigned and
// contains the 3 key-value pairs:
// frame: "HTML", style: "CSS", logic: "JavaScript"

const webDev = {
    frame: "HTML",
    style: "CSS",
    logic: "JavaScript"
}
// 2) Create an object named pizza with a property named crust.
// Set the crust value to "thin". Add a method named setCrust
// to the object that accepts a parameter named crustType.
// The method should change the crust value of the object to
// the value of the parameter.
// Hint: keyword to use is "this".

class Pizza {
    constructor() {
        this.pizza = {};
        this.pizza.crust = "Thin";
    }
    setCrustJ(crustType) {
        this.pizza.crust = crustType;
    }
}
let pObj = new Pizza();
console.log(`Before calling the method, the crust is ${pObj.pizza.crust}`);
pObj.setCrustJ("Thick");
console.log(`After calling the method, the crust has been modified to ${pObj.pizza.crust}`);


// 3) Create a function named doesItContain that accepts two
// parameters: "key" and "obj". The function should return
// boolean data to indicate if the key exists in the object.
function doesItContain(key, obj) {
    for (let i in obj) {
        if (i == key) return true;
    }
    return false;
}

let obj = {
    name: "Rocky",
    age: 29
}

console.log(doesItContain("name", obj)); 
console.log(doesItContain("location", obj));

// 4) Create a function named introduceTheActors that accepts
// the array of objects named actors (see below) as a parameter.
// Name the parameter "actorArray". The function should loop
// through the actors array and create the following statement
// for each actor:
// "Hi, I'm {actorName} and I was in {movieName}."
////////
// Example: "Hi, I'm Keanu and I was in The Matrix."
////////
// Store each statement in an array that is returned when
// the function is complete. The returned array should have
// all of the created statements inside.
const actors = [
    { name: "Keanu", movie: "The Matrix" },
    { name: "Amy", movie: "Arrival" },
    { name: "Leonardo", movie: "The Wolf of Wall Street" },
    { name: "Sigourney", movie: "Alien" },
    { name: "Jeff", movie: "The Big Lebowski" },
  ];
  ///////// Do not change the above array of objects /////////
  function introduceTheActors (actorArray){
      let arraystatement = [];
      for (let i in actorArray){
          let n = "Hi, I'm (i.name) and I was in (i.movie)."
          arraystatement.push(n);
      }
      return arraystatement;
  }
  
  // 5) Create an object named techCompanies that has the following
  // key-value pairs:
  // Microsoft: "Bill Gates", Amazon: "Jeff Bezos", Tesla: "Elon Musk",
  // Facebook: "Mark Zuckerberg", Apple: "Steve Jobs"
  // Add a method to the techCompanies object named founderLookup
  // that accepts companyName as a parameter and returns
  // the name of the founder.
  const techCompanies = {
      Microsoft: "Bill Gates",
      Amazon: "Jeff Bezos",
      Tesla: "Elon Musk",
      Facebook: "Mark Zuckerberg",
      Apple: "Steve Jobs",

      founderLookup: function (companyName){
          return this [companyName];
      }
  }

  console.log (techCompanies);
  console.log (techCompanies.founderLookup("Microsoft"));

  // 6) Utlizing the same techCompanies object from #5,
  // Create a function named storeFounders that accepts
  // an object and loops through the values. Store the
  // name of each founder in a new array that is returned
  // by the function when the loop is complete.

  function storeFounders (object){
      const arraytech = [];
      object.values(object).forEach(value =>{
          if (typeof value != "function"){arraytech.push(value)}
      })
      return arraytech;
  }
  
  // 7) Create a function named goToSecondClass that accepts
  // a destructured object as a parameter. The parameter
  // extracts the "secondHour" property of the object.
  // The function should return this statement:
  // "Time to go to {property_value} class!"
  //////////
  // Example: "Time to go to Programming class!"
  /////////
  // Test your function with this object:
  const myClasses = {
    firstHour: "Ethics",
    secondHour: "Programming",
    thirdHour: "Biology",
  };
  ////////// Don't change the above object

  function goToSecondClass(object) {
    return `Time to go to ${object.secondHour} class!`;
  }
  console.log(goToSecondClass(myClasses));

  // 8a) Create a generic object named pie.
  // Give the pie object a property named "slices"
  // that has a value of 8. Give the pie object
  // a method named "taste". Have the taste method
  // return "Wow!".
  /////

 let pie = {
     slices: '8',
     taste: function () {
         return "Wow!!"
     }
 }
  // 8b) Create a new object named "blueBerryPie"
  // that uses the pie object as a constructor
  // to inherit its property and method. Use
  // dot notation to add a flavor property to
  // the "blueBerryPie" object that has a value of
  // "blueberry". Also, update the taste method of
  // this new object to return "Delicious!"
  ////////////////
  // Hint: Inheritance is in this week's video.
  let blueBerryPie = {
      pie,call(this);
      = "blueberry";

  }