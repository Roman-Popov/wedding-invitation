import * as React from 'react';
import { createBlock } from '@/utils';
import './link.scss';

type LinkProps = {
  href: string,
  children: React.ReactNode,
};

const block = createBlock('link');

const Link = (props: LinkProps) => {
  const { href, children } = props;

  return (
    <a
      className={block.block()}
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
};

export const MemoizedLink = React.memo(Link);
