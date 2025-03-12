import { useState, useEffect, useMemo } from 'react';
import { intervalToDuration } from 'date-fns';

const SECOND = 1_000;
const MINUTE = SECOND * 60;

const getDiff = (deadlineDate: Date) => intervalToDuration({ start: deadlineDate, end: Date.now() });

export const useTimer = (deadline: string, interval = MINUTE) => {
  const deadlineDate = useMemo(() => new Date(deadline), [deadline]);
  const [diff, setDiff] = useState(getDiff(deadlineDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDiff(getDiff(deadlineDate));
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadlineDate, interval]);

  return diff;
};
