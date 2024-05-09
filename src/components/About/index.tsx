import Image from 'next/image';
import React from 'react';
import img from '../../../public/about.png';
import Button from '../Button';
import Eyebrow from '../Eyebrow';
import Section from '../Section';
import Text from '../Text';
import styles from './about.module.css';

export default function About() {
  return (
    <Section theme="light">
      <div className={styles.block}>
        <div className={styles.textBlock}>
          <Eyebrow text="Work for Remarkable" theme="dark" />
          <Text text="Craft your future with our " tag="h2" type="title" color="dark">
            <Text text="impactful " tag="span" type="title" color="brand-secondary" />
            <Text text="creative team" tag="span" type="title" color="dark" isItalic />
          </Text>
          <div className={styles.btns}>
            <Button text="View Openings" style="dark" />
            <Button text="About Our Team" style="light" />
          </div>
        </div>
        <Image src={img} alt="meeting" quality={90} className={styles.img} />
      </div>
    </Section>
  );
}
