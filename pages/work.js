import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Work() {
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
                         <Link  href="/me">About Me</Link>
                         <Link  href="/school">My Education</Link>
                         <Link  href="/work">AQ Apprentice</Link>
                         <Link  href="/page">The Fun Stuff</Link>
                       </div>
        <div>
         <section className="work">
            <h3>My Apprenticeship</h3>
            <p>My apprenticeship with VMLYR started January of 2022. I was assigned to their AQ Department, which
            stands for Automation of Quality. Here, the traditional QA or Quality Assurance person is also an
            automation engineer, meaning that while I did not get a developer role, I was still able to code daily.</p>
         </section>
         </div>
        <div>
         <section className="work">
            <h3>The Practice</h3>
            <p>This company uses the Spotify Pod structure, meaning that in addition to your project lead, you also
            have a pod lead who helps you develop goals and achieve them, listens to your inevitable imposter
            syndrome woes, and leads your path moving up in the ranks. This has been a really helpful resource for
            me.</p>
         </section>
         </div>
        <div>
         <section className="work">
            <h3>Assigned Project</h3>
            <p>On my currently assigned project, I do a lot of different things, including:</p>
            <ul>
            <li>Regression Testing</li>
            <li>Functional Testing</li>
            <li>Automated Visual Regression Testing with BackstopJS and Selenium</li>
            <li>Project Planning</li>
            <li>Test Case Creation</li>
            <li>Load Testing with JMeter</li>
            <li>Accessibility Testing with various tools</li>
            <li>Case Studies</li>
            <li>Documentation in Confluence</li>
            <li>Monitor assigned tickets plus bug ticket creation in Jira</li>
            <li>Participate in sprint planning meetings</li>
            <li>Participate in excellent Team Building meetings, like Code Challenges</li>
            </ul>
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
