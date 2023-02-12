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
            <h2>Prior Work Experience</h2>
            <p>In high-school, I was enrolled in a program that made me a part-time student beginning my sophomore year,
             so I had to start
            working. I was a hostess at a nicer Mexican restaurant, got some hours at the local Baskin Robbins, then
            really cut my teeth as a receptionist at a hair salon. Due to my learning track or lack thereof, I did not
            get much chance at vocation.
            </p><br></br>
            <p>After I moved back to Kansas City, I worked while in community college. I
            climbed the ranks from cashier to
            department manager at a hardware store, then graduated earlier than I really wanted to. Without much
            direction other than away from loading manure in the summer,
             I started as a receptionist at a home services company, then all of a sudden it was six years later and I had ended up doing several jobs in every department and of three
                           people. Finally using my Fine Arts Degree, I then became the lead processing tech for an
                           underwriting firm in automotive
                           aftermarket insurance. After five years in this job and a few failed attempts at moving
                           up, I decided it was time to start chasing a career instead of just the next thing.</p>
         </section>
         </div>
         <Details />
      </main>
      <Footer />
    </div>
   </body>
  )
}
