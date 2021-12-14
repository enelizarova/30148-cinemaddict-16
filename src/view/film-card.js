import {getRandomInteger, humanizeDate} from '../utils.js';
export const createFilmCardTemplate = (film) => {
  const {title, rating, poster, releaseDate, duration, commentDdate, description} = film;
  const date = commentDdate !== null
    ? humanizeDate(commentDdate)
    : '';
  const DESCRIPTION_SENTENCE_COUNT = 5;
  const randomIndex = getRandomInteger(0, description.length - 1);
  const tata = [];
  for (let i = 0; i < getRandomInteger(1, DESCRIPTION_SENTENCE_COUNT); i++) {
    tata.push(description[randomIndex]);
  }
  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${tata.join(' ')}</p>
        <span class="film-card__comments">${date}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
