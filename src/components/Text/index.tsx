import React, { ReactNode } from 'react';
import { TagType, FontSizeType, ColorType } from './types';
import classNames from 'classnames';
import styles from './text.module.css';
import { DM_Sans } from "next/font/google";

interface IText {
  tag: TagType;
  text: string;
  type: FontSizeType;
  color: ColorType;
  children?: ReactNode;
  isItalic?: boolean;
}

const DMSans = DM_Sans({ subsets: ['latin'] });

export default function Text({ tag: Tag = 'p', text, type, color = 'dark', children, isItalic }: IText) {

  const textStyle = classNames({
    [styles[type]]: Boolean(type),
    [styles[color]]: Boolean(color),
    [styles.italic]: isItalic,
    [DMSans.className]: true
  });

  return (
    <Tag className={textStyle}>
      {text}
      {children}
    </Tag>
  )
}
