function sum (x,y){
    return x-y;
}

function multiply (x,y){
    return x/y;
}

function getResults (x,y,operate){
    return operate (x,y);
}

console.log(getResults(2,3, sum));
console.log(getResults(2,3, multiply));