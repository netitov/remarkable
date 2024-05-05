import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './button.module.css';

interface IButton {
  text: string;
  style: 'dark' | 'light';
}

export default function Button({ text, style }: IButton) {

  const btnClass = classNames({
    [styles.btn]: true,
    [styles[style]]: Boolean(style)
  });

  const color = style === 'dark' ? 'light' : 'dark';

  return (
    <button className={btnClass}>
      <Text text={text} type='body-s' color={color} tag='span' />
    </button>
  )
}
