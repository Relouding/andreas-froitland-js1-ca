
const loader = document.getElementById("loader");

getData();

function getData() {
  fetch("https://restcountries-v1.p.rapidapi.com/region/europe", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "26dd97e7d7msh77b8da40c680875p16aaccjsnce874fc30713",
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        addCountry(data[i]);
      }
      loader.style.display = "none";
    })
    .catch((err) => {
      console.error(err);
    });
}

function addCountry(country) {
  const newRow = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = country.name;

  const subregionTd = document.createElement("td");
  subregionTd.textContent = country.subregion;

  const populationTd = document.createElement("td");
  populationTd.textContent = country.population;

  const detailsLinkTd = document.createElement("td");
  const detailsLink = document.createElement("a");
  detailsLink.textContent = "Open";
  detailsLink.href = "details.html?name=" + country.name;
  detailsLinkTd.append(detailsLink);

  newRow.append(nameTd, subregionTd, populationTd, detailsLinkTd);

  const tableBody = document.querySelector("#countries-table tbody");
  tableBody.appendChild(newRow);
}
