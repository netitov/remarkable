import React from 'react';
import Text from '../Text';
import Video from '../Video';
import Burger from '../Burger';
import Logo from '../Logo';
import Button from '../Button';
import Image from 'next/image';
import ArrowIcon from '../ArrowIcon';
import styles from './landing.module.css'

export default function Landing() {
  return (
    <section className={styles.landing}>
      <Video />
      <div className={styles.content}>
        <header className={styles.header}>
          <Logo size='s' />
          <Burger />
        </header>
        <div className={styles.main}>
          <div className={styles.left}>
            <Text text='Helping authentic brands create' tag='h2' type='title' color='light'>
              <Text text='connections' tag='h2' type='title' color='light' isItalic />
            </Text>
            <div className={styles.btns}>
              <Button text='Our Portfolio' style='light' />
              <Button text='Get in Touch' style='dark' />
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/flowers.png' width={317} height={174} alt='flowers' quality={100} />
            <div className={styles.imgText}>
              <Text text='BloomCraft' tag='span' type='body-m' color='light' />
              <ArrowIcon />
            </div>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo size='l' />
        </div>
      </div>
    </section>
  )
}
