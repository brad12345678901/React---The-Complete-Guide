// import Function from "./util.js"

// Function("TEST")

const user = {
    name: "Max",
    age: 24,
    greet() {
        return `Hello ${this.name}`
    },
}

console.log(user.greet())