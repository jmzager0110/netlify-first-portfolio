import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Page() {
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
         <section className="page">
            <h2>Holy Shit, another page!</h2>
            <p className="page-text">Well damn, would you look at that? Another page!</p>
            </section>
            </div>
        <div>
         <section className="project">
            <h2>If You Are Reading This</h2>
            <p>Then that means I figured it out!</p>
         </section>
         </div>
                 <div>
                  <section className="description">
                     <h2>Here Comes The Fun Stuff</h2>
                     <p>This section will contain some links to projects I am working on, some notes about what I
                     want to learn, and idk maybe a hobby section or some shit, cause I got those.</p>
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
