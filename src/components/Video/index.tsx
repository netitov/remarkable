import React from 'react';
import styles from './video.module.css';

export default function Video() {
  return (
    <div className={styles.wrapper}>
      <video autoPlay /* loop */ muted>
        <source src='https://player.vimeo.com/progressive_redirect/playback/932091337/rendition/1080p/file.mp4?loc=external&log_user=0&signature=99d8eafe976ef64bebd4b572018b417ef96fcdee0ca626c85317b63481848c36' type='video/mp4' />
        {/* Добавьте дополнительные форматы видео для поддержки разных браузеров */}
        {/* <source src='/your-video-file.webm' type='video/webm' /> */}
        {/* <source src='/your-video-file.ogv' type='video/ogv' /> */}
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  )
}
