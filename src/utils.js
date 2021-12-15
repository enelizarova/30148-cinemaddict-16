import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const isTaskRepeating = (repeating) => Object.values(repeating).some(Boolean);

export const humanizeDate = (date, format) => dayjs(date).format(format);

export const generateDate = (minDaysGap, maxDaysGap) => {
  const daysGap = getRandomInteger(-minDaysGap, -maxDaysGap);
  return dayjs().add(daysGap, 'day').toDate();
};

export const truncate = (str, maxlength) => str.length > maxlength ? `${str.slice(0, maxlength - 1)  }…` : str;
