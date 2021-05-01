
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("name");

const loader = document.getElementById("loader");

const details = document.getElementById("details");

const errorDisplay = document.getElementById("errors");

const name = document.getElementById("name");
const capital = document.getElementById("capital");
const currencies = document.getElementById("currencies");
const subregion = document.getElementById("subregion");
const population = document.getElementById("population");
const area = document.getElementById("area");

if (countryName) {
  document.title = countryName;
  getDetails(countryName);
} else {
  setErrorDisplay();
  showErrors(new Error("No country name provided!"));
}

function getDetails(countryName) {
  fetch("https://restcountries-v1.p.rapidapi.com/name/" + countryName, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "26dd97e7d7msh77b8da40c680875p16aaccjsnce874fc30713",
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid country name!");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      fillDetails(data[0]);
      showDetails();
    })
    .catch((err) => {
      setErrorDisplay();
      showErrors(err);
    });
}

function fillDetails(data) {
  const nameTextnode = document.createTextNode(" " + data.name);
  name.appendChild(nameTextnode);

  const capitalTextnode = document.createTextNode(" " + data.capital);
  capital.appendChild(capitalTextnode);

  const currenciesTextnode = document.createTextNode(
    " " + data.currencies.toString()
  );
  currencies.appendChild(currenciesTextnode);

  const subregionTextnode = document.createTextNode(" " + data.subregion);
  subregion.appendChild(subregionTextnode);

  const populationTextnode = document.createTextNode(" " + data.population);
  population.appendChild(populationTextnode);

  const areaTextnode = document.createTextNode(" " + data.area + " km²");
  area.appendChild(areaTextnode);
}

function showErrors(error) {
  const errorTextNode = document.createTextNode("Error: " + error.message);
  errorDisplay.appendChild(errorTextNode);
}

function setErrorDisplay() {
  loader.style.display = "none";
  details.style.display = "none";
}

function showDetails() {
  loader.style.display = "none";
  details.style.display = "block";
}
