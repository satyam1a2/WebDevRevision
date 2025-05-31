// // 1. Create a Promise
// let fetchData = new Promise(function(resolve, reject) {
//     console.log("Fetching data...");
  
//     setTimeout(() => {
//       let success = true;
  
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000); // Simulate delay (2 seconds)
//   });
  
//   // 2. Consume the Promise
//   fetchData
//     .then(function(response) {
//       console.log("✅ THEN block:", response);
//     })
//     .catch(function(error) {
//       console.log("❌ CATCH block:", error);
//     });
  


function task1(raw){
    let pr1= new Promise((resolve, reject)=>{
        if(raw != undefined){
            resolve("Task 1");
        }
        else{
            reject("Task 1 not ready");
        }
    });
    return pr1;
}


function task2(raw){
    let pr2= new Promise((resolve, reject)=>{
        if(raw != undefined){
            resolve("Task 2");
        }
        else{
            reject("Task 2 not ready");
        }
    });
    return pr2;
}

function task3(raw){
    let pr3= new Promise((resolve, reject)=>{
        if(raw != undefined){
            resolve("Task 3");
        }
        else{
            reject("Task 3 not ready");
        }
    });
    return pr3;
}


console.log("Starting tasks...");

task1("ta").then((res1)=>{
    console.log(" Task1 is completed ");
    return task2(res1)
}).then((res2)=>{
    console.log(" Task2 is completed ");
    return task3(res2)
}).then((res3)=>{
    console.log(" Task3 is completed ");
    console.log("All tasks completed successfully: ", res3);
})


console.log("End");