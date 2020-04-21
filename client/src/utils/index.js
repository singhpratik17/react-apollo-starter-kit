import moment from 'moment';

export const getUrl = (url, id) => {
  return url.replace(':id', `:${id}`);
};

export const getParam = () => {
  return window.location.pathname.split(':')[1];
};

/*
  Date Formatters
 */

export const dateFormatterLLL = input => moment(input).format('LLL');

export const dateFormatterDDMMMYYYY = input =>
  moment(input).format('DD MMM YYYY');

export const dateFormatterHHMMSS = input => moment(input).format('HH:MM:SS');
