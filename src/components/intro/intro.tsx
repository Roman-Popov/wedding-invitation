import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import { Timer } from '@/components';
import './intro.scss';

const block = createBlock('intro');

const Intro = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={block.block()}>
      <div className={block.element('content')}>
        <div className={block.element('names')}>
          <span className={block.element('name')}>Роман</span>
          <span className={cn(block.element('name'), block.modifyElement('name', 'and'))}>и</span>
          <span className={block.element('name')}>Екатерина</span>
        </div>
        <div className={block.element('invitation')}>
          <p>{'Приглашаем вас\nна нашу свадьбу'}</p>
          <p>
            <span className="number">
              {'1 марта\n2025'}
            </span>
          </p>
        </div>
      </div>
      <div className={block.element('timer-wrapper')}>
        <div>До свадьбы осталось:</div>
        <Timer />
      </div>
      <div
        className={cn(
          block.element('inviting-arrows'),
          block.modifyElement('inviting-arrows', { scrolled: isScrolled }),
        )}
      />
    </div>
  );
};

export const MemoizedIntro = React.memo(Intro);
