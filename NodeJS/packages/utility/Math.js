

export function sum(a,b){
    return a + b;
}

export function sub(a,b){
    return a - b;
}


export function multiply(a,b){   
    return a * b;
}

export function divide(a,b){    
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}