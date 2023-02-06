import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function School() {
  return (
  <body>
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Continue Being welcomed to an app!" />
        <div id="navbar">
          <Link  href="/">Home</Link>
          <Link  href="/me">About This Me</Link>
          <Link  href="/school">My Education</Link>
          <Link  href="/work">AQ Apprentice</Link>
          <Link  href="/page">The Fun Stuff</Link>
        </div>
        <div>
                <section id="school" className="school">
                <h2 className="school-heading">The bootcamp that is actually a school</h2>
                <img className="school-logo" src="/launchcode.jpg"/><br></br><br></br><br></br>
                 <p>LaunchCode is a non-profit education organization that focuses on getting more women, LGBTQ+ people, and
                 people of color into the technology field. Anyone can apply, however. They offer several comprehensive courses,
                  and the wildest part is that it is free. <a href="https://www.launchcode.org/">Seriously, check them out!</a>
                  </p>
                  <h3>My Experience in LaunchCode</h3>
                  <p>The course I applied for was called LC101: Introduction to Professional Web Development.
                  This course covered a tremendous amount of technologies, with the primary focus on JavaScript and Java.
                  The course was virtual, which really fit my life at the time since I was working from home post-Covid.
                  Also, being virtual, no one could see me crying through lecture or during studios!
                  Jokes aside, I learned so much and had a wealth of support, seemingly at any time I needed it regardless of the day or time of day.
                  In nine months, I became a full-stack developer, and during the post-course class called LiftOff, I was offered a paid apprenticeship at a leading advertising firm called VMLYR. </p>
                 </section>
                 </div>
                 <div>
                          <h2 id="school-items">Everything I Learned in LaunchCode</h2>

                                 <ul>
                                 <li className="school-item">JavaScript</li>
                                 <li className="school-item">HTML and CSS</li>
                                 <li className="school-item">Git</li>
                                 <li className="school-item">DOM, MVC, OOP, TDD</li>
                                 <li className="school-item">TypeScript</li>
                                 <li className="school-item">Angular</li>
                                 <li className="school-item">Java</li>
                                 <li className="school-item">Spring</li>
                                 <li className="school-item">Thymeleaf</li>
                                 <li className="school-item">mySQL</li>
                                 <li className="school-item">Jasmine</li>
                                 <li className="school-item">Repl.it, VSCode, IntelliJ</li>
                                 </ul>
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
