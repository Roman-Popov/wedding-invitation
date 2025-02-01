import * as React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import { Intro } from '@/components';
import './main-screen.scss';

const block = createBlock('main-screen');

const MainScreen = ({ isOpened }: { isOpened: boolean }) => (
  <div className={cn(block.block(), block.modifyBlock({ open: isOpened }))}>
    <Intro />
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
