import React from 'react';
import ArrowIcon from '../ArrowIcon';
import Section from '../Section';
import Text from '../Text';
import styles from './insights.module.css';

export default function Insights() {
  return (
    <Section theme="light">
      <div className={styles.block}>
        <Text text="Insights from " tag="h2" type="title" color="dark">
          <Text text="our blog" tag="span" type="title" color="dark" isItalic />
        </Text>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.top}>
              <div className={styles.badge}>
                <Text text="Branding" tag="span" type="body-s" color="dark" />
              </div>
              <Text
                text="Designing memorable brands for lasting impressions"
                tag="p"
                type="body-l"
                color="dark"
              />
            </div>
            <div className={styles.bottom}>
              <Text text="04/07/23" tag="span" type="body-s" color="dark" />
              <ArrowIcon theme="dark" size={16} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.top}>
              <div className={styles.badge}>
                <Text text="Web Design" tag="span" type="body-s" color="dark" />
              </div>
              <Text
                text="Crafting responsive designs for user engagement"
                tag="p"
                type="body-l"
                color="dark"
              />
            </div>
            <div className={styles.bottom}>
              <Text text="04/07/23" tag="span" type="body-s" color="dark" />
              <ArrowIcon theme="dark" size={16} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.top}>
              <div className={styles.badge}>
                <Text text="Development" tag="span" type="body-s" color="dark" />
              </div>
              <Text
                text="Navigating website development & coding intuitively"
                tag="p"
                type="body-l"
                color="dark"
              />
            </div>
            <div className={styles.bottom}>
              <Text text="04/07/23" tag="span" type="body-s" color="dark" />
              <ArrowIcon theme="dark" size={16} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
