import { createHtml } from "./createHtml";
import "/src/scss/main.scss";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// gissa talet
// const theNumber = 5003;
// let theGuess = 0;

// const form = document.createElement("form");
// const input = document.createElement("input");
// const guessButton = document.createElement("button");
// const p = document.createElement("p");
// const reply = document.createElement("section");

// input.id = "input"
// reply.id = "reply";
// guessButton.id = "button";
// guessButton.innerHTML = "Gissa";

// document.body.appendChild(form);
// form.appendChild(input);
// form.appendChild(guessButton);
// document.body.appendChild(reply);

// guessButton.addEventListener("click", (e) => {
//   theGuess = parseInt(input.value);
//   console.log(theGuess);
//   e.preventDefault();
//   if (theGuess !== isNaN) {
//     p.innerHTML = ""
//     reply.appendChild(p);
//     p.innerHTML = "Skriv en siffra";
//   }

//   if (theGuess < theNumber) {

//     p.innerHTML = ""
//     reply.appendChild(p);
//     p.innerHTML = "Det var ett lågt nummer";
//   }
//   if (theGuess > theNumber) {

//     p.innerHTML = ""
//     reply.appendChild(p);
//     p.innerHTML = "Det var ett högt nummer";
//   }
//   if (theGuess === theNumber) {

//     p.innerHTML = ""
//     reply.appendChild(p);
//     p.innerHTML = "Det var rätt nummer";
//   }

// })

// // klicka på en färg

// const colors = ["Rosa", "Blå", "Grön", "Gul"];

// const colorSection = document.createElement("section");
// const colorRow = document.createElement("section");
// const colorReply = document.createElement("p")
// const colorSectionReply = document.createElement("section");

// colorSection.id = "colorSection"
// colorRow.id = "colorRow";
// colorSectionReply.id = "colorSectionReply"
// colorSectionReply.classList.add("reply")

// document.body.appendChild(colorSection);
// colorSection.appendChild(colorRow);
// colorSection.appendChild(colorSectionReply);

// for (let i = 0; i < colors.length; i++) {
//   // const colorsClick = colors[i];
//   const colorBox = document.createElement("div");
//   colorBox.className = "colorBox";
//   colorRow.appendChild(colorBox);
//   colorBox.innerHTML = colors[i];
//   colorBox.id = (colors[i]).toLowerCase();

//   colorBox.addEventListener('click', () => {
//     handleColorsClick(colors[i])
//   })
//   colorBox.innerHTML = colors[i];
// }
// const handleColorsClick = (clickedColor) => {
//   console.log("Du valde färgen: ", clickedColor);
//   colorReply.innerHTML = "Du valde färgen: " + clickedColor;
//   colorReply.id = clickedColor.toLowerCase()
// colorSectionReply.classList.add("reply")

//   colorSectionReply.appendChild(colorReply)

// }

// Movies
export async function logMovies() {
  const response = await fetch(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );
  const movies = await response.json();

  createHtml(movies);
}

logMovies();
