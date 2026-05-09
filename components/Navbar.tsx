import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span>Atharva Sardesai</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/blog">Writing</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
} 
