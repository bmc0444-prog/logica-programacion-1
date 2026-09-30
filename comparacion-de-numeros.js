const prompt = require('prompt-sync')();

let a = Number(prompt("Ingrese un número: "));
    while(isNaN(a)) {
        console.log("Ingrese un número valido");
        a = Number(prompt("Intente de nuevo: "));
        
    }
let b = Number(prompt("Ingrese otro número: "));
    while(isNaN(b)) {
        console.log("Ingrese un número valido");
        a = Number(prompt("Intente de nuevo: "));
        
    }
let c = Number(prompt("Ingrese un último número: "));
    while(isNaN(b)) {
        console.log("Ingrese un número valido");
        a = Number(prompt("Intente de nuevo: ")); 
    }



let numeros = [a, b, c];


if (isNaN(a) || isNaN(b) || isNaN(c) ){
    console.log( "no es un número valido");
} else if (a === b || a === c || b === c ) {
    console.log( "Hay dos números iguales");
} 


numeros.sort((a, b) => b - a);

console.log("números de mayor a menor", numeros);

numeros.sort((a, b) => a - b);
console.log("números de menor a mayor", numeros);
