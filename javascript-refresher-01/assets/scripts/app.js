function handleTimeout () {
    console.log("Timed Out!");
}

const handleTimeout2 =  () => {
    console.log("Timed Out...again !");
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("Timeout once more...!");
}, 4000);

function greeter(greet) {
    greet();
}

greeter(() => console.log("Hi!"))
