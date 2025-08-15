console.log("User Array:")

const users = [
    { name: "A", age: 25 },
    { name: "B", age: 32 },
    { name: "C", age: 28 },
    { name: "D", age: 35 },
    { name: "E", age: 30 }
];


console.log("Yaşı 30-dan kiçik olanlar:");
for (let i = 0; i < users.length; i++) 
{
    if (users[i].age >= 30) {
        continue;
    }
    console.log(users[i]);
}

console.log("Yaşı 30-dan böyük olanlar:");
for (let i = 0; i < users.length; i++) 
{
    if (users[i].age <= 30) {
        continue;
    }
    console.log(users[i]);
}

console.log("30-dan böyük ilk şəxsi tapmaq:");
for (let i = 0; i < users.length; i++) 
{
    if (users[i].age > 30) {
        console.log(users[i]);
        break;
    }
}
