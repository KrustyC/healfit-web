import _ from 'lodash';

const BASE_URL = `https://res.cloudinary.com/healfituk/image/upload`;

// eslint-disable-next-line
export const getImageURL = (picture, sizeString) => {
  let useSize = sizeString;

  const isPlaceholder = picture.indexOf('placeholder') > -1;
  if (isPlaceholder) {
    useSize = useSize.replace('g_face', '');
  }

  const transformString = [
    ..._.filter(_.split(useSize, ',')),
    'fl_progressive',
  ].join(',');

  return `${BASE_URL}/${transformString}/${picture}.jpg`;
};
