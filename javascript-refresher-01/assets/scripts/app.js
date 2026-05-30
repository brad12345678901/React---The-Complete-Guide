// import Function from "./util.js"

// Function("TEST")

const hobbies = ["Study", "Practice"];

const newHobby = ["Working"];

const editedHobbies = [...hobbies, ...newHobby];

console.log(editedHobbies);

let user = {
    name: "Name",
    age: 24
}

user = {
    isActive: true,
    ...user
}

console.log(user);