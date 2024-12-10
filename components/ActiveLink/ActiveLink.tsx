'use client';

import Link from 'next/link';
import React from 'react';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface IProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: IProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${style.link} ${pathName === path && style['active-link']}`}
      href={path}
      key={path}
    >
      {text}
    </Link>
  );
};
