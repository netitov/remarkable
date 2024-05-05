import React from 'react';
import styles from './burger.module.css';

export default function Burger() {
  return (
    <button className={styles.btn}>
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#26464C"/>
        <rect width="26" height="1.5" transform="translate(15 20.5)" fill="#E7F3F3"/>
        <rect width="26" height="1.5" transform="translate(15 34)" fill="#E7F3F3"/>
      </svg>
    </button>
  )
}
