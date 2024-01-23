

const btn = document.querySelector('button');
const table = document.querySelector('table');
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');

let counter = 1;

const fetchAndPrintPlanets = (counter) => {
    const url = `https://swapi.dev/api/planets/?page=${counter}`;

    fetch(url)
        .then((data) => data.json())
        .then((res) => {
            printPlanets(table, res);
        });
};

const printPlanets = (table, res) => {

    table.style.display = 'block';


    


    table.innerHTML = `
        <tr>
            <td>Planet Name</td>
            <td>Population</td>
            <td>Climate</td>
            <td>Gravity</td>
        </tr>
    `;

    for (let planet of res.results) {
        table.innerHTML += `
            <tr>
                <td>${planet.name}</td>
                <td>${planet.population}</td>
                <td>${planet.climate}</td>
                <td>${planet.gravity}</td>
            </tr>
        `;
    }
};

btn.addEventListener('click', () => fetchAndPrintPlanets(counter));

nextBtn.addEventListener('click', () => {
    counter++;
    fetchAndPrintPlanets(counter);
});

backBtn.addEventListener('click', () => {
    if (counter > 1) {
        counter--;
        fetchAndPrintPlanets(counter);
    }
});


