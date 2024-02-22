//////////////////////////////////////////////////

const table = document.querySelector("table");
const searchButton = document.querySelector("#search");
const carTypeField = document.querySelector("#types");
const carBrandField = document.querySelector("#brands");
const carModelField = document.querySelector("#model");
const carDoorField = document.querySelector("#doors");
const carGasTypeField = document.querySelector("#gasType");
const carColorField = document.querySelector("#color");
const carHorsepowerField = document.querySelector("#horsepowerRange");
const newOption = document.querySelector("#new_option");
const oldOption = document.querySelector("#old_option");

function renderData(data) {
  table.innerHTML = `
    <style>
      th, td {
        border: 1px solid black;
      }
    </style>
    <tr>
      <th>Type</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Doors</th>
      <th>Gas Type</th>
      <th>Color</th>
      <th>Is New</th>
      <th>Horsepower</th>
    </tr>
  `;

  data.forEach((car) => {
    table.innerHTML += `
      <tr>
        <td>${car.type}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.doors}</td>
        <td>${car.gasType}</td>
        <td>${car.color}</td>
        <td>${car.isNew}</td>
        <td>${car.horsepower}</td>
      </tr>
    `;
  });
}

function filterData() {
  fetch(
    "https://raw.githubusercontent.com/faca69/Domasno/main/CARS%20JSON%20FILE/cars.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter(
        (car) =>
          (carTypeField.value === "" || car.type === carTypeField.value) &&
          (carBrandField.value === "" || car.brand === carBrandField.value) &&
          (carModelField.value === "" || car.model === carModelField.value) &&
          (carDoorField.value === "" ||
            parseInt(car.doors) === parseInt(carDoorField.value)) &&
          (carGasTypeField.value === "" ||
            car.gasType === carGasTypeField.value) &&
          (carColorField.value === "" || car.color === carColorField.value) &&
          (!newOption.checked || car.isNew === true) &&
          (!oldOption.checked || car.isNew === false) &&
          (carHorsepowerField.value === "" ||
            parseInt(car.horsepower) === parseInt(carHorsepowerField.value))
      );

      renderData(filteredData);
    });
}

filterData();

carTypeField.addEventListener("change", filterData);
carBrandField.addEventListener("change", filterData);
carModelField.addEventListener("change", filterData);
carDoorField.addEventListener("change", filterData);
carGasTypeField.addEventListener("change", filterData);
carColorField.addEventListener("change", filterData);
carHorsepowerField.addEventListener("change", filterData);
newOption.addEventListener("change", filterData);
oldOption.addEventListener("change", filterData);
