console.log("This is 53th video")

function greet(name, greetText = "Greetings from JavaScript"){
    console.log(greetText + " " + name);
    console.log(name +" is a good girl");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // console.log("function is returned");  // this line will never execute (unreachable code)
}

let name = "Pallavi";
let name1 = "Saloni";
let name2 = "Shalini";
let name3 = "Nitya";
let greetText = "Good Morning";

greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);

let returnval = sum(1,2,3);
console.log(returnval)

// console.log(name + "is a good girl");
// console.log(name1 + "is a good girl");
// console.log(name2 + "is a good girl");
// console.log(name3 + "is a good girl");