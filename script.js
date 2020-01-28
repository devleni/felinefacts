'use strict';

const showFact = document.getElementById("show-fact");
const factButton = document.getElementById("fact-button");

const getCatFact = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      response.json()
      .then((data) => {
        const catFact = data.fact;
        showFact.innerHTML = catFact;      
      })
    })
    .catch((error => {
      console.log(error)
    }));
};

getCatFact();

factButton.addEventListener("click", getCatFact);