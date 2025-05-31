

let arr=[1,2,3,4,5];

let [a, b, , d] = arr; // Destructuring the array

console.log(a,b,d); // Output: 1 2 4

let [m,n,o,p] = arr;

console.log(m,n,o,p); // Output: 1 2 3 4



let obj = {
    name: "Satyam",
    age: 22,
    company: "gfg",
};

console.log(obj.company);

let {age, company} = obj; // Destructuring the object
console.log(age, company); // Output: 22 gfg