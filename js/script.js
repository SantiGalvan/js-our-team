console.log('JS OK');


// - 1 Recupero gli elementi dal DOM
const cardBox = document.getElementById('card-box');

// - 2 Creo l'array di oggetti
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// - 3 Creo la variabile di appoggio
let items = '';

// - 4 Creo un ciclo for per girare all'interno dell'array
for (let member of teamMembers) {

    // - 5 Creo un ciclo for in per girare all'interno degli oggetti
    for (let key in member) {

        // - 6 Stampo in console le informazioni
        console.log(member[key])
    }

    // - 7 Creo la stringa delle col con le card all'interno
    items += `
            <div class="col">
              <div class="card">
                <img src="img/${member['image']}" class="card-img-top" alt="">
                <div class="card-body text-center">
                    <h3 class="card-title">${member['name']}</h3>
                    <p class="card-text">${member['role']}</p>
                </div>
              </div>
            </div>`;
}

// - 8 Stampo in pagina 
cardBox.innerHTML = items;