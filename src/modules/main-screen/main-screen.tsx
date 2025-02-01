import * as React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import './main-screen.scss';
import { Timer } from '@/components';

const block = createBlock('main-screen');

const MainScreen = ({ isOpened }: { isOpened: boolean }) => (
  <div className={cn(block.block(), block.modifyBlock({ open: isOpened }))}>
    <div className={block.element('intro-container')}>
      <div className={block.element('intro-content')}>
        <div className={block.element('names')}>
          <span className={block.element('name')}>Роман</span>
          <span className={cn(block.element('name'), block.modifyElement('name', 'and'))}>и</span>
          <span className={block.element('name')}>Екатерина</span>
        </div>
        <div className={block.element('invitation')}>
          <p>{'Приглашаем вас\nна нашу свадьбу'}</p>
          <p>{'1 марта\n2025'}</p>
        </div>
      </div>
      <div className={block.element('timer-wrapper')}>
        <div>До свадьбы осталось:</div>
        <Timer />
      </div>
    </div>
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
