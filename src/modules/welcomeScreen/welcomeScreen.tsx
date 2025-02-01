import * as React from 'react';
import { createBlock } from '@/utils';
// import type { WelcomeScreenProps } from './welcomeScreen-types';
import './welcomeScreen.scss';
import { Unlocker } from '../unlocker';

const block = createBlock('welcomeScreen');

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
