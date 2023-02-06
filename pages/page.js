import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Navbar from '@components/Navbar'
import Details from '@components/Details'

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
        <Navbar />
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
        <Details />
      </main>
      <Footer />
    </div>
   </body>
  )
}
