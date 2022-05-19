const dgram = require('dgram');
const readline = require('readline');

console.clear()

const server = dgram.createSocket('udp4');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Caso a porta não esteja disponível, fechar o servidor
server.on('error', (err) => {
    console.log(`server error: ${err}`);
    server.close();
});

server.on('message', (buffer, rinfo) => {
    const msg = buffer.toString();
    const address = server.address();

    console.log(`[${rinfo.address}:${rinfo.port}]: ${msg}`);
    terminal.question(`[${address.address}:${address.port}]`, (answer) => {
        server.send(answer, rinfo.port, rinfo.address);
    })
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Servidor rodando ${address.address}:${address.port}`);
});

server.bind(5000);