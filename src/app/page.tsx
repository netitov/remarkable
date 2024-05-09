import About from '@/components/About';
import Footer from '@/components/Footer';
import Insights from '@/components/Insights';
import Landing from '@/components/Landing';
import Pholosophy from '@/components/Philosophy';
import Projects from '@/components/Projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Landing />
        <Projects />
        <Pholosophy />
        <Insights />
        <About />
        <Footer />
      </div>
    </main>
  );
}
