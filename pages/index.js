import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Card, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

// Declaring functions
const {Meta} = Card;
const n = 100;

function displayCards() {
  return (
    [...Array(n)].map((elementInArray, index) => ( 
      <div className={styles.grid}>
        
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.randomkittengenerator.com/cats/rotator.php" />}
          >
          <Meta title="Cat picture" description='This cat is doing some actions from gun js'/>
          </Card>
        
      </div>
      ) 
    )
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAPP Portfolio</title>
        <meta name="description" content="Created by Blockchain@PSU organisation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://orgcentral.psu.edu/organization/distributedledgersociety">DAPP Portfolio</a>
        </h1>

        <p className={styles.description}>
          A decentralized portfolio sharing platform created by Blockchain@PSU organisation 
          <br></br>
          Check out some of the portfolios down below! all stored on a decentralized blockchain!
          <br></br>
        </p>

        <Button type="primary"><a href="https://www.google.com">Apply Now!</a></Button>
      

      <div className={styles.grid}>
        {displayCards()}
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://orgcentral.psu.edu/organization/distributedledgersociety"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/blockchainpsu.png" alt="Blockchain@PSU Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}

/*
        <p className={styles.description}>
          A decentralized portfolio sharing platform created by Blockchain@PSU organisation 
          <br></br>
          <Button type="primary"><a href="https://www.google.com">Apply Now!</a></Button>
        </p>


        <a href="" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        <a href="" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
*/