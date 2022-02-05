import Head from 'next/head'
// import Image from 'next/image'
import Numeron from "../Numeron.js";
import History from "../History.js";
import Link from 'next/link'

import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <Numeron />
        <History/>
        <Link href="/"><a>サンプルページへ</a></Link>
      </div>
    </div>
  )
}
