"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numero_1 = require("./numero");
var cadena_1 = require("./cadena");
var ops = new Array();
var wos = new Array();
//var word = 'ana';
ops.push(new numero_1.Numero(10, 20));
ops.push(new numero_1.Numero(40, 20));
wos.push(new cadena_1.Cadena("anita lava la tina"));
for (var _i = 0, ops_1 = ops; _i < ops_1.length; _i++) {
    var op = ops_1[_i];
    console.log("El resultado de la suma es: " + op.resultado);
    console.log("El resultado de la resta es: " + op.resultrest);
    console.log("El factorial  es: " + op.factorial(5));
    console.log("El número: " + op.primo(15));
}
ops.forEach(function (op) {
    console.log(op);
});
for (var _a = 0, wos_1 = wos; _a < wos_1.length; _a++) {
    var wo = wos_1[_a];
    console.log("El número de letras es: " + wo.cantiWord);
    console.log("El número de vocales es: " + wo.contVocales());
    console.log("La palabra: " + wo.palindromo());
    console.log("El número de palabras es: " + wo.contPalabras());
}
wos.forEach(function (wo) {
    console.log(wo);
});
