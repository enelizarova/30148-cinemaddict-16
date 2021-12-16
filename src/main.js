import {createProfileTemplate} from './view/profile.js';

import {createSiteNavTemplate} from './view/site-nav.js';
import {createSortingTemplate} from './view/sorting.js';

import {createFilmsWrapperTemplate} from './view/films-wrapper.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createShowMoreTemplate} from './view/show-more.js';

import {createLoadingTemplate} from './view/loading.js';

import {createFooterStatisticsTemplate} from './view/footer-statistics.js';

import {generateFilm} from './mock/films';
import {generateFilter} from './mock/filters.js';
import {generateComments} from './mock/comments.js';

import {createPopupTemplate} from './view/popup/popup.js';

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const FILMS_COUNT = 25;
const FILMS_COUNT_PER_STEP = 5;

// const COMMENTS_COUNT = 4;

const films = Array.from({length: FILMS_COUNT}, generateFilm);

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const filters = generateFilter(films);
const comments = [];
for (let i = 0; i < 4; i++) {
  comments.push(generateComments());
}

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

renderTemplate(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteMainElement, createSiteNavTemplate(filters), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSortingTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsWrapperTemplate(), RenderPosition.BEFOREEND);

const siteFilmsElement = document.querySelector('.films');

renderTemplate(siteFilmsElement, createFilmsListTemplate(), RenderPosition.BEFOREEND);

const siteFilmsWrapperElement = document.querySelector('.films-list__container');
const siteFilmsListElement = document.querySelector('.films-list');

for (let i = 0; i < Math.min(films.length, FILMS_COUNT_PER_STEP); i++) {
  renderTemplate(siteFilmsWrapperElement, createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
}

if (films.length > FILMS_COUNT_PER_STEP) {
  let renderedFilmCount = FILMS_COUNT_PER_STEP;

  renderTemplate(siteFilmsListElement, createShowMoreTemplate(), RenderPosition.BEFOREEND);

  const loadMoreButton = siteFilmsListElement.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FILMS_COUNT_PER_STEP)
      .forEach((film) => renderTemplate(siteFilmsWrapperElement, createFilmCardTemplate(film), RenderPosition.BEFOREEND));

    renderedFilmCount += FILMS_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      loadMoreButton.remove();
    }
  });
}
renderTemplate(siteFilmsListElement, createLoadingTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteFooterStatisticsElement, createFooterStatisticsTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteBodyElement, createPopupTemplate(films[0], comments), RenderPosition.BEFOREEND);
