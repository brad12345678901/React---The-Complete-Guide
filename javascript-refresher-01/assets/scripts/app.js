// import Function from "./util.js"

// Function("TEST")

const password = prompt("Type Password");

if (password === "Hello") {
    console.log("Hello Works")
} else if (password === "hello works") {
    console.log("hello works");
} else {
    console.log("Access not Granted!");
}

const hobbies = ["Create", "Study"];

for (const hobby of hobbies) {
    console.log(hobby);
}
