import dayjs from 'dayjs';
import {EMOJI} from '../const.js';
import { getRandomInteger, humanizeDate } from '../utils.js';

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

const generateRating = () => getRandomInteger(0, 10);

const generateRelease = () => {
  const releaseDate = [
    '1936',
    '1929',
    '1955',
    '1933',
    '1964',
    '1937'
  ];

  const randomIndex = getRandomInteger(0, releaseDate.length - 1);

  return releaseDate[randomIndex];
};

const generateDuration = () => {
  const duration = [
    '123',
    '54',
    '100',
    '144',
    '199'
  ];

  const randomIndex = getRandomInteger(0, duration.length - 1);

  return duration[randomIndex];
};

const getRandomEmoji = () => {
  const randomIndex = getRandomInteger(0, EMOJI.length - 1);

  return EMOJI[randomIndex];
};

const generateDate = () => {
  const maxDaysGap = 14;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, 'day').toDate();
};

export const generateFilm = () => {
  const commentDdate = generateDate();
  return {
    title: generateTitle(),
    poster: generatePoster(),
    posterFull: 'posterFull',
    description: generateDescription(),
    shortDescription: 'shortDescription',
    rating: generateRating(),
    releaseDate: generateRelease(),
    duration: generateDuration(),
    genre: 'genre',
    commentsCount: 'commentsCount',
    director: 'director',
    screenwriter: 'screenwriter',
    actors: ['actor1', 'actor2'],
    country: 'country',
    isInWatchlist: false,
    isWatched: false,
    isFavorite: false,
    commentDdate,
    comment: [ {
      emoji: getRandomEmoji(),
      commentDdate,
      author: 'author',
      commentContent: 'commentContent'
    }]
  };
};
