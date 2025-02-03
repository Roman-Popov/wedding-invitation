/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import { createBlock } from '@/utils';
import './footer.scss';

const block = createBlock('footer');

const Footer = () => (
  <div className={block.block()}>
    <div className={block.element('text')}>
      Сделал с
      {' '}
      <i className={block.element('heart')} />
      {' '}
      Роман Попов
    </div>
    <div className={block.element('contacts-wrapper')}>
      <a
        className={block.element('telegram')}
        href="https://t.me/barmalewich"
        rel="noopener noreferrer"
        target="_blank"
        title="Telegram"
      />
      <a
        className={block.element('mail')}
        href="mailto:roman.job.mail@yandex.ru"
        rel="noopener noreferrer"
        target="_blank"
        title="Электронная почта"
      />
    </div>
  </div>
);

export const MemoizedFooter = React.memo(Footer);
