import classNames from 'classnames';
import React from 'react';
import styles from './arrowicon.module.css';

interface IArrowIcon {
  theme?: 'light' | 'dark';
  size?: number;
}

export default function ArrowIcon({ theme = 'light', size = 19 }: IArrowIcon) {
  const svgClass = classNames({
    [styles[`svg_${theme}`]]: Boolean(theme),
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
    >
      <path d="M1 17.4981L17 1.49811" stroke="#E7F3F3" strokeWidth="1.5" strokeMiterlimit="10" />
      <path
        d="M16.9999 13.5407C16.9999 13.5407 13.1927 8.68158 16.9999 1.49811C9.81639 5.30525 4.95728 1.49811 4.95728 1.49811"
        stroke="#E7F3F3"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
