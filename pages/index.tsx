import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss'
import { Nav } from './components/nav'
import { Technology } from './components/technology';
import { Welcome } from './components/welcome';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Nav />
      <Welcome />
      <Technology />
    </main>
  )
}

export default Home;
