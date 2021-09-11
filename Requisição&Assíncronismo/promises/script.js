

function pegarTemperatura(){
    return new Promise(function(resolve, reject) {
        console.log('pegando temperatura...');

        setTimeout(function(){
            resolve('40 Graus');
        }, 2000);
    });
}


let temp = pegarTemperatura();

temp.then( (resultado) => {
    
    console.log(`TEMPERATURA: ${resultado}`)
});
    temp.catch( (error) => {
        console.log('Deu erro');
    });
    

