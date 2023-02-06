import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
  <body>
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to an app!" />
        <div id="navbar">
                  <Link  href="/">Home</Link>
                  <Link  href="/me">About This Me</Link>
                  <Link  href="/school">My Education</Link>
                  <Link  href="/work">AQ Apprentice</Link>
                  <Link  href="/page">The Fun Stuff</Link>
                </div>
<div>
         <section className="description">
            <h1>I Do Not Know</h1>
            <h3>My journey through learning web stuff</h3>
            <p>This is my attempt at a blog about my personal journey through completing an intense full-stack developer boot camp and my first job in the field.</p>
         </section>
         </div>
        <div>
         <section className="self">
            <h2 className="self">A Little Bit About Me</h2>
            <h4 className="self-text">First, let me begin by saying that I can not take myself very seriously, and that
            I
             look for humor anywhere I can find it. You could say I was born in the darkness... As it was 4:32 AM when I
              was born.</h4>
            <img className="meme" src="/meme.jpg" height="200" width="auto"/>
         </section>
        </div>
        <div>
         <section className="project" id="project">
            <h2>About This Blog</h2>
            <img className="construction" src="/const.jpg" height="200" width="auto"/>
            <p>Considering this is my first time using Netlify with Next.js, I am having issues with the header
            displaying when I add additional content. As I work through this, see my <a href="#details"> details </a> below if you have any suggestions.</p>
         </section>
         </div>
                  <div>
                  <h2 id="details">My Details</h2>
                                   <img className="self" src="/self.jpg" height="150" width="auto"/>
                         <p className="deets">Heres some external resources about me, but if you feel so inclined, you can always <a href="mailto:jmzager@gmail.com">drop me a line</a></p>
                         <ul>
                         <li>Here is my <a className="detail-item" href="https://www.linkedin.com/in/jessica-zager0110">LinkedIn</a></li>
                         <li>I am working on getting some of my projects done on <a className="detail-item" href="https://github.com/jmzager0110">GitHub</a></li>
                         <li>See my Code Challenges work on <a className="detail-item" href="https://codepen.io/jmzager0110">CodePen</a></li>
                         </ul>
                         </div>
      </main>
      <Footer />
    </div>
   </body>
  )
}
