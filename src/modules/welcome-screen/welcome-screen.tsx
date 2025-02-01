import React, { useState } from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import './welcome-screen.scss';
import { Unlocker } from '../unlocker';

const block = createBlock('welcome-screen');

const WelcomeScreen = ({ onOpen }: { onOpen: () => any }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={cn(block.block(), block.modifyBlock({ opened }))}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget) {
          onOpen();
        }
      }}
    >
      <div className={block.element('header-wrapper')}>
        <span data-heading="Открыть"> Открыть </span>
        <span data-heading="приглашение "> приглашение </span>
      </div>
      <Unlocker setOpened={setOpened} />
    </div>
  );
};

export const MemoizedWelcomeScreen = React.memo(WelcomeScreen);
