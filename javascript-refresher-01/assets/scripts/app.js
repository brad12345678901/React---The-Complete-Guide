// import Function from "./util.js"

// Function("TEST")

const hobbies = ["Sports", "Cooking", "Reading"]

console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex(item => item === "Working")

console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);