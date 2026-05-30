const user = {
    name: "TEST",
    yes: "YES"
};

//CANT DO
// user = {
//     ...user,
//     NO: "NO"
// }

//BUT YOU CAN
user.NO = "NO";
console.log(user);
