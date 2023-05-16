let person = {
  firstName: "Joe",
  lastName: "Doe",
};
console.log(typeof person);
console.log(person);
console.log(person.firstName);

let adress = {
  "building no": 5,
  street: "Keowee",
  state: "Kentucky",
};

console.log(adress);
console.log(adress["building no"]);
console.log(adress.street);
console.log(adress["street"]);

// add new property to object

person.age = 30;
console.log(person);

//TODO https://javascript.info/ -->> useful for lerarning new things

//delete a property

delete person.age;
console.log(person);

// check a property if it exists
console.log("street" in adress); // true

let course = {
  name: "Js",
  url: "www.cydeo.com",
  subject: ["Objects", "Arrays", "Functions", "Live Server"],
};

console.log(course);

// loop using keys of the object

for (let key in course) {
  console.log(key + ":" + course[key]);
}
// value which was array turned into string = Objects,Arrays,Functions,Live Server

/**
 * We will have fixtures folder in Cypress Tool, we store JSON files
 */

// let's create an object with function, array, object in it

let myCar = {
  make: "Dacia",
  color: "orange",
  year: 2022,
  engine: {
    cylinders: 3,
    size: 1.0,
  },
  extras: ["Ac", "Cruise Control", "Sound System"],
  drive: function () {
    console.log("Running on LPG");
 }
};


myCar.drive(); //like in Java

console.log(myCar.extras[1]); // familiar with this from API Testing