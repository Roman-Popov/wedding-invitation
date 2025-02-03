import qs from 'qs';

export const getNames = () => {
  const queryString = window.location.search.substring(1);
  const { names = [], s } = qs.parse(queryString) as { names: string[], s?: string };

  return {
    isSingle: names.length < 2,
    noNames: names.length === 0,
    names,
    isFemale: names.length === 1 && s === 'f',
  };
};
