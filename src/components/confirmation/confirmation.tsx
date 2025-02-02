import * as React from 'react';
import { createBlock } from '@/utils';
// import './confirmation.scss';
import { Link } from '../link';

const block = createBlock('confirmation');

const Confirmation = () => (
  <div className={block.block()}>
    <h1>Подтверждение</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        Просьба подтвердить участие до
        {' '}
        <span className="number">08.02.2025</span>
        , чтобы мы смогли организовать все максимально комфортно и вкусно.
      </div>
      <div>
        Мы хотим создать дружественную атмосферу на мероприятии,
        поэтому предлагаем вам в качестве подтверждения записать и
        отправить небольшую видео-визитку в
        {' '}
        <Link href="https://t.me/+CdPdzLVTQjRmZGVi">
          телеграм-чат
        </Link>
        . Это поможет гостям нашего вечера познакомиться друг с другом.
      </div>
    </div>
  </div>
);

export const MemoizedConfirmation = React.memo(Confirmation);
