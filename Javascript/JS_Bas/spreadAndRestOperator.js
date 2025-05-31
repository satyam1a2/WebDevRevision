

let arr1 = [1, 2, 3];
let arr2 = ['a','b','c','d'];

// Using spread operator to merge arrays
let mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray); 

let ans= [...arr1, ...arr2, 4, 5, ...arr1, ...arr1, ...arr2];
console.log("Extended Array:", ans);




let obj1 = {name: "satyam", b: 2};
let obj2 = {age: 3, d: 4};

let cobj = {...obj1, ...obj2};
console.log("Merged Object:", cobj);