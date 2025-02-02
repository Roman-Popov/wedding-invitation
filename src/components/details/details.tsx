import * as React from 'react';
import { createBlock, getNames } from '@/utils';
import './details.scss';
import { Link } from '../link';

const block = createBlock('details');

const Details = () => {
  const { isSingle, noNames } = getNames();

  return (
    <div className={block.block()}>
      <h1>Пожелания</h1>
      <ul className={block.element('list')}>
        <li className="dress-code">
          Дресс-код: элегантные наряды в спокойных тонах.
          Ради красивых фотографий просим воздержаться от черных, пестрых, и чрезмерно ярких нарядов.
        </li>
        <li className="gift">
          Самый главный подарок — видеть
          {' '}
          {noNames || isSingle ? 'тебя' : 'вас'}
          {' '}
          рядом!
          Если
          {' '}
          {noNames || isSingle ? 'захочешь' : 'захотите'}
          {' '}
          дополнить поздравление, мы планируем путешествие,
          и
          {' '}
          {noNames || isSingle ? 'твоя' : 'ваша'}
          {' '}
          помощь будет очень кстати.
        </li>
        <li className="flowers">
          Пожалуйста, не
          {' '}
          {noNames || isSingle ? 'дари' : 'дарите'}
          {' '}
          нам цветы. Цветы завянут, а воспоминания останутся.
          {' '}
          {noNames || isSingle ? 'Подари' : 'Подарите'}
          {' '}
          нам вдохновение:
          {' '}
          {noNames || isSingle ? 'напиши' : 'напишите'}
          {' '}
          на открытке
          {' '}
          {noNames || isSingle ? 'твою' : 'вашу'}
          {' '}
          самую безумную или романтичную идею для свидания.
          Мы постараемся воплотить её!
        </li>
        <li className="mic">
          Мы решили отметить этот день в тесной компании родных и друзей.
          Поэтому никаких строгих правил или заранее подготовленных речей — только открытый микрофон,
          где каждый может поделиться своими тёплыми пожеланиями.
        </li>
        <li className="baby">
          Детские улыбки прекрасны, но мы хотим, чтобы
          {' '}
          {noNames || isSingle ? 'ты наслаждался' : 'вы наслаждались'}
          {' '}
          вечером без тревог.
          В заведении не предусмотрены детская комната и аниматоры.
          Пожалуйста, по возможности,
          {' '}
          {noNames || isSingle ? 'оставь' : 'оставьте'}
          {' '}
          малышей дома —
          {' '}
          {noNames || isSingle ? 'твой' : 'ваш'}
          {' '}
          комфорт важен для нас.
        </li>
        <li className="allergy">
          Если у
          {' '}
          {noNames || isSingle ? 'тебя' : 'вас'}
          {' '}
          аллергия — обязательно
          {' '}
          {noNames || isSingle ? 'сообщи' : 'сообщите'}
          {' '}
          нам об этом в
          {' '}
          <Link href="https://t.me/barmalewich">
            Telegram
          </Link>
          {' или '}
          <Link href="https://wa.me/79175828798">
            WhatsApp
          </Link>
          !
        </li>
      </ul>
    </div>
  );
};

export const MemoizedDetails = React.memo(Details);
