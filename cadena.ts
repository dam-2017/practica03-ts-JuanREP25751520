export class Cadena{
    palabra:string;
    cantiWord;

    constructor(palabra:string){
        this.palabra = palabra;
        this.cantiWord = palabra.length;
    }

    contVocales(){ 
        let words : Array<string> = this.palabra.split("");
        var contador:number = 0;
        for(let word of words ){
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
    }

    palindromo(){
        let reversa: string=this.palabra.split("").reverse().join("").toLowerCase();
        reversa = reversa.replace(/\s/g,"");
        if(reversa == this.palabra.replace(/\s/g,"").toLowerCase()){
            return "Es palindromo";
        }else{
            return  "NO es palindromo";
        } 
    }

    contPalabras(){
        var contador:number=0;
        let words : Array<string> = this.palabra.split(" ");
        for(let word of words){
            if(words.length!=0)
                contador++
        }
        return contador;
    }
}