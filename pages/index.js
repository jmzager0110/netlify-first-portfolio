import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Navbar from '@components/Navbar'
import Details from '@components/Details'

export default function Home() {
  return (
  <body>
    <div className="container">
      <Head>
        <title>Not Likely to be Jay-Z</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main>
        <Header title="Welcome to an app!" />
        <Navbar />
        <div>
         <section className="description">
            <h1>I Do Not Know</h1>
            <h3>My journey through learning web stuff</h3>
            <p>This is my first attempt at a blog about my personal journey through completing an intense full-stack
            developer boot camp and my first job in the field.</p>
         </section>
         </div>
        <div>
         <section className="self">
            <h2 className="self">A Little Bit About Me</h2>
            <h4 className="self-text">First, let me begin by saying that I can not take myself very seriously, and that
            I look for humor anywhere I can find it.</h4>
            <img className="meme" src="/meme.jpg" height="200" width="auto"/>
         </section>
        </div>
        <div>
         <section className="project" id="project">
            <h2>About This Blog</h2>
            <img className="construction" src="/const.jpg" height="200" width="auto"/>
            <p>Considering this is my first time using Netlify with Next.js, or React for that matter, I am having
            issues with the header
            gradually disappearing when I add additional content. As I work through this, see my <a href="#details">
            details </a> below if you have any suggestions.</p>
         </section>
         </div>
        <Details />
      </main>
      <Footer />
    </div>
   </body>
  )
}
