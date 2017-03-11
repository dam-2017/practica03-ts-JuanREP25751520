import { Numero } from './numero';
import { Cadena } from './cadena';

let ops = new Array<Numero>();
let wos = new Array<Cadena>();
//var word = 'ana';

ops.push(new Numero(10,20));
ops.push(new Numero(40,20));
wos.push(new Cadena("anita lava la tina"));

for(let op of ops){
    console.log("El resultado de la suma es: " + op.resultado);
    console.log("El resultado de la resta es: " + op.resultrest);
    console.log("El factorial  es: " + op.factorial(5));
    console.log("El número: " + op.primo(15));

    

}

ops.forEach(op=>{
    console.log(op);
});

for(let wo of wos){
    console.log("El número de letras es: "+wo.cantiWord);
    console.log("El número de vocales es: " + wo.contVocales());
    console.log("La palabra: " + wo.palindromo());
    console.log("El número de palabras es: " + wo.contPalabras());
}

wos.forEach(wo=>{
    console.log(wo);
})