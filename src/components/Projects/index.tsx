import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Eyebrow from '../Eyebrow';
import Section from '../Section';
import Text from '../Text';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <Section theme="dark">
      <div className={styles.block}>
        <div className={styles.textBlock}>
          <Eyebrow text="Portfolio Spotlight" theme="light" />
          <Text text="Recent projects" tag="h2" type="title" color="light" />
          <Button text="View All" style="dark" />
        </div>
        <div className={styles.imgBlock}>
          <Image src="/pr-1.png" width={317} height={421} alt="pr-1" quality={90} />
          <Image src="/pr-2.png" width={317} height={421} alt="pr-2" quality={90} />
          <Image src="/pr-3.png" width={317} height={421} alt="pr-3" quality={90} />
        </div>
      </div>
    </Section>
  );
}
