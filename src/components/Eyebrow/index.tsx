import classNames from 'classnames';
import React from 'react';
import Text from '../Text';
import styles from './eyebrow.module.css';

interface IEyebrow {
  text: string;
  theme: 'dark' | 'light';
}

export default function Eyebrow({ text, theme }: IEyebrow) {
  const blockClass = classNames({
    [styles.block]: true,
    [styles[`block_${theme}`]]: Boolean(theme),
  });

  return (
    <div className={blockClass}>
      <span className={styles.dot}></span>
      <Text text={text} color={theme} type="body-s" tag="span" />
    </div>
  );
}
