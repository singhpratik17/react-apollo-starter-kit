export const marginGenerator = marginString => {
  const marginArr = marginString.split('-');
  const type = () => {
    switch (marginArr[0]) {
      case 'mt':
        return 'marginTop';
      case 'mb':
        return 'marginBottom';
      case 'ml':
        return 'marginLeft';
      case 'mr':
        return 'marginRight';
      default:
        return '';
    }
  };

  return { [type()]: marginArr.length > 2 ? `-${marginArr[2]}px` : `${marginArr[1]}px`};
};

export const paddingGenerator = paddingString => {
  const paddingArr = paddingString.split('-');
  const type = () => {
    switch (paddingArr[0]) {
      case 'pt':
        return 'paddingTop';
      case 'pb':
        return 'paddingBottom';
      case 'pl':
        return 'paddingLeft';
      case 'pr':
        return 'paddingRight';
      default:
        return '';
    }
  };

  return { [type()]: `${paddingArr[1]}px` };
};
