import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss'
import { Nav } from './components/nav'
import { Welcome } from './components/welcome';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Nav />
      <Welcome />
    </main>
  )
}

export default Home;
