async function getPokemons(callback) {
    // Utilizando async/await
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const json = await response.json();
    
    callback(json.results);

    // // Utilizando promises
    // fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
    //     return response.json();
    // }).then((json) => {
    //     callback(json.results);
    // }).catch((error) => {
    //     console.log(error);
    // });


    // // Simulando o uso de callbacks
    // setTimeout(() => {
    //     const pokemons = [
    //         {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
    //         {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
    //         {"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},
    //         {"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},
    //         {"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},
    //         {"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},
    //         {"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},
    //         {"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},
    //         {"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},
    //         {"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},
    //         {"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},
    //         {"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},
    //         {"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},
    //         {"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},
    //         {"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},
    //         {"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},
    //         {"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},
    //         {"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},
    //         {"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},
    //         {"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}
    //     ];
    //     callback(pokemons);
    // }, 2000);
}

function addPokeNamesToDom(pokemons) {
    const poke_names = pokemons.map((pk) => pk.name);
    // const poke_div = document.getElementById("pokemons-list");

    for (p_name of poke_names) {
        window["pokemons-list"].innerHTML += `<p>${p_name}</p>`;
    }
}

getPokemons(addPokeNamesToDom);

// console.log("Passei aqui!");

// setTimeout(()=> {
//     console.log("Apareci!");
// }, 2000);

// for (let i=0;i<2000; i++) {
//     console.log("Testando...");
// }

// setTimeout(()=> {
//     console.log("Brotei!");
// }, 2000);

function pedirPizza(callback) {
    setTimeout(()=>{
        console.log(`Minha pizza está pronta.`);
        callback();
    }, 4000);
}

function comerPizza(callback) {
    setTimeout(()=>{
        console.log('Acabaram de comer. Vamos para o show.');
        callback();
    }, 2000);
}

function pedirUber(destino, callback) {
    setTimeout(()=>{
        console.log(`O Uber chegou, vamos para ${destino}!`);
        callback();
    }, 3000);
}

function viajarAteShow(callback) {
    setTimeout(()=>{
        console.log('Chegamos, vamos aproveitar o show!');
        callback();
    }, 5000);
}

function ficarDoidaoNoShow(callback) {
    setTimeout(()=>{
        console.log('O show acabou, vamos embora!');
        callback();
    }, 2000);
}

function irParaCasa() {
    setTimeout(()=>{
        console.log('Cheguei em casa. A mimir...');
    }, 3000);
}

// Callback HELL!!!!!!!
pedirPizza(() => {
    comerPizza(() => {
        pedirUber("o show", () => {
            viajarAteShow(() => {
                ficarDoidaoNoShow(() => {
                    pedirUber("a casa", () => {
                        irParaCasa();
                    });
                });
            });
        });
    });
});