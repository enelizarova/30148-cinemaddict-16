import {getRandomInteger, humanizeDate, truncate} from '../utils.js';

export const createFilmCardTemplate = (film) => {
  const {title, rating, poster, releaseDate, filmDuration, description, commentsCount, genre, isInWatchlist, isWatched, isFavorite} = film;

  const release = releaseDate !== null
    ? humanizeDate(releaseDate, 'DD MMMM YYYY')
    : '';

  const duration = filmDuration !== null
    ? humanizeDate(filmDuration, 'HH[h] mm[m]')
    : '';

  const DESCRIPTION_SENTENCE_COUNT = 5;
  const randomIndex = getRandomInteger(0, description.length - 1);
  const filmDescription = [];
  for (let i = 0; i < getRandomInteger(1, DESCRIPTION_SENTENCE_COUNT); i++) {
    filmDescription.push(description[randomIndex]);
  }

  const inWatchlistClass = isInWatchlist
    ? 'film-card__controls-item--active'
    : '';

  const watchedClass = isWatched
    ? 'film-card__controls-item--active'
    : '';

  const favoriteClass = isFavorite
    ? 'film-card__controls-item--active'
    : '';

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${release}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${truncate(filmDescription.join(' '), 139)}</p>
        <span class="film-card__comments">${commentsCount}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${inWatchlistClass}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${watchedClass}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${favoriteClass}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
