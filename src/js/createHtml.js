import { trailers } from './trailers';

export function createHtml(movies) {
  const title = document.createElement('h1');
  const headerElement = document.createElement('header');
  const movieWrapper = document.createElement('section');
  const movieContainer = document.createElement('section');

  movieContainer.classList.add('movieContainer');
  movieWrapper.classList.add('movieWrapper');
  headerElement.classList.add('header');
  title.innerHTML = 'Movies';
  document.body.appendChild(headerElement);
  headerElement.appendChild(title);
  document.body.appendChild(movieWrapper);
  movieWrapper.appendChild(movieContainer);

  const createCards = () => {
    for (let i = 0; i < movies.length; i++) {
      const movieTitle = document.createElement('p');
      const movieYear = document.createElement('p');
      const buttonContainer = document.createElement('div');
      const streamNowBtn = document.createElement('button');
      const trailerBtn = document.createElement('button');
      const movieDescriptionContainer = document.createElement('article');
      const movieDescription = document.createElement('p');
      const movieDescriptionShowMore = document.createElement('a');
      const moviePrice = document.createElement('p');
      const card = document.createElement('section');
      const movieImageContainer = document.createElement('image');
      const movieImage = document.createElement('img');
      const trailer = document.createElement('iframe');
      const closeBtn = document.createElement('button');
      const closeBtnImg = document.createElement('img');
      const playBtn = document.createElement('button');
      const playBtnImg = document.createElement('img');

      card.id = 'card' + (i + 1);
      card.classList.add('card');
      movieTitle.classList.add('movieTitle');
      movieYear.classList.add('movieYear');
      buttonContainer.classList.add('buttonContainer');
      streamNowBtn.classList.add('streamNowBtn');
      trailerBtn.classList.add('trailerBtn');
      moviePrice.classList.add('moviePrice');
      movieDescriptionContainer.classList.add('movieDescription__container');
      movieDescription.classList.add('movieDescription');
      movieDescriptionShowMore.classList.add('movieDescription__showmore');
      movieImageContainer.classList.add('movieImageContainer');
      movieImage.classList.add('movieImage');
      playBtnImg.classList.add('playBtnImg');
      playBtn.classList.add('playBtn');
      trailer.classList.add('trailer');
      closeBtn.classList.add('closeBtn');
      closeBtnImg.classList.add('closeBtnImg');

      movieImage.setAttribute('src', movies[i].imageUrl);
      trailer.setAttribute('src', trailers[i]);
      trailer.controls = true;
      closeBtnImg.setAttribute('src', './assets/media/close-svgrepo-com.svg');
      playBtnImg.setAttribute(
        'src',
        './assets/media/play_circle_FILL0_wght400_GRAD0_opsz24.svg'
      );

      movieTitle.innerHTML = movies[i].name;
      movieYear.innerHTML = movies[i].year;
      streamNowBtn.innerHTML = 'Stream now';
      trailerBtn.innerHTML = 'Play trailer';
      movieDescription.innerHTML = movies[i].description;
      movieDescriptionShowMore.innerHTML = 'Show more';
      moviePrice.innerHTML = movies[i].price + 'kr';

      movieDescriptionShowMore.addEventListener('click', (e) => {
        e.target.classList.toggle('showFullDescription');
        movieDescriptionContainer.classList.toggle(
          'movieDescription__container--showfull'
        );
        movieDescription.classList.toggle('movieDescription--showfull');
        if (e.target.classList.contains('showFullDescription')) {
          e.target.innerHTML = 'Show less';
        } else {
          e.target.innerHTML = 'Show more';
        }
      });

      card.addEventListener('mouseenter', () => {
        if (!movieImageContainer.classList.contains('trailer')) {
          playBtn.classList.add('visible');
        }
      });
      card.addEventListener('mouseleave', () => {
        playBtn.classList.remove('visible');
      });

      const showTrailer = () => {
        movieImageContainer.classList.add('trailer');
        movieImage.classList.add('movieImage__hide');
        movieImage.classList.toggle('expand');
        movieImageContainer.classList.toggle('expand');
        card.classList.toggle('expand');
        trailer.classList.toggle('expand');
        card.appendChild(closeBtn);
        closeBtn.appendChild(closeBtnImg);
        movieImageContainer.appendChild(trailer);
        playBtn.classList.remove('visible');
      };

      playBtn.addEventListener('click', () => {
        showTrailer();
      });

      movieImageContainer.addEventListener('click', () => {
        showTrailer();
      });

      trailerBtn.addEventListener('click', () => {
        showTrailer();
      });

      closeBtn.addEventListener('click', () => {
        // movieImageContainer.classList.remove("card__mobileHover")
        movieImageContainer.classList.remove('trailer');
        movieImage.classList.remove('movieImage__hide');
        movieImageContainer.removeChild(trailer);
        movieImage.classList.remove('movieImage__hide');
        movieImage.classList.toggle('expand');
        movieImageContainer.classList.toggle('expand');
        card.classList.toggle('expand');
        trailer.classList.toggle('expand');
        card.removeChild(closeBtn);
        playBtn.classList.remove('visible');
      });

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
  };
  createCards();
}

