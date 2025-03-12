import React from 'react';
import { createBlock } from '@/utils';
import { useTimer } from '@/hooks';
import {
  YEAR_SUFFIXES,
  MONTH_SUFFIXES,
  DAY_SUFFIXES,
  TARGET_DATE,
} from './timer-constants';
import './timer.scss';

const block = createBlock('timer');
const pluralRules = new Intl.PluralRules('ru-RU');

const getSuffix = (n: number, dict: Record<Intl.LDMLPluralRule, string>) => {
  const rule = pluralRules.select(n);
  return dict[rule];
};

const Timer = () => {
  const {
    years,
    months,
    days,
  } = useTimer(TARGET_DATE);

  const data = [];

  if (years) {
    data.push({ value: years, suffix: getSuffix(years, YEAR_SUFFIXES) });
  }

  if (months) {
    if (data.length) {
      data.push({ value: ':', suffix: '' });
    }

    data.push({ value: months, suffix: getSuffix(months, MONTH_SUFFIXES) });
  }

  if (days) {
    if (data.length) {
      data.push({ value: ':', suffix: '' });
    }

    data.push({ value: days, suffix: getSuffix(days, DAY_SUFFIXES) });
  }

  return (
    <div className={block.block()}>
      {data.map(({ value, suffix }, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={block.element('time-block')}>
          <span className={block.element('value')}>{value}</span>
          <span className={block.element('suffix')}>{suffix}</span>
        </div>
      ))}
    </div>
  );
};

export const MemoizedTimer = React.memo(Timer);
