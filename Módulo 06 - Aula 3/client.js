const dgram = require('dgram');
const readline = require('readline');

console.clear()

const client = dgram.createSocket('udp4');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question(`[Boas-vindas]`, (answer) => {
    client.send(answer, 5000, 'localhost');
});

client.on('message', (buffer, rinfo) => {
    const msg = buffer.toString();
    const address = client.address();

    console.log(`[${rinfo.address}:${rinfo.port}]: ${msg}`);
    terminal.question(`[${address.address}:${address.port}]`, (answer) => {
        client.send(answer, 5000, 'localhost');
    });
});