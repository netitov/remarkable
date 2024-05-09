import Image from 'next/image';
import React from 'react';
import img from '../../../public/philosophy.png';
import Button from '../Button';
import Eyebrow from '../Eyebrow';
import Section from '../Section';
import Text from '../Text';
import styles from './philosophy.module.css';

export default function Pholosophy() {
  return (
    <Section theme="dark">
      <div className={styles.block}>
        <div className={styles.textBlock}>
          <Eyebrow text="Our Pholosophy" theme="light" />
          <Text text="Human-centric " tag="h2" type="title" color="light">
            <Text text="strategies " tag="span" type="title" color="brand" />
            <Text text="to cut " tag="span" type="title" color="light" />
            <Text text="through the noice" tag="span" type="title" color="light" isItalic />
          </Text>
          <Button text="Our Story" style="dark" />
        </div>
        <Image src={img} alt="meeting" quality={90} className={styles.img} />
      </div>
    </Section>
  );
}
