import * as React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import { Timing } from '@/modules/timing';
import { Location } from '@/modules/location';
import {
  Confirmation,
  Details,
  Epilogue,
  Intro,
} from '@/components';
import './main-screen.scss';

const block = createBlock('main-screen');

const MainScreen = ({ isOpened }: { isOpened: boolean }) => (
  <div className={cn(block.block(), block.modifyBlock({ open: isOpened }))}>
    <Intro />
    <div className={block.element('content')}>
      <Timing />
      <Location />
      <Confirmation />
      <Details />
      <Epilogue />
    </div>
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
