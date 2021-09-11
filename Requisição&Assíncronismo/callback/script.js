/*Function callback aguarda uma ação para depois retornar 
a chamada da função*/ 

function alertar(){
    console.log('Funcionou')
}

let nome ='Henrique'
setTimeout(alertar, 2000);
let sobrenome = 'Oliveira'

console.log(`NOME COMPLETO: ${nome} ${sobrenome}`)