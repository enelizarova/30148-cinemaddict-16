import dayjs from 'dayjs';
import {EMOJI} from '../const.js';
import { getRandomInteger } from '../utils.js';
// import {getRandomInteger} from '../utils.js';

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

  const randomIndex = titles;

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

  const randomIndex = posters;

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

  const randomIndex = descriptions;

  return descriptions[randomIndex];
};

const generateRating = () => {
	return getRandomInteger(0, 10)
}


export const generateFilm = () => {
	return {
		title: generateTitle(),
		poster: generatePoster(),
		posterFull: "posterFull",
		description: generateDescription(),
		shortDescription: "shortDescription",
		rating: generateRating(),
		releaseDate: "releaseDate",
		duration: "duration",
		genre: "genre",
		commentsCount: "commentsCount",
		director: "director",
		screenwriter: "screenwriter",
		actors: ["actor1", "actor2"],
		country: "country",
		inWatchlist: false,
		isWatched: false,
		isFavorite: false,
		comment: [ {
			emoji: "emoji",
			date: "date",
			author: "author",
			commentContent: "commentContent"
		}]
	}
}