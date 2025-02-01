import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import './vignette.scss';

const block = createBlock('vignette');

const Vignette = ({ onLoadEnd }: { onLoadEnd: () => any }) => {
  const [isLoadStart, setIsLoadStart] = useState(false);

  useEffect(() => {
    setIsLoadStart(true);
  }, []);

  return (
    <div
      className={cn(block.block(), block.modifyBlock({ loading: isLoadStart }))}
      onTransitionEnd={onLoadEnd}
    />
  );
};

export const MemoizedVignette = React.memo(Vignette);
