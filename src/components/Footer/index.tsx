import React from 'react';
import Button from '../Button';
import Text from '../Text';
import Video from '../Video';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <div className={styles.center}>
          <Text text="Let’s create the remarkable" color="light" tag="p" type="headline" />
          <Button text="Get in Touch" style="light" />
        </div>
        <footer className={styles.footer}>
          <div className={styles.left}>
            <Text text="Instagram" color="light" tag="p" type="body-s" />
            <Text text="YouTube" color="light" tag="p" type="body-s" />
            <Text text="LinkedIn" color="light" tag="p" type="body-s" />
          </div>
          <Text text="&copy;2024 Remarkable" color="light" tag="p" type="body-s" />
        </footer>
      </div>
      <Video src="https://player.vimeo.com/progressive_redirect/playback/932089929/rendition/720p/file.mp4?loc=external&log_user=0&signature=f843404aa8c4ceee90198e16bc58f12ddf3fc28b725fe04793ebd38f9a9d1ffd" />
    </section>
  );
}
