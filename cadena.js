"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(palabra) {
        this.palabra = palabra;
        this.cantiWord = palabra.length;
    }
    Cadena.prototype.contVocales = function () {
        var words = this.palabra.split("");
        var contador = 0;
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            switch (word.toLowerCase()) {
                case "a":
                    contador++;
                    break;
                case "e":
                    contador++;
                    break;
                case "i":
                    contador++;
                    break;
                case "o":
                    contador++;
                    break;
                case "u":
                    contador++;
                    break;
            }
        }
        return contador;
    };
    Cadena.prototype.palindromo = function () {
        var reversa = this.palabra.split("").reverse().join("").toLowerCase();
        reversa = reversa.replace(/\s/g, "");
        if (reversa == this.palabra.replace(/\s/g, "").toLowerCase()) {
            return "Es palindromo";
        }
        else {
            return "NO es palindromo";
        }
    };
    Cadena.prototype.contPalabras = function () {
        var contador = 0;
        var words = this.palabra.split(" ");
        for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
            var word = words_2[_i];
            if (words.length != 0)
                contador++;
        }
        return contador;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
