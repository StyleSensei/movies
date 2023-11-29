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
async function logMovies() {
  const response = await fetch(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );

  const movies = await response.json();

  const header = document.createElement("h1");
  const movieWrapper = document.createElement("section");
  const movieContainer = document.createElement("section");
  const trailers = [
    "https://www.dailymotion.com/embed/video/x1daqie?autoplay=1",
    "https://www.dailymotion.com/embed/video/x1v36kg?autoplay=1",
    "https://www.dailymotion.com/embed/video/x864f6k?autoplay=1",
    "https://www.dailymotion.com/embed/video/x7ys69h?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8hri2i?autoplay=1",
    "https://www.dailymotion.com/embed/video/xh5m6v?autoplay=1",
    "https://www.dailymotion.com/embed/video/x7twi0g?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8i0iyq?autoplay=1",
    "https://www.dailymotion.com/embed/video/x81kbh6?autoplay=1",
    "https://www.dailymotion.com/embed/video/x72ym6l?autoplay=1",
    "https://www.dailymotion.com/embed/video/x82d1ta?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8ks1kh?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8nct2q?autoplay=1",
    "https://www.dailymotion.com/embed/video/x7xcuxb?autoplay=1",
    "https://www.dailymotion.com/embed/video/x2hqukw?autoplay=1",
    "https://www.dailymotion.com/embed/video/x7z5yw9?autoplay=1",
    "https://www.dailymotion.com/embed/video/x387nfx?autoplay=1",
    "https://www.dailymotion.com/embed/video/x81ktm7?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8p2t3b?autoplay=1",
    "https://www.dailymotion.com/embed/video/xv4tkw?autoplay=1",
    "https://www.dailymotion.com/embed/video/x82ltpn?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8hzd9w?autoplay=1",
    "https://www.dailymotion.com/embed/video/x4z57hw?autoplay=1",
    "https://www.dailymotion.com/embed/video/x3f9esi?autoplay=1",
    "https://www.dailymotion.com/embed/video/x7zdwz4?autoplay=1",
    "https://www.dailymotion.com/embed/video/x15tgvi?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8hspgj?autoplay=1",
    "https://www.dailymotion.com/embed/video/x7u5rhn?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8nqwwy?autoplay=1",
    "https://www.dailymotion.com/embed/video/x8m3rlp?autoplay=1",
    "https://www.dailymotion.com/embed/video/xnc1lu?autoplay=1",
    "https://www.dailymotion.com/embed/video/x59y8h8?autoplay=1",
  ];

  movieContainer.classList.add("movieContainer");
  movieWrapper.classList.add("movieWrapper");
  document.body.appendChild(header);
  document.body.appendChild(movieWrapper);
  header.innerHTML = "Movies";
  movieWrapper.appendChild(movieContainer);

  for (let i = 0; i < movies.length; i++) {
    const myMovies = movies[i];
    const movieTitle = document.createElement("p");
    const movieYear = document.createElement("p");
    const buttonContainer = document.createElement("div");
    const streamNowBtn = document.createElement("button");
    const trailerBtn = document.createElement("button");
    const movieDescriptionContainer = document.createElement("article");
    const movieDescription = document.createElement("p");
    const movieDescriptionShowMore = document.createElement("a");
    const moviePrice = document.createElement("p");
    const card = document.createElement("section");
    const movieImageContainer = document.createElement("image");
    const movieImage = document.createElement("img");
    const trailer = document.createElement("iframe");
    const closeBtn = document.createElement("button");
    const closeBtnImg = document.createElement("img");
    const playBtn = document.createElement("button");
    const playBtnImg = document.createElement("img");

    card.classList.add("card");
    card.id = "card" + (i + 1);
    movieTitle.classList.add("movieTitle");
    movieYear.classList.add("movieYear");
    buttonContainer.classList.add("buttonContainer");
    streamNowBtn.classList.add("streamNowBtn");
    trailerBtn.classList.add("trailerBtn");
    moviePrice.classList.add("moviePrice");
    movieDescriptionContainer.classList.add("movieDescription__container");
    movieDescription.classList.add("movieDescription");
    movieDescriptionShowMore.classList.add("movieDescription__showmore");
    movieImageContainer.classList.add("movieImageContainer");
    movieImage.classList.add("movieImage");
    movieImage.setAttribute("src", movies[i].imageUrl);
    trailer.setAttribute("src", trailers[i]);
    trailer.classList.add("trailer");
    trailer.controls = true;
    closeBtnImg.setAttribute("src", "src/media/close-svgrepo-com.svg");
    closeBtnImg.classList.add("closeBtnImg");
    closeBtn.classList.add("closeBtn");
    playBtnImg.setAttribute(
      "src",
      "src/media/play_circle_FILL0_wght400_GRAD0_opsz24.svg"
    );
    playBtnImg.classList.add("playBtnImg");
    playBtn.classList.add("playBtn");

    movieTitle.innerHTML = movies[i].name;
    movieYear.innerHTML = movies[i].year;
    streamNowBtn.innerHTML = "Stream now";
    trailerBtn.innerHTML = "Play trailer";
    movieDescription.innerHTML = movies[i].description;
    movieDescriptionShowMore.innerHTML = "Show more";
    moviePrice.innerHTML = movies[i].price + "kr";

    movieDescriptionShowMore.addEventListener("click", (e) => {
      e.target.classList.toggle("showFullDescription");
      movieDescriptionContainer.classList.toggle(
        "movieDescription__container--showfull"
      );
      movieDescription.classList.toggle("movieDescription--showfull");
      if (e.target.classList.contains("showFullDescription")) {
        e.target.innerHTML = "Show less";
      } else {
        e.target.innerHTML = "Show more";
      }
    });

    // movieImageContainer.addEventListener('touchstart', () => {
    //   // movieImageContainer.classList.add("card__mobileHover")
    //   movieImageContainer.classList.add("trailer")
    //   movieImage.classList.add("movieImage__hide")
    //   movieImageContainer.appendChild(trailer)
    // })
    // movieImageContainer.addEventListener('touchend', () => {
    //   // movieImageContainer.classList.remove("card__mobileHover")
    //   movieImageContainer.classList.remove("trailer")
    //   movieImage.classList.remove("movieImage__hide")
    //   movieImageContainer.removeChild(trailer)
    // })

    card.addEventListener("mouseenter", () => {
      if (!movieImageContainer.classList.contains("trailer")) {
        playBtn.classList.add("visible");
      }
    });
    card.addEventListener("mouseleave", () => {
      playBtn.classList.remove("visible");
    });

    playBtn.addEventListener("click", () => {
      movieImageContainer.classList.add("trailer");
      movieImage.classList.add("movieImage__hide");
      movieImage.classList.toggle("expand");
      movieImageContainer.classList.toggle("expand");
      card.classList.toggle("expand");
      trailer.classList.toggle("expand");
      card.appendChild(closeBtn);
      closeBtn.appendChild(closeBtnImg);
      movieImageContainer.appendChild(trailer);
      playBtn.classList.remove("visible");
    });

    movieImageContainer.addEventListener("click", () => {
      movieImageContainer.classList.add("trailer");
      movieImage.classList.add("movieImage__hide");
      movieImage.classList.toggle("expand");
      movieImageContainer.classList.toggle("expand");
      card.classList.toggle("expand");
      trailer.classList.toggle("expand");
      card.appendChild(closeBtn);
      closeBtn.appendChild(closeBtnImg);
      movieImageContainer.appendChild(trailer);
    });

    trailerBtn.addEventListener("click", () => {
      // movieImageContainer.classList.add("card__mobileHover")
      movieImageContainer.classList.add("trailer");
      movieImage.classList.add("movieImage__hide");
      movieImage.classList.toggle("expand");
      movieImageContainer.classList.toggle("expand");
      card.classList.toggle("expand");
      trailer.classList.toggle("expand");
      card.appendChild(closeBtn);
      closeBtn.appendChild(closeBtnImg);
      movieImageContainer.appendChild(trailer);
    });

    closeBtn.addEventListener("click", () => {
      // movieImageContainer.classList.remove("card__mobileHover")
      movieImageContainer.classList.remove("trailer");
      movieImage.classList.remove("movieImage__hide");
      movieImageContainer.removeChild(trailer);
      movieImage.classList.remove("movieImage__hide");
      movieImage.classList.toggle("expand");
      movieImageContainer.classList.toggle("expand");
      card.classList.toggle("expand");
      trailer.classList.toggle("expand");
      card.removeChild(closeBtn);
      playBtn.classList.remove("visible");
    });

    console.log(movies);
    movieContainer.appendChild(card);
    card.appendChild(movieTitle);
    card.appendChild(movieDescriptionContainer);
    buttonContainer.appendChild(movieYear);
    movieDescriptionContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(streamNowBtn);
    buttonContainer.appendChild(trailerBtn);
    movieDescriptionContainer.appendChild(movieDescription);
    movieDescriptionContainer.appendChild(movieDescriptionShowMore);
    movieDescriptionContainer.appendChild(moviePrice);
    card.appendChild(movieImageContainer);
    movieImageContainer.appendChild(movieImage);
    card.appendChild(playBtn);
    playBtn.appendChild(playBtnImg);
  }
  //   console.log(movies)
  // const selectedMovies = movies.map((value) => value);
  // console.log(Object.values(selectedMovies));
  //   console.log(selectedMovies)
}

logMovies();
