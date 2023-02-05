import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
         <section className="description">
            <h1>I Do Not Know</h1>
            <h2>My journey through learning web stuff</h2>
            <p>This is my attempt at a blog about my personal journey through completing an intense full-stack developer boot camp and my first job in the field.</p>
         </section>
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
         <h2 className="dogs">Did I forget to mention that I have two dogs?!</h2>
                     <img className="dog-pic" src="/boys.jpg" height="300" width="auto"/>
         <div>
                <h2 id="details">My Details</h2>
                          <img className="self" src="/self.jpg" height="150" width="auto"/>
                <p className="deets">Heres some external resources about me, but if you feel so inclined, you can always <a href="mailto:jmzager@gmail.com">drop me a line</a></p>
                <ul>
                <li><a className="detail-item" href="linkedin.com/in/jessica-zager0110">LinkedIn</a></li>
                <li><a className="detail-item" href="https://github.com/jmzager0110">GitHub</a></li>
                <li><a className="detail-item" href="https://codepen.io/jmzager0110">CodePen</a></li>
                </ul>

                </div>
      </main>
      <Footer />
    </div>
   </body>
  )
}
