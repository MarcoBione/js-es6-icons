/*
Ciao Ragazzi,
Esercizio di oggi:
cartella/repo js-es6-icons

Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/

//array of contents
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

function createAnimalCards(icons) {
    const card = `
    <div class="card text-center">
      <div class="card-body">
        <h2 class="${icons.prefix}${icons.family} ${icons.prefix}${icons.name} _myanimalcards-icons" alt="${icons.type}"></h2>
        <h5 class="card-title _myanimalcards-icons">${icons.name}</h5>
      </div>
    </div>
    `;
    return card;
}

function createVegetableCards(icons) {
    const card = `
    <div class="card text-center">
      <div class="card-body">
        <h2 class="${icons.prefix}${icons.family} ${icons.prefix}${icons.name} _myavegetablecards-icons" alt="${icons.type}"></h2>
        <h5 class="card-title _myavegetablecards-icons">${icons.name}</h5>
      </div>
    </div>
    `;
    return card;
}

function createUserCards(icons) {
    const card = `
    <div class="card text-center">
      <div class="card-body">
        <h2 class="${icons.prefix}${icons.family} ${icons.prefix}${icons.name} _myusercards-icons" alt="${icons.type}"></h2>
        <h5 class="card-title _myusercards-icons">${icons.name}</h5>
      </div>
    </div>
    `;
    return card;
}

function application() {

    //load app container to script
    const app = document.querySelector('.app');
    //console.log('app');
    //add style to app container
    app.classList.add('wrapper');

    //create header
    const header = document.createElement('header');
    header.innerHTML += `
    <div class="container"
        <!-- title -->
        <h1 class="_mytitle">Choose icon!</h1>
        <!-- /title -->
        <!-- options -->
        <select class="form-select _myselectbar py-0">
            <option value="all" selected class="_myoptions">All</option>
            <option value="vegetables" class="_myoptions">Vegetables</option>
            <option value="Users" class="_myoptions">Users</option>
        </select>
        <!-- /options --
    </div>
    `;
    //append header
    document.querySelector('.app').appendChild(header);

    //create a container for center the cards created
    const box = document.createElement('div');
    //add container bootstrap class to div
    box.classList.add('container', 'd-flex', 'flex-wrap', 'px-2', 'py-4');
    //append 'div' to app general container
    app.appendChild(box);

    //create three different array
    const animalArray = [];
    const vegetableArray = [];
    const userArray = [];
    //cycle for load icons array to new three different array
    for(let y = 0; y < icons.length; y++){
        if((icons[y].type == 'animal')){
            animalArray.push(icons[y]);
        }else if (icons[y].type == 'vegetable'){
            vegetableArray.push(icons[y]);
        }else{
            userArray.push(icons[y]);
        }
    };
    //animal
    console.log(animalArray);
    //vegetable
    console.log(vegetableArray);
    //user
    console.log(userArray);

    //load animal array of elements to display
    let animalCards = '';
    for (let i = 0; i < animalArray.length; i++) {
        const template = createAnimalCards(animalArray[i]);
        animalCards += template;
    }
    //console.log(content);
    //renderizzo tutte le cards
    box.innerHTML += animalCards;

    //load vegetable array of elements to display
    let vegetableCards = '';
    for (let i = 0; i < vegetableArray.length; i++) {
        const template = createVegetableCards(vegetableArray[i]);
        vegetableCards += template;
    }
    //console.log(content);
    //renderizzo tutte le cards
    box.innerHTML += vegetableCards;

    //load vegetable array of elements to display
    let userCards = '';
    for (let i = 0; i < userArray.length; i++) {
        const template = createUserCards(userArray[i]);
        userCards += template;
    }
    //console.log(content);
    //renderizzo tutte le cards
    box.innerHTML += userCards;



    const allIcons = document.querySelectorAll('h2')
    //console.log(allIcons);
    for(let x = 0; x < allIcons.length; x++){
        if(allIcons[x].type == 'animal'){
            //console.log(allIcons[x]);
        }
    }
    

}

application();