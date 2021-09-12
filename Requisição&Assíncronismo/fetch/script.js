function loadPosts(){
    document.getElementById('posts').innerHTML='Carregando...'
    //a função fetch() retorna uma promisse. Perceba que o primeiro parametro é uma url que veio de uma API.
    //o segundo parametro do fetch por padrão é o method "GET", mas posso alterar para o method "POST".
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( resultado => {
           return resultado.json();
        })
        .then( json => {
            makePage(json);
        })
        .catch( error => {
            console.log('Deu erro!')
        });
}
 
function makePage(list){
    let html = '';

    for(let i in list){
        html += `<h3> ${list[i].title}</h3>`;
        html += `${list[i].body} </br>`
        html += '<hr/ >'
    }
    document.getElementById('posts').innerHTML = html;
}
