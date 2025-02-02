import * as React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import { HeadingBlock } from './heading-block';
import './timing.scss';

const block = createBlock('timing');

const Timing = () => (
  <div className={block.block()}>
    <h1>Расписание</h1>
    <div className={block.element('content')}>
      <div className={cn(block.element('block'), block.modifyElement('block', 'rings'))}>
        <HeadingBlock
          heading="Церемония"
          time="14:14"
        />
        <div className={block.element('description')}>
          {'ЗАГС Кировского района\nг. Уфа, ул. Заки Валиди, '}
          <span className="number">1</span>
        </div>
      </div>
      <div className={cn(block.element('block'), block.modifyElement('block', 'glasses'))}>
        <HeadingBlock
          heading="Сбор гостей"
          time="17:30"
        />
        <div className={block.element('description')}>
          {'Ресторан Птицы\nг. Уфа, ул. Ленина, '}
          <span className="number">75</span>
        </div>
      </div>
      <div className={cn(block.element('block'), block.modifyElement('block', 'banquet'))}>
        <HeadingBlock
          heading="Банкет"
          time="18:00"
        />
        <div className={block.element('description')}>
          {'Ресторан Птицы\nг. Уфа, ул. Ленина, '}
          <span className="number">75</span>
        </div>
      </div>

    </div>
  </div>
);

export const MemoizedTiming = React.memo(Timing);
