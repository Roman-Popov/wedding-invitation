import * as React from 'react';
import { createBlock, getNames } from '@/utils';
import './epilogue.scss';

const block = createBlock('epilogue');

const Epilogue = () => {
  const { isSingle, noNames } = getNames();

  return (
    <div className={block.block()}>
      <h1>* * *</h1>

      <span className={block.element('msg')}>
        {'Самые счастливые моменты — это те, которые можно разделить с дорогими людьми.\n\n'}
        Спасибо, что
        {' '}
        {noNames || isSingle ? 'ты' : 'вы'}
        {' '}
        — часть нашей истории!
      </span>

      <div className={block.element('await')}>
        Ждем
        {' '}
        {noNames || isSingle ? 'тебя' : 'вас'}
        {' '}
        !
      </div>
    </div>
  );
};

export const MemoizedEpilogue = React.memo(Epilogue);
