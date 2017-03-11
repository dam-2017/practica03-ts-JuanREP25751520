export class Numero{
    num1: number;
    num2: number;
    private result: number;
    resultrest: number;
    i:number; 
    factor = 1; 
    nPrimo:boolean = true;

    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;
        this.result = this.num1 + this.num2;
        this.resultrest = this.num1 - this.num2;
    }

    get resultado(){
        return this.result;
        
    }

    get resta(){
        return this.resultrest;
    }

    /*operaciones(a:number, b:number){
        switch
    }*/

    factorial(num){
      for(this.i = num;this.i>=1;this.i--){
          this.factor *= this.i;
      }
    }

    primo(num){
        var a:number
        for(a=2; a<num; a++){
            if(num%a==0){
                this.nPrimo=false
            }
        }
        if(this.nPrimo){
           return('Es primo')
        }
        else{
            return('No es primo')
        }
    }

}