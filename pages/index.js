import Head from 'next/head';
import Image from 'next/image';
import { Toolbar } from '../components/toolbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (

    <div className="wrapper">
      <div className='page-container'> 
      <Toolbar />
          <div className={styles.main}>
            <h1>Latest Canada News And Headlines</h1>
          </div>
      </div>
    </div>

  );
}
