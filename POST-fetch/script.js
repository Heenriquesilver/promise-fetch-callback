
async function inserirPost(){
    let html = document.getElementById('posts').innerHTML="Carregando"

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title:'titulo teste',
            body:'Corpo teste',
            userId: 5
        }),
        headers: {
            'content-type':'aplication/json'
        }
    });
    let json = await req.json();

    console.log(json)
}