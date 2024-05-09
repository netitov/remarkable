import Image from 'next/image';
import React from 'react';
import ArrowIcon from '../ArrowIcon';
import Burger from '../Burger';
import Button from '../Button';
import Logo from '../Logo';
import Text from '../Text';
import Video from '../Video';
import styles from './landing.module.css';

export default function Landing() {
  return (
    <section className={styles.landing}>
      <Video src="https://player.vimeo.com/progressive_redirect/playback/932091337/rendition/1080p/file.mp4?loc=external&log_user=0&signature=99d8eafe976ef64bebd4b572018b417ef96fcdee0ca626c85317b63481848c36" />
      <div className={styles.content}>
        <header className={styles.header}>
          <Logo size="s" />
          <Burger />
        </header>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.left}>
              <Text text="Helping authentic brands create" tag="h2" type="title" color="light">
                <Text text="connections" tag="p" type="title" color="light" isItalic />
              </Text>
              <div className={styles.btns}>
                <Button text="Our Portfolio" style="light" />
                <Button text="Get in Touch" style="dark" />
              </div>
            </div>
            <div className={styles.right}>
              <Image src="/flowers.png" width={317} height={174} alt="flowers" quality={100} />
              <div className={styles.imgText}>
                <Text text="BloomCraft" tag="span" type="body-m" color="light" />
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div className={styles.logo}>
            <Logo size="l" />
          </div>
        </div>
      </div>
    </section>
  );
}
