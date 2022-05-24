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

// Chamadas assíncronas em sequência

// Utilizando somente callbacks
function asyncCallModel(message, time, callback = () => {}) {
    setTimeout(()=>{
        console.log(message);
        callback();
    }, time);
}

const pedirPizza = asyncCallModel.bind(this, "Minha pizza está pronta.", 4000);
const comerPizza = asyncCallModel.bind(this, "Acabaram de comer. Vamos para o show.", 2000);
const viajarAteShow = asyncCallModel.bind(this, "Chegamos, vamos aproveitar o show!", 5000);
const ficarDoidaoNoShow = asyncCallModel.bind(this, "O show acabou, vamos embora!", 2000);
const irParaCasa = asyncCallModel.bind(this, "Cheguei em casa. A mimir...", 3000);

function pedirUber(destino, callback) {
    asyncCallModel(`O Uber chegou, vamos para ${destino}!`, 3000, callback);
}

// Callback HELL!!!!!!!
// pedirPizza(() => {
//     comerPizza(() => {
//         pedirUber("o show", () => {
//             viajarAteShow(() => {
//                 ficarDoidaoNoShow(() => {
//                     pedirUber("a casa", () => {
//                         irParaCasa();
//                     });
//                 });
//             });
//         });
//     });
// });

// Utilizando Promises
function asyncCallModelPromise(message, time) {
    return new Promise((resolve, reject) => {
        const erro = Math.random() > 0.7;
        if (erro) {
            reject("Deu ruim, abortar missão!");
            return;
        }
        setTimeout(()=>{
            console.log(message);
            resolve();
        }, time);
    })
}

const pedirPizzaPromise = asyncCallModelPromise.bind(this, "Minha pizza está pronta.", 4000);
const comerPizzaPromise = asyncCallModelPromise.bind(this, "Acabaram de comer. Vamos para o show.", 2000);
const viajarAteShowPromise = asyncCallModelPromise.bind(this, "Chegamos, vamos aproveitar o show!", 5000);
const ficarDoidaoNoShowPromise = asyncCallModelPromise.bind(this, "O show acabou, vamos embora!", 2000);
const irParaCasaPromise = asyncCallModelPromise.bind(this, "Cheguei em casa. A mimir...", 3000);

function pedirUberPromise(destino) {
    return asyncCallModelPromise(`O Uber chegou, vamos para ${destino}!`, 3000);
}

// pedirPizzaPromise()
//     .then(() => comerPizzaPromise())
//     .then(()=> pedirUberPromise("o show"))
//     .then(() => viajarAteShowPromise())
//     .then(() => ficarDoidaoNoShowPromise())
//     .then(() => pedirUberPromise("a casita"))
//     .then(() => irParaCasaPromise())
//     .catch((erro) => console.error(erro));

// (async function runItinerary() {
//     try {
//         await pedirPizzaPromise();
//         await comerPizzaPromise();
//         await pedirUberPromise("o show");
//         await viajarAteShowPromise();
//         await ficarDoidaoNoShowPromise();
//         await pedirUberPromise("a casita");
//         await irParaCasaPromise();
//     } catch (erro) {
//         console.error(erro);
//     }
// })();

// runItinerary();

const fazerMassaDoBoloPromise = asyncCallModelPromise.bind(this, "Minha massa está pronta.", 5000);
const fazerCoberturaDoBoloPromise = asyncCallModelPromise.bind(this, "Minha cobertura está pronta.", 4000);
const fazerRecheioDoBoloPromise = asyncCallModelPromise.bind(this, "Meu recheio está pronto.", 6000);

// Promise.all([
//     fazerMassaDoBoloPromise(),
//     fazerCoberturaDoBoloPromise(),
//     fazerRecheioDoBoloPromise()
// ]).then((results) => console.log(results))
// .catch((erro) => console.error(erro));

const relampagoMarquinhosPromise = asyncCallModelPromise.bind(this, "Catchau!", 5000);
const dominicTorettoPromise = asyncCallModelPromise.bind(this, "It's all about family.", 4000);
const speedRacerPromise = asyncCallModelPromise.bind(this, "Speed Racer, GO!", 6000);

const MercurioPromise = asyncCallModelPromise.bind(this, "O da FOX ou o da Marvel?", 3000);
const TheFlashPromise = asyncCallModelPromise.bind(this, "Só o Flash...", 3000);
const SonicPromise = asyncCallModelPromise.bind(this, "Gotta go fast!", 2000);

// Promise.race([
//     relampagoMarquinhosPromise(),
//     dominicTorettoPromise(),
//     speedRacerPromise()
// ]).then(() => console.log("O vencedor foi o acima!"));


Promise.race([
    MercurioPromise(),
    TheFlashPromise(),
    SonicPromise()
]).then(() => console.log("O vencedor foi o acima!"))
.catch(erro => console.error(erro));