JSON.parse()

'{"nome": "henrique", "idade": 90}' //formato JSON

ao fazer uma requisição, recebemos o resultado em forma de string como no exemplo acima. então para transformar essa string em um obj JSON ultilzamos o parse dessa forma : JSON.parse('{"nome": "henrique", "idade": 90}')

-----------------------
JSON.stringify()

JSON.stringify() faz o posto do parse, transforma um objeto normal em uma string na sintaxe do JSON.