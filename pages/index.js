import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Card, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

// Declaring functions
const {Meta} = Card;

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
          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://www.randomkittengenerator.com/cats/rotator.php" />}
            >
            <Meta title="Sleeping Cat" description="www.instagram.com" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://www.kittenwar.com/c_images/2011/10/29/205258.2.jpg" />}
            >
            <Meta title="Fighting Cat" description="... Where is my fish?" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://www.randomkittengenerator.com/cats/rotator.php" />}
            >
            <Meta title="Spring Cat" description="Spring Semester at PSU" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://www.kittenwar.com/c_images/2017/07/12/221418.4.jpg" />}
            >
            <Meta title="Staring Cat" description="www.instagram.com" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://www.kittenwar.com/c_images/2005/08/14/28320.jpg" />}
            >
            <Meta title="Sleepy Cat" description="www.instagram.com" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://www.kittenwar.com/c_images/2010/12/17/196925.1.jpg" />}
            >
            <Meta title="What" description="www.instagram.com" />
            </Card>
          </div>

          <div className={styles.grid}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://ih1.redbubble.net/image.2482844591.2502/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" />}
            >
            <Meta title="Beluga Cat" description="www.instagram.com" />
            </Card>
          </div>
        
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