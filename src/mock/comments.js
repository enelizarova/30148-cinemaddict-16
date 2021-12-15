import {EMOJI} from '../const.js';
import { getRandomInteger, generateDate } from '../utils.js';

const generateId = () => getRandomInteger(0, 10);

const getRandomEmoji = () => {
  const randomIndex = getRandomInteger(0, EMOJI.length - 1);

  return EMOJI[randomIndex];
};

const generateAuthor = () => {
  const authors = [
    'Lorem ipsum',
    'Fusce tristiqu',
    'Aliquam ',
    'Nullam nunc',
    'Phasellus eros'
  ];

  const randomIndex = getRandomInteger(0, authors.length - 1);

  return authors[randomIndex];
};

const generateCommentContent = () => {
  const comments = [
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
  const randomIndex = getRandomInteger(0, comments.length - 1);

  return comments[randomIndex];
};


export const generateComments = () => {
  const commentDate = generateDate(14, 14440);
  return {
    comment: [
      {
        id: generateId(),
        emoji: getRandomEmoji(),
        commentDate,
        author: generateAuthor(),
        commentContent: generateCommentContent()
      }
    ]
  };
};
