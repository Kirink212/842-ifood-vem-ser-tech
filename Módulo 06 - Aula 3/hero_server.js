const http = require("http");
const fs = require("fs");

const convert_hero_to_string = (hero) => {
    return `<li>${hero.nome} (${hero.nome_real})</li>`;
}

const readHeroes = (callback) => {
    return fs.promises.readFile("./super_herois.json")
            .then((buffer) => {
                const heroes = JSON.parse(buffer.toString());

                callback(heroes);
            })
            .catch((error) => {
                console.error(error);
                res.end("Não foi possível ler o JSON...");
            });
}

const server = http.createServer((req, res) => {
    const {url, method} = req;

    console.log(url, method);

    if (url == "/") {
        if (method == "GET") {
            return readHeroes((heroes) => {
                res.setHeader('Content-Type', 'text/html;charset=utf-8');

                //// Outra forma de fazer a mesma coisa:
                // let string_heroes = "";
                // for(let hero of heroes) {
                //     string_heroes += `<li>${hero.nome} (${hero.nome_real})</li>`;
                // }

                res.end(`
                    <h1>Lista de Super-Heróis</h1>

                    <ul>
                        ${heroes.data.reduce((prev_str, hero) => {
                            return prev_str + convert_hero_to_string(hero);
                        }, "")}
                    </ul>
                `);
                // console.log(buffer.toJSON()); -> não funcionou do jeito que a gente queria
            });
        } else if (method == "POST") {
            return readHeroes((heroes) => {
                req.on('data', new_hero => {
                    new_hero = JSON.parse(new_hero);
                    new_hero.id = heroes.last_id + 1;
                    heroes.data.push(new_hero);
                    heroes.last_id = new_hero.id;
                    
                    fs.promises.writeFile("./super_herois.json", JSON.stringify(heroes));

                    res.end(`Posted ${JSON.stringify(new_hero)}!`);
                });
            })
        } else if (method == "PUT") {
            return readHeroes((heroes) => {
                req.on('data', update_hero => {
                    update_hero = JSON.parse(update_hero);
                    
                    const id = update_hero.id;

                    const hero_idx = heroes.data.findIndex((hero) => {
                        return hero.id == id;
                    })

                    heroes.data[hero_idx].nome_real = update_hero.nome_real;
                    
                    fs.promises.writeFile("./super_herois.json", JSON.stringify(heroes));

                    res.end(`Updated ${JSON.stringify(update_hero)}!`);
                });
            })
        } else if (method == "DELETE"){
            return readHeroes((heroes) => {
                req.on('data', update_hero => {
                    update_hero = JSON.parse(update_hero);
                    
                    const id = update_hero.id;

                    // heroes = heroes.filter((hero) => {
                    //     return hero.id != id;
                    // });

                    const hero_idx = heroes.data.findIndex((hero) => {
                        return hero.id == id;
                    })

                    if (hero_idx != -1) {
                        heroes.data.splice(hero_idx, 1);
                        fs.promises.writeFile("./super_herois.json", JSON.stringify(heroes));

                        return res.end(`Deleted ${JSON.stringify(update_hero)}!`);
                    }

                    res.writeHead(404);
                    res.end('HERO NOT FOUND');
                });
            })
        }
    }

    res.writeHead(404);
    return res.end('PAGE NOT FOUND');
});

server.listen(8080, 'localhost', () => {
    const address = server.address();
    console.log(`Servidor rodando ${address.address}:${address.port}`);
});