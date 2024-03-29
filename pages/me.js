import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Navbar from '@components/Navbar'
import Details from '@components/Details'

export default function Me() {
  return (
  <body>
    <div className="container">
      <Head>
        <title>Not Likely to be Jay-Z</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main>
        <Header title="Still, welcome to an app!" />
        <Navbar />
        <div>
         <section className="description">
            <h1>I Never Knew</h1>
            <h3>More About Me, The Person?</h3>
            <p>I went to a little bit of college and worked a series of just-jobs in different fields, learning a lot
            from each. I
             did tend to stay in each job for too long, and while in an extended stay in the last is when I came to the
             realization that I needed a career. But what? Something I had always been interested in was web
             development, I made a <a href="www.sullyismagic.net"> website for my dog </a> during a bout of
             seemingly endless
             health issues. My sweet husband encouraged me to consider my options, then one of our friends recommended that I look into classes offered by <Link href="/school">LaunchCode.</Link></p>
         </section>
         </div>
        <div className="dogs">
            <h2 className="dogs">Did I forget to mention that I have two dogs?!</h2>
            <img className="dog-pic" src="/boys.jpg" height="300" width="auto"/>
        </div>
        <div>
         <section className="project" id="project">

         </section>
         </div>
         <Details />
      </main>
      <Footer />
    </div>
   </body>
  )
}
