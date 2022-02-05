import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import Timer from "../Timer.js";

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    
      <div className="body">
        
        <Timer/>
        <Link href="/"><a>トップページへ</a></Link>
      </div>
    </div>
  )
}
