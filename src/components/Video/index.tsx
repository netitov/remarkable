import React from 'react';
import styles from './video.module.css';

export default function Video({ src }: { src: string }) {
  return (
    <video autoPlay loop muted className={styles.video}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
