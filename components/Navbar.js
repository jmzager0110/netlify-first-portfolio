import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
       <div id="navbar" className="navbar">
       <Link  href="/">Home</Link>
       <Link  href="/me">About This Me</Link>
       <Link  href="/school">My Education</Link>
       <Link  href="/work">AQ Apprentice</Link>
       <Link  href="/page">The Fun Stuff</Link>
       </div>
    </>
  )
}
