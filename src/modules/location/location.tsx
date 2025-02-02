import React, { useRef } from 'react';
import { createBlock } from '@/utils';
import { Map } from './components/map';
import './location.scss';

const block = createBlock('location');

const Location = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className={block.block()}>
      <h1>Карта</h1>
      Для вашего удобства мы прикрепляем карту.
      Уверены, что у вас не возникнет трудностей с поиском места проведения свадьбы,
      и будем рады видеть вас среди наших гостей!
      <div className={block.element('map-container')} ref={containerRef}>
        <Map containerRef={containerRef} />
      </div>
    </div>
  );
};

export const MemoizedLocation = React.memo(Location);
