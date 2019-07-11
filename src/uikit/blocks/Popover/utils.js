export const calculateLeft = (dimension, position) => {
  if (dimension === null) {
    return 0;
  }

  if (position === 'top' || position === 'bottom') {
    return dimension.left;
  }

  if (position === 'right') {
    return dimension.left + dimension.width + 10;
  }

  return 0;
};

export const calculateBottom = dimension => {
  if (dimension === null) {
    return 0;
  }

  return window.innerHeight - dimension.top + 10;
};

export const calculateRight = (dimension, position) => {
  if (dimension === null) {
    return 0;
  }

  if (position === 'left') {
    return window.innerWidth - dimension.left + 10;
  }

  return 0;
};

export const calculateTop = (dimension, position) => {
  if (dimension === null) {
    return 0;
  }

  if (position === 'bottom') {
    return dimension.top + dimension.height + 10;
  }

  if (position === 'left' || position === 'right') {
    return dimension.top;
  }

  return dimension;
};

export const calculateWidth = dimension => (dimension ? dimension.width : 0);

export const calculateHeight = dimension => (dimension ? dimension.height : 0);
