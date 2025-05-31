


// let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(function(ele, idx,arr) {
//     arr[idx] = ele * 2; // multiply each element by 2   
// });

// console.log(arr);  // original array changed


let arr = [1, 2, 3, 4, 5];

// let ans= arr.map(function(ele, idx, arr) {
//     return ele * 2; // multiply each element by 2 and return a new array
// });
// console.log("ans: ", ans); // [2, 4, 6, 8, 10]
// console.log("arr: ", arr); // original array remains unchanged



// let ans = arr.filter(function(ele, idx, arr) {
//     return ele % 2 === 0; // filter even numbers
// });
// console.log("ans: ", ans); // [2, 4]


// let ans = arr.reduce(function(acc, curr) {
//     return acc + curr; // sum of all elements
// }, 0);  //0-> deafult value of acc

// console.log("ans: ", ans); // 15




// IIFE-Immideately Invoked Function Expression

(function() {
    console.log("This is an IIFE");
})(); // This will execute immediately



function counter(){

    let count = 0 ;
    
    function increment(){
    count++;
    console. log(count);
    }
    
    function decrement (){
    count --;
    console. log(count);
    }
    
    let obj = {
    incFn : increment,
    decFn : decrement
    }
    
    return obj ;
}
    
    let obj = counter();

    