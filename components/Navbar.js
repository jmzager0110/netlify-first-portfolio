import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
        <div id="navbar">
          <Link  href="/">Home</Link>
          <Link  href="/page">Another Page</Link>
          <Link  href="#project">About This Page</Link>
          <Link  href="#details">Contact</Link>
        </div>
    </>
  )
}
