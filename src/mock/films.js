import { getRandomInteger, generateDate } from '../utils.js';

const generateTitle = () => {
  const titles = [
    'The Dance of Life',
    'Sagebrush Trail',
    'The Man with the Golden Arm',
    'Santa Claus Conquers the Martians',
    'Popeye the Sailor Meets Sindbad the Sailor',
    'The Great Flamarion',
    'Made for Each Other'
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];

};

const generatePoster = () => {
  const posters = [
    './images/posters/the-dance-of-life.jpg',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/the-great-flamarion.jpg'
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];

  return descriptions;
};

const generateGenre = () => {
  const genres = [
    'Cartoon',
    'Western',
    'Musical',
    'Drama',
    'Mystery',
    'Comedy'
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];

};

export const generateFilm = () => {
  const releaseDate = generateDate(14, 14440);
  const filmDuration = generateDate(10, 50);
  return {
    title: generateTitle(),
    poster: generatePoster(),
    description: generateDescription(),
    rating: getRandomInteger(0, 10),
    releaseDate,
    filmDuration,
    genre: generateGenre(),
    commentsCount: getRandomInteger(0, 10),
    director: 'director',
    screenwriter: 'screenwriter',
    actors: ['actor1', 'actor2'],
    country: 'country',
    isInWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
