"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero(num1, num2) {
        this.factor = 1;
        this.nPrimo = true;
        this.num1 = num1;
        this.num2 = num2;
        this.result = this.num1 + this.num2;
        this.resultrest = this.num1 - this.num2;
    }
    Object.defineProperty(Numero.prototype, "resultado", {
        get: function () {
            return this.result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "resta", {
        get: function () {
            return this.resultrest;
        },
        enumerable: true,
        configurable: true
    });
    /*operaciones(a:number, b:number){
        switch
    }*/
    Numero.prototype.factorial = function (num) {
        for (this.i = num; this.i >= 1; this.i--) {
            this.factor *= this.i;
        }
    };
    Numero.prototype.primo = function (num) {
        var a;
        for (a = 2; a < num; a++) {
            if (num % a == 0) {
                this.nPrimo = false;
            }
        }
        if (this.nPrimo) {
            return ('Es primo');
        }
        else {
            return ('No es primo');
        }
    };
    return Numero;
}());
exports.Numero = Numero;
