//Solução 1

function verificaPalindromo(string){
    if(!string) return;
    string.split("").reverse().join("")
    //split = irá separar a string letra por letra;
    //reverse = irá inverter todas as letras;
    //join = irá juntar todas as letras em uma única string novamente.
}


//Solução 2

function verificaPalindromo2(string){
    if(!string) return "String Inexistente"

    for(let i = 0; i<string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}
console.log(verificaPalindromo("ovo"));