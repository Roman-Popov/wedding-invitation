import * as React from 'react';
import { createBlock } from '@/utils';
import './no-data-block.scss';

type NoDataBlockProps = {
  type: 'loading' | 'error',
};

const block = createBlock('no-data-block');

const NoDataBlock = (props: NoDataBlockProps) => {
  const { type } = props;

  return (
    <div className={block.block()}>
      {type === 'error'
        ? 'Извините!\nНе удалось загрузить карту'
        : 'Пожалуйста, подождите.\nИдет загрузка карты'}
    </div>
  );
};

export const MemoizedNoDataBlock = React.memo(NoDataBlock);
