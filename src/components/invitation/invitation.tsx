import * as React from 'react';
import qs from 'qs';
import { getNames } from '@/utils';

// FIXME [RP] 2025-02-03:
window.qs = qs;

const Invitation = () => {
  const { isSingle, names, noNames } = getNames();

  return (
    <div>
      <h1 style={{ borderBottom: 'none', whiteSpace: 'pre-line', textAlign: 'center' }}>
        {noNames
          ? 'Дорогой гость'
          : isSingle
            ? `Дорогой ${names[0]}`
            : `Дорогие\n${names[0]} и ${names[1]}`}
        !
      </h1>
      Один день в этом году будет для нас особенным и мы хотим провести его
      в кругу самых близких и важных людей.
      {' '}
      {noNames || isSingle ? 'Твоя улыбка сделает' : 'Ваши улыбки сделают'}
      {' '}
      этот праздник по−настоящему волшебным!
      С большим удовольствием приглашаем
      {' '}
      {noNames || isSingle ? 'тебя' : 'вас'}
      {' '}
      на замечательный праздник — нашу свадьбу!
    </div>
  );
};

export const MemoizedInvitation = React.memo(Invitation);
