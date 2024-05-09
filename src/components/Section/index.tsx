import classNames from 'classnames';
import React from 'react';
import styles from './section.module.css';

interface ISection {
  theme?: 'dark' | 'light';
  children: React.ReactNode;
}

export default function Section({ theme, children }: ISection) {
  const sectionClass = classNames({
    [styles.section]: true,
    [styles[`section_${theme}`]]: Boolean(theme),
  });

  return (
    <section className={sectionClass}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
}
