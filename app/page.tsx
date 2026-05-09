import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export default async function HomePage() {
  return (
    <div>
      <main>
        <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-left">
              <span className="hero-eyebrow">
                Enterprise Security
              </span>

              <h1 className="hero-h1">
                Enterprise Security,{" "}<br />
                written from <em>inside</em>{" "}<br />
                the work.
              </h1>

              <p className="hero-sub">
                Notes on cyber risk, governance, and the gap between strategy and reality.
              </p>

              <Link href="/blog" className="hero-cta">
                Read the latest →
              </Link>

              <div className="hero-social">
                <Link href="https://www.linkedin.com/in/atharvasardesai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </Link>
                <Link href="https://x.com/NullSecures" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter />
                </Link>
                <Link href="https://medium.com/@cyberwithatharva" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-card">
                <Image
                  src="/atharva.png"
                  alt="Atharva's profile"
                  width={64}
                  height={64}
                  className="hero-avatar"
                  priority
                />
                <div className="hero-card-rule" />
                <p className="hero-card-label">Enterprise Security</p>
                <p className="hero-card-topics">Enterprise risk<br />Cyber strategy</p>
                <div className="hero-card-rule" />
                <p className="hero-card-meta">Atharva Sardesai</p>
              </div>
            </div>
          </div>

          <div className="hero-divider" />
        </section>

        <section id="about" className="about-section">
          <div className="about-inner">
            <span className="section-eyebrow" style={{ color: "var(--color-dark-muted)", borderColor: "var(--color-dark-border)" }}>
              About
            </span>

            <div className="about-grid">
              <div className="about-prose">
                <p>
                  I'm an enterprise security practitioner working in-house at a global organization. My day-to-day sits at the intersection of risk, governance, and the operational reality of running security at scale.
                </p>
                <p>
                  I write here about what most enterprise security writing misses: the gap between what's reported in board decks and what actually happens at the access list, the architecture review, the audit response. My focus is enterprise risk and cyber strategy — specifically, the structural patterns that make security programs succeed or quietly fail.
                </p>
                <p>
                  The goal of this writing isn't to teach fundamentals or chase trends. It's to surface the operational truths that the senior people in this industry already half-know but rarely see articulated. If that's useful to you, you're in the right place.
                </p>
              </div>

              <div className="about-pillars">
                <span className="pillars-label">What I write about</span>

                <div className="pillar-card">
                  <span className="pillar-number">01</span>
                  <h4>Enterprise risk</h4>
                  <p>
                    How risk actually moves through a large organization — from the dashboard, to the audit committee, to the team that has to act on it. Where the wires get crossed and what that costs.
                  </p>
                </div>

                <div className="pillar-card">
                  <span className="pillar-number">02</span>
                  <h4>Cyber strategy</h4>
                  <p>
                    The structural choices that determine whether a security program produces real outcomes or just well-formatted reports. What separates a strategy from a slide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="writing-section">
          <div className="writing-inner">
            <span className="section-eyebrow">Writing</span>
            <div className="writing-empty">
              <p>
                New pieces on enterprise risk and cyber strategy published regularly.
              </p>
              <p>
                Follow on LinkedIn for the latest — longer pieces appear here.
              </p>
              <Link href="https://www.linkedin.com/in/atharvasardesai" target="_blank" rel="noopener noreferrer" className="cta-link">
                Follow on LinkedIn →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-brand-name">Atharva Sardesai</span>
              <p className="footer-brand-desc">
                Enterprise security practitioner. Writing on cyber risk, governance, and the gap between strategy and reality.
              </p>
            </div>
            <div>
              <span className="footer-col-label">Quick Links</span>
              <ul className="footer-links">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    Writing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="footer-col-label">Connect</span>
              <ul className="footer-links">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/atharvasardesai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/NullSecures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://medium.com/@cyberwithatharva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 atharva sardesai. all rights reserved.</p>
            <div className="footer-accent-line" />
          </div>
        </div>
      </footer>
    </div>
  )
}
