import * as React from 'react';
import { createBlock, getNames } from '@/utils';
import './invitation.scss';

const block = createBlock('invitation');

const Invitation = () => {
  const {
    isFemale,
    isSingle,
    names,
    noNames,
  } = getNames();

  return (
    <div className={block.block()}>
      <div className={block.element('pic')} />
      <h1 style={{ borderBottom: 'none', whiteSpace: 'pre-line', textAlign: 'center' }}>
        {noNames
          ? 'Дорогой гость'
          : isSingle
            ? `${isFemale ? 'Дорогая' : 'Дорогой'} ${names[0]}`
            : `Дорогие\n${names[0]} и ${names[1]}`}
        !
      </h1>
      Один день в этом году будет для нас особенным и мы хотим провести его
      в кругу самых близких и важных людей.
      {' '}
      {isSingle ? 'Твоя улыбка сделает' : 'Ваши улыбки сделают'}
      {' '}
      этот праздник по−настоящему волшебным!
      С большим удовольствием приглашаем
      {' '}
      {isSingle ? 'тебя' : 'вас'}
      {' '}
      на замечательный праздник — нашу свадьбу!
    </div>
  );
};

export const MemoizedInvitation = React.memo(Invitation);
