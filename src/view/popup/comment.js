import {humanizeDate} from '../../utils.js';

export const createCommentTemplate = (comment) => {
  const {emoji, commentDate, author, commentContent} = comment;

  const date = commentDate !== null
    ? humanizeDate(commentDate, 'DD MMMM YYYY HH:mm')
    : '';
  return (
    `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">
    </span>
    <div>
      <p class="film-details__comment-text">${commentContent}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  );
};
