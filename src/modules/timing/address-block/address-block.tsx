/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { createBlock } from '@/utils';
import './address-block.scss';

type AddressBlockProps = { children: React.ReactNode, name: string };

const block = createBlock('address-block');

const AddressBlock = (props: AddressBlockProps) => {
  const { children, name } = props;

  const addressRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [copiedSuccessfully, setCopiedSuccessfully] = useState<null | boolean>(null);

  const handleTooltipClose = () => {
    setIsTooltipOpen(false);
  };

  const onCopyClick = () => {
    clearTimeout(timeoutId.current);
    const address = addressRef.current?.textContent?.replace(/\s+/g, ' ');

    if (address) {
      try {
        navigator.clipboard.writeText(address);
        setCopiedSuccessfully(true);
      } catch (error) {
        setCopiedSuccessfully(false);
      }
    } else {
      setCopiedSuccessfully(false);
    }

    setIsTooltipOpen(true);

    timeoutId.current = setTimeout(() => {
      handleTooltipClose();
    }, 2000);
  };

  return (
    <div className={block.block()}>
      {`${name}\n`}
      <span ref={addressRef}>
        {children}
      </span>
      <div
        onClick={onCopyClick}
        title="Скопировать адрес"
        className={block.element('copy-icon')}
      >
        {isTooltipOpen && (
        <div className={block.element('tooltip')}>
          {copiedSuccessfully ? 'Скопировано' : 'Ошибка копирования'}
        </div>
        )}
      </div>
    </div>
  );
};

export const MemoizedAddressBlock = React.memo(AddressBlock);
