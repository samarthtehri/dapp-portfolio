import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Card, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
//import Gun from 'gun/gun';

// Declaring functions
const {Meta} = Card;
const n = 10;
//const gun = Gun('https://gunjs.herokuapp.com/gun');

// Displays n number of cards
export function displayCards() {
  return (
    [...Array(n)].map((elementInArray, index) => ( 
      <div className={styles.grid} key={index}>
      <a href="https://www.google.com">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.randomkittengenerator.com/cats/rotator.php" />}
          >
          <Meta title="Cats!" description='@ Username'/>
          </Card>
      </a>
      </div>
      ) 
    )
  )
}

// Displays the frontend
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

      <div className={styles.grid}>{displayCards()}</div>

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

// project title
// picture of project
// author name
// link to project


// smartCar
// car image
// my name
// gooogle.com