import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Me() {
  return (
  <body>
    <div className="container">
      <Head>
        <title>Next.js Finisher!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Still, welcome to an app!" />
               <div id="navbar">
                         <Link  href="/">Home</Link>
                         <Link  href="/me">About This Me</Link>
                         <Link  href="/school">My Education</Link>
                         <Link  href="/work">AQ Apprentice</Link>
                         <Link  href="/page">The Fun Stuff</Link>
                       </div>
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
            <p>In high-school, I was enrolled in a program that put me at part-time beginning my sophomore year, so it
            was required that I start
            working. I was a hostess at a nicer Mexican restaurant, got some hours at the local Baskin Robbins, then
            really cut my teeth as a receptionist at a hair salon. I was on the fast-track for graduation so I never had
             opportunity to study anything that interested me, so I planned on college being where I would explore my
             options.
            </p><br></br>
            <p>After I moved back to Kansas City, I really sunk my teeth into being a productive member of society. I
            climbed the ranks from cashier to
            department manager at the hardware store, and graduated from community college earlier than I really wanted
            to during that time. After nearly a decade at the hardware store, I found myself wanting to get away from
            manual labor. I started as a receptionist at a home services company, then all of a sudden it was six years later and I had ended up doing several jobs in every department and of three
                           people. Finally using my Fine Arts Degree, I then became the lead processing tech for an
                           underwriting firm in automotive
                           aftermarket insurance. After five years in this job and a few failed attempts at moving
                           up, I decided it was time to start chasing a career instead of just the next thing.</p>
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
