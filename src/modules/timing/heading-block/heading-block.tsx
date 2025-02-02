import * as React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import './heading-block.scss';

type HeadingBlockProps = { heading: string, time: string };

const block = createBlock('heading-block');

const HeadingBlock = (props: HeadingBlockProps) => {
  const { heading, time } = props;

  return (
    <div className={block.block()}>
      <div className={block.element('icon')} />
      <div className={block.element('wrapper')}>
        <div className={block.element('heading')}>{heading}</div>
        <div className={cn(block.element('time'), 'number')}>{time}</div>
      </div>
    </div>
  );
};

export const MemoizedHeadingBlock = React.memo(HeadingBlock);
