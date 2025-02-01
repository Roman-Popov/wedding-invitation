import * as React from 'react';
import { createBlock } from '@/utils';
import './welcome-screen.scss';
import { Unlocker } from '../unlocker';

const block = createBlock('welcome-screen');

const WelcomeScreen = () => (
  <div className={block.block()}>
    <div className={block.element('header-wrapper')}>
      <span data-heading="Открыть"> Открыть </span>
      <span data-heading="приглашение "> приглашение </span>
    </div>
    <Unlocker />
  </div>
);

export const MemoizedWelcomeScreen = React.memo(WelcomeScreen);
