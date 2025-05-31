//const funcName = (param1, param2, ...) => {
  // function body
//};


// Arrow function
let sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 10)); // Output: 15

let obj={

    name: "Satyam",
    age: 22,
    company: "gfg",

    greet: function() {
        console.log(`Normal Func--> Hello, my name is ${this.name}`);
    },

    greet2: () => {
        console.log(`Arrow Func--> Hello, my name is ${this.name}`);
    }
}

obj.greet(); // Normal function call 
obj.greet2(); // Arrow function call