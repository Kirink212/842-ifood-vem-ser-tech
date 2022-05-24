const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
    let { url, method } = request;
    console.log({ url, method });

    const split_resp = url.split("?");
    const params_string = split_resp[1];
    let params;

    url = split_resp[0];
    
    if (params_string) {
        params = querystring.parse(params_string);
        console.log(params);
    }

    if (method == "GET") {
        if (url == '/') {
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.writeHead(200);
            return response.end('Bem vindo à página inicial!');
        }

        if (url == '/professores') {
            response.setHeader('Content-Type', 'application/json;charset=utf-8');
            response.writeHead(200);
            return response.end(JSON.stringify([
                { nome: 'Luís Fernando', xp: 10000 },
                { nome: 'Ronaldo', xp: -50 },
            ]));
        }

        if (url == '/boladona') {
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            return fs.promises.readFile('./teste.html')
                .then((content) => {
                    response.writeHead(200);
                    response.end(content);
                })
                .catch((error) => {
                    response.writeHead(500);
                    console.error(error);
                    response.end('Não foi possível carregar a página HTML...');
                })
        }

        if (url == '/nao-tao-boladona') {
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.writeHead(200);
            return response.end(`
                <h1>Bem-vindo à página Não Tão Boladona!</h1>
                <h2>${params? params.teste : 'Sem conteúdo, irmão...'}</h2>
            `);
        }
    }

    response.writeHead(404);
    return response.end('PAGE NOT FOUND');
});

server.listen(8080, 'localhost', () => {
    const address = server.address();
    console.log(`Servidor rodando ${address.address}:${address.port}`);
});