import React from 'react';
import { createBlock } from '@/utils';
import { useTimer } from '@/hooks';
import {
  DAY_SUFFIXES,
  HOUR_SUFFIXES,
  MINUTE_SUFFIXES,
  SECONDS_SUFFIXES,
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
    days,
    hours,
    minutes,
    seconds,
  } = useTimer(TARGET_DATE);

  const data = [
    { value: days, suffix: getSuffix(days, DAY_SUFFIXES) },
    { value: hours, suffix: getSuffix(hours, HOUR_SUFFIXES) },
    { value: minutes, suffix: getSuffix(minutes, MINUTE_SUFFIXES) },
    { value: seconds, suffix: getSuffix(seconds, SECONDS_SUFFIXES) },
  ];

  return (
    <div className={block.block()}>
      {data.map(({ value, suffix }) => (
        <div key={suffix} className={block.element('time-block')}>
          <span className={block.element('value')}>{value}</span>
          <span className={block.element('suffix')}>{suffix}</span>
        </div>
      ))}
    </div>
  );
};

export const MemoizedTimer = React.memo(Timer);
