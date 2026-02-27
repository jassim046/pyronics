import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor" />
      <div className="cursor2" />

      <div className="page-wraper">

        {/* ================= HEADER START ================= */}
        <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
          <div className="main-bar-wraper navbar-expand-lg">
            <div className="main-bar">
              <div className="clearfix">

                {/* Logo */}
                <div className="logo-header">
                  <div className="logo-header-inner logo-header-one">
                    <Link href="/">
                      <img src="images/logo-dark.png" alt="logo" className="desktop-logo-show" />
                      <img src="images/logo-light.png" alt="logo" className="mobile-logo-show" />
                    </Link>
                  </div>
                </div>

                {/* ✅ WORKING MOBILE TOGGLE */}
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="icon-bar icon-bar-first" />
                  <span className="icon-bar icon-bar-two" />
                  <span className="icon-bar icon-bar-three" />
                </button>

                {/* ✅ COLLAPSIBLE NAVIGATION */}
                <div className={`header-nav navbar-collapse ${isOpen ? "show" : ""}`}>
                  <ul className="nav navbar-nav main-menu">

                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>

                    <li className="menu-item-has-children">
                      <Link href="/technologies">Technologies</Link>
                      <ul className="sub-menu">
                        <li><Link href="/data-center-infrastructure">Data Center Infrastructure</Link></li>
                        <li><Link href="/cyber-security">Cyber Security</Link></li>
                        <li><Link href="/networking-solutions">Networking Solutions</Link></li>
                        <li><Link href="/passive-infrastructure">Passive Infrastructure</Link></li>
                        <li><Link href="/physical-security">Physical Security</Link></li>
                        <li><Link href="/audio-video-distribution">Audio / Video Distribution</Link></li>
                        <li><Link href="/fire-safety">Fire & Safety</Link></li>
                        <li><Link href="/sound-and-paging">Sound and Paging</Link></li>
                        <li><Link href="/time-synchronization">Time Synchronization</Link></li>
                        <li><Link href="/ip-telephony">IP Telephony</Link></li>
                        <li><Link href="/remote-telemetry-units">Remote Telemetry Units</Link></li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <Link href="/services">Services</Link>
                      <ul className="sub-menu">
                        <li><Link href="/project-management">Project Management</Link></li>
                        <li><Link href="/solution-planning">Solution Planning</Link></li>
                        <li><Link href="/installations">Installations</Link></li>
                        <li><Link href="/support-services">Support Services</Link></li>
                      </ul>
                    </li>

                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>

                  </ul>
                </div>

              </div>
            </div>
          </div>
        </header>
        {/* ================= HEADER END ================= */}



        {/* ================= CONTENT START ================= */}
        <div className="page-content">

          <div className="page-breadcrumb">
            <div className="viewbreadcrumb text-center">
              <h2 className="text-white">Data Center Infrastructure</h2>
            </div>
          </div>

          <section className="about-section p-t90 p-b60">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-lg-6 m-b30">
                  <h2>Data Center Infrastructure</h2>
                  <p>
                    In a digital-first world, robust data center infrastructure is critical to business performance.
                    At Pyronics, we design and implement reliable, scalable data center environments.
                  </p>
                  <p>
                    From core hardware to intelligent monitoring, our integrated solutions support evolving enterprise demands.
                  </p>
                  <a href="/contact" className="site-button">Read More</a>
                </div>

                <div className="col-lg-6 m-b30">
                  <img
                    src="images/tech/infrastructure.jpg"
                    className="img-fluid"
                    alt="Data Center Infrastructure"
                  />
                </div>

              </div>
            </div>
          </section>

        </div>
        {/* ================= CONTENT END ================= */}



        {/* ================= FOOTER ================= */}
        <footer
          className="site-footer footer-dark"
          style={{ backgroundImage: 'url("images/background/count-bg.jpg")' }}
        >
          <div className="footer-bottom text-center">
            <div className="container">
              <span className="copyrights-text">
                Copyright © 2026 All Rights Reserved by Pyronics Engineering Solutions.
              </span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
