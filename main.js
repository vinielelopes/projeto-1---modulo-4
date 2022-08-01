import readLineSync from 'readline-sync';

let usuario = " "
let propriedades = []

while (usuario !== "sair" ){
    usuario = readLineSync.question("Digite uma propriedade CSS e ao digitar 'sair' retornaremos uma lista ordenada:").toLowerCase();
    if (usuario == "sair"){
        break;
    } else {
        propriedades.push(usuario);
    }

}
console.log(propriedades.sort().join(', '));