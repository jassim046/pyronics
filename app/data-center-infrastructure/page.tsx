import Image from "next/image";
import Link from "next/link";
// This import is required to fix the "Cannot find name Scripts" error
import Scripts from "components/Scripts"; 

export default function Home() {
  return (
    <>
      {/* Curser Pointer */}
      <div className="cursor" />
      <div className="cursor2" />
      <div className="page-wraper">
        {/* HEADER START */}
        <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
          <div className="main-bar-wraper navbar-expand-lg">
            <div className="main-bar">
              <div className="clearfix">
                {/* Logo */}
                <div className="logo-header">
                  <div className="logo-header-inner logo-header-one">
                    <Link href="/">
                      <img src="/images/logo-dark.png" alt="logo" className="desktop-logo-show" />
                      <img src="/images/logo-light.png" alt="logo" className="mobile-logo-show" />
                    </Link>
                  </div>
                </div>

                {/* Mobile Toggle Button */}
                <button
                  id="mobile-side-drawer"
                  data-target=".header-nav"
                  data-toggle="collapse"
                  type="button"
                  className="navbar-toggler collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar icon-bar-first" />
                  <span className="icon-bar icon-bar-two" />
                  <span className="icon-bar icon-bar-three" />
                </button>

                {/* Navigation */}
                <div className="header-nav d-flex justify-content-center">
                  <ul className="nav navbar-nav main-menu">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    
                    <li className="menu-item-has-children">
                      <Link href="/technologies" className="menu-link-with-arrow">
                        Technologies <i className="fa fa-angle-down submenu-icon" />
                      </Link>
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
                      <Link href="/services" className="menu-link-with-arrow">
                        Services <i className="fa fa-angle-down submenu-icon" />
                      </Link>
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

                <div className="extra-nav header-1-nav">
                  <div className="extra-cell two h-cart-block">
                    <a className="wt-cart cart-btn d-sms-none navSidebar-button">
                      <span className="link-inner">
                        <span className="woo-cart-count"><i className="bi bi-facebook" /></span>
                        <span className="woo-cart-count"><i className="bi bi-instagram" /></span>
                        <span className="woo-cart-count"><i className="bi bi-twitter-x" /></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* HEADER END */}

        {/* CONTENT START */}
        <div className="page-content">
          <div className="page-breadcrumb">
            <div aria-label="breadcrumb" className="viewbreadcrumb text-center">
              <h2 className="text-white text-center">Data Center Infrastructure</h2>
            </div>
          </div>
		
          {/* ABOUT SECTION */}
          <div className="section-full p-t60 p-b60 about-section-one-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-4">
                  <div className="about-content">
                    <h2>Data Center Infrastructure</h2>
                    <p>
                      In a digital-first world, robust data center infrastructure is critical
                      to business performance. At Pyronics, we design and implement
                      reliable, scalable data center environments that ensure uninterrupted
                      operations, enhanced security, and long-term efficiency.
                    </p>
                    <p>
                      Whether establishing a new facility or modernizing an existing one,
                      Pyronics delivers optimized infrastructure designed for performance,
                      resilience, and sustainable growth.
                    </p>
                    <Link href="/contact" className="site-button mt-3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4 text-center">
                  <img
                    src="/images/tech/infrastructure.jpg"
                    alt="Data Center Infrastructure"
                    className="img-fluid about-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <section className="services-core-section p-b60">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="services-card">
                    <span className="number">01</span>
                    <i className="fa-solid fa-server icon"></i>
                    <h4>High-Performance Servers</h4>
                    <p>Enterprise-grade servers engineered for fast data processing, application stability, and reliable computing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="services-card">
                    <span className="number">02</span>
                    <i className="fa-solid fa-database icon"></i>
                    <h4>Scalable Storage Solutions</h4>
                    <p>Secure and scalable storage systems designed for growing data demands and dependable backup solutions.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="services-card">
                    <span className="number">03</span>
                    <i className="fa-solid fa-desktop icon"></i>
                    <h4>High-Performance Workstations</h4>
                    <p>Powerful workstations optimized for engineers and designers handling compute-intensive workloads.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="services-card">
                    <span className="number">04</span>
                    <i className="fa-solid fa-box icon"></i>
                    <h4>Smart Cabinet Solutions</h4>
                    <p>Integrated smart cabinets with power distribution, cooling, and remote monitoring capabilities.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="services-card">
                    <span className="number">05</span>
                    <i className="fa-solid fa-battery-full icon"></i>
                    <h4>UPS Backup Systems</h4>
                    <p>Reliable UPS systems ensuring uninterrupted power supply during outages and emergencies.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="services-card">
                    <span className="number">06</span>
                    <i className="fa-solid fa-temperature-high icon"></i>
                    <h4>Precision Cooling & Monitoring</h4>
                    <p>Advanced cooling, DCIM, and environmental monitoring for optimal infrastructure performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* CONTENT END */}

        {/* FOOTER START */}
        <footer className="site-footer footer-dark" style={{ backgroundImage: 'url("/images/background/count-bg.jpg")' }}>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="widget widget_about">
                    <div className="logo-footer clearfix">
                      <Link href="/"><img src="/images/logo-dark.png" alt="logo" /></Link>
                    </div>
                    <ul className="social-icons">
                      <li><a href="#"><i className="bi bi-twitter-x" /></a></li>
                      <li><a href="#"><i className="bi bi-facebook" /></a></li>
                      <li><a href="#"><i className="bi bi-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widget f-top-space">
                    <h3 className="widget-title">Contact Us</h3>
                    <ul className="widget_address">
                      <li><i className="bi bi-telephone" /> 00966 (01) 474 4411</li>
                      <li><i className="bi bi-envelope" /> <a href="mailto:info@pyronics.co.uk">info@pyronics.co.uk</a></li>
                      <li><i className="bi bi-map" /> <strong>Pyronics Engineering Solutions</strong><br /> Riyadh 11352, KSA</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widget f-top-space">
                    <h3 className="widget-title">Quick Links</h3>
                    <ul className="widget_address newlinks">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/services">Services</Link></li>
                      <li><Link href="/technologies">Technologies</Link></li>
                      <li><Link href="/projects">Projects</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container text-center">
              <span className="copyrights-text">Copyright © 2026 Pyronics Engineering Solutions.</span>
            </div>
          </div>
        </footer>
        {/* FOOTER END */}

        <button className="scroltop">
          <span className="fa fa-angle-up relative" id="btn-vibrate" />
        </button>
      </div>

      {/* CRITICAL: This enables the mobile menu functionality */}
      <Scripts />
    </>
  );
}
