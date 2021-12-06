import {createProfileTemplate} from './view/profile.js';

import {createSiteNavTemplate} from './view/site-nav.js';
import {createSortingTemplate} from './view/sorting.js';

import {createFilmsWrapperTemplate} from './view/films-wrapper.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createShowMoreTemplate} from './view/show-more.js';

import {createLoadingTemplate} from './view/loading.js';

import {createFooterStatisticsTemplate} from './view/footer-statistics.js';

// import {createPopupTemplate} from './view/popup.js';

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const FILMS_COUNT = 5;

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

renderTemplate(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteMainElement, createSiteNavTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSortingTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsWrapperTemplate(), RenderPosition.BEFOREEND);

const siteFilmsElement = document.querySelector('.films');

renderTemplate(siteFilmsElement, createFilmsListTemplate(), RenderPosition.BEFOREEND);

const siteFilmsWrapperElement = document.querySelector('.films-list__container');
const siteFilmsListElement = document.querySelector('.films-list');

for (let i = 0; i < FILMS_COUNT; i++) {
  renderTemplate(siteFilmsWrapperElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteFilmsListElement, createShowMoreTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilmsListElement, createLoadingTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteFooterStatisticsElement, createFooterStatisticsTemplate(), RenderPosition.BEFOREEND);

// renderTemplate(siteBodyElement, createPopupTemplate(), RenderPosition.BEFOREEND);
