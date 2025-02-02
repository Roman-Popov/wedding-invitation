import * as React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import { HeadingBlock } from './heading-block';
import { AddressBlock } from './address-block';
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
        <AddressBlock name="ЗАГС Кировского района">
          {'г. Уфа, ул. Заки Валиди, '}
          <span className="number">1</span>
        </AddressBlock>
      </div>
      <div className={cn(block.element('block'), block.modifyElement('block', 'glasses'))}>
        <HeadingBlock
          heading="Сбор гостей"
          time="17:30"
        />
        <AddressBlock name="Ресторан Птицы">
          {'г. Уфа, ул. Ленина, '}
          <span className="number">75</span>
        </AddressBlock>
      </div>
      <div className={cn(block.element('block'), block.modifyElement('block', 'banquet'))}>
        <HeadingBlock
          heading="Банкет"
          time="18:00"
        />
        <AddressBlock name="Ресторан Птицы">
          {'г. Уфа, ул. Ленина, '}
          <span className="number">75</span>
        </AddressBlock>
      </div>
    </div>
  </div>
);

export const MemoizedTiming = React.memo(Timing);
