import qs from 'qs';

export const getNames = () => {
  const queryString = window.location.search.substring(1);
  const { names = [] } = qs.parse(queryString) as { names: string[] };

  return {
    isSingle: names.length === 1,
    noNames: names.length === 0,
    names,
  };
};
