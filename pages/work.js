import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Navbar from '@components/Navbar'
import Details from '@components/Details'

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
        <Navbar />
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
        <Details />
      </main>
      <Footer />
    </div>
   </body>
  )
}
