import * as React from 'react';
import { createBlock } from '@/utils';
import './epilogue.scss';

const block = createBlock('epilogue');

const Epilogue = () => (
  <div className={block.block()}>
    <h1>* * *</h1>

    <span className={block.element('msg')}>
      {'Самые счастливые моменты — это те, которые можно разделить с дорогими людьми.\n\n'}
      Спасибо, что вы — часть нашей истории!
    </span>

    <div className={block.element('await')}>
      Ждем вас!
    </div>
  </div>
);

export const MemoizedEpilogue = React.memo(Epilogue);
