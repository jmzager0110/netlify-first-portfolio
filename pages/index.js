import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header title="Welcome to an app!" />
        <section className="description">
        <h1>I Do Not Know</h1>
          <h2>My journey through learning web stuff</h2>
          <p>This is my attempt at a blog about my personal journey through completing an intense full-stack developer boot camp and my first job in the field.</p>
          <nav className="menu-container">
          <section className="menu-items">
          <a className="item" href="#me">More About Me</a>
          <a className="item" href="#school">The Education</a>
          <a className="item" href="#job">My first job in tech</a>
          <a className="item" href="#details">My details</a>
          </section>
          </nav>
          </section>
            <section id="me" className="me">
                <h3>More About Me, as a person</h3>
                <img src="/self.jpg" height="300" width="auto"/>
                <p>First, let me begin by saying that I do not take myself very seriously, and that I look for humor anywhere I can find it. Let me begin by saying that you could say I was born in the darkness... As it was 4:32 AM when I was born.</p>
                <img src="/meme.jpg" height="300" width="auto"/>
                 <p>I grew up outside Houston, Texas but ended up where I began back in Kansas City after high school. I went to a little bit of college and worked a series of just-jobs in different fields, learning a lot from each.
                 I climbed the ranks from cashier to department manager at a hardware store, started as a receptionist at a home services company before I ended up doing the jobs in every department and of three people, then became the lead processing tech for an underwriting firm in automotive aftermarket insurance.
                 I did tend to stay in each job for too long, and while in an extended stay in the last is when I came to the realization that I needed a career. But what? Something I had always been interested in was web development, I made a <a href="www.sullyismagic.net"> website for my dog </a> during a bout of endless health issues.
                  My sweet husband encouraged me to consider my options, then one of our friends recommended that I look into classes offered by <a href="#school">LaunchCode.</a></p>
                 <h4>Did I forget to mention that I have two dogs?!</h4>
                 <img src="/boys.jpg" height="300" width="auto"/>
                 <a href="#description">Back to the Top</a>
        </section>
        <div>
        <section id="school" className="school">
        <h2>The bootcamp that is actually a school</h2>
        <img src="/launchcode.jpg"/>
         <p>LaunchCode is a non-profit education organization that focuses on getting more women, LGBTQ+ people, and people of color into the technology field. Anyone can apply, however. They offer several intense courses; The course I applied for was called LC101: Introduction to Professional Web Development. This course covered a tremendous amount of technologies, with the primary focus on JavaScript and Java. The course was virtual, which really fit my life at the time since I was working from home post-Covid. Also, being virtual, no one could see me crying through lecture or during studios! Jokes aside, I learned so much and had a wealth of support, seemingly at any time I needed it regardless of the day or time of day. In nine months, I became a full-stack developer, and during the post-course class called LiftOff, I was offered a paid apprenticeship at a leading advertising firm called VMLYR. </p>
         </section>
         </div>

         <div>
         <section id="job" className="job">
        <h2>My first job in technology</h2>
        <img />
        <p>While in the LiftOff program, I was offered an apprenticeship in VMLYRs Automation of Quality department. Here, people in Quality Assurance are also Automation Engineers. My time in LaunchCode did not shape me for this role specifically, meaning there was not much focus on this practice, so I had a lot of on the job learning to do, which I did. I learned manual testing, functional testing, and how to automate visual regression as well as UEX.</p>
        </section>
        </div>
        <div>
       <h2 id="details">My Details</h2>
       <p>Heres some external resources about me, but if you feel so inclined, you can always <a href="mailto:jmzager@gmail.com">drop me a line</a></p>
       <ul>
       <li><a className="detail-item" href="linkedin.com/in/jessica-zager0110">LinkedIn</a></li>
       <li><a className="detail-item" href="https://github.com/jmzager0110">GitHub</a></li>
       <li><a className="detail-item" href="https://codepen.io/jmzager0110">CodePen</a></li>
       </ul>

       </div>

      </main>
      <Footer />
    </div>
  )
}
