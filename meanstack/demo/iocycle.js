let fs = require('fs');

let total =0
fs.readFile('./index.js',()=>{
    setTimeout(print1,0);
    setImmediate(print2);
});


let n =1
// print()
function print1(){
    total = 10* n
    console.log("Total1:",total)
    n++;
}

function print2(){
    total = 10* n
    console.log("Total2:",total)
}