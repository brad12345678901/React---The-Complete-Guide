function createGreeting(userName, message="Hello World"){
    return "Hi, i am " + userName + "." + message;
}

console.log(createGreeting("Max"))
const greeting = createGreeting("Ian")
console.log(greeting)

