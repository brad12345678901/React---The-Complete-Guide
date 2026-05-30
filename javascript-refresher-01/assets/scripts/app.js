// import Function from "./util.js"

// Function("TEST")

class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet () {
        console.log("Hi!");
    }
}

const user = new User("Manny", 24)

console.log(user);

user.greet()