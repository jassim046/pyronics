import Image from "next/image";
import Link from "next/link";
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

        {/* CONTENT START */}
        <div className="page-content">
          <div className="page-breadcrumb">
            <div aria-label="breadcrumb" className="viewbreadcrumb text-center">
              <h2 className="text-white text-center">Data Center Infrastructure</h2>
            </div>
          </div>

          <div className="section-full p-t90 p-b50 about-section-one-wrap">
            <div className="about-section-one">
              <div className="container">
                <div className="section-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="about-section-two-right">
                        <div className="section-head left">
                          <h2>Data Center Infrastructure</h2>
                          <p>
                            In a digital-first world, robust data center infrastructure is critical to business performance. At Pyronics, we design and implement reliable, scalable data center environments that ensure uninterrupted operations, enhanced security, and long-term efficiency. From core hardware to intelligent monitoring, our integrated solutions are built to support evolving enterprise demands.
                            <br /><br />
                            Whether establishing a new facility or modernizing an existing one, Pyronics delivers optimized infrastructure designed for performance, resilience, and sustainable growth.
                          </p>
                        </div>
                        <Link href="/contact" className="site-button">Read More</Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="about-us-img">
                        <img src="/images/tech/infrastructure.jpg" className="img-fluid" alt="Infrastructure" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="services-core-section">
            <div className="services-core-container container">
              <div className="services-core-grid row">
                <div className="services-core-item col-lg-4 col-md-6 m-b30">
                  <span className="services-core-number">01</span>
                  <i className="services-core-icon fa-solid fa-server" />
                  <h4>High-Performance Servers</h4>
                  <p>Enterprise-grade servers engineered for fast data processing and stability.</p>
                </div>
                <div className="services-core-item col-lg-4 col-md-6 m-b30">
                  <span className="services-core-number">02</span>
                  <i className="services-core-icon fa-solid fa-database" />
                  <h4>Scalable Storage Solutions</h4>
                  <p>Secure systems designed for growing data demands and rapid recovery.</p>
                </div>
                <div className="services-core-item col-lg-4 col-md-6 m-b30">
                  <span className="services-core-number">03</span>
                  <i className="services-core-icon fa-solid fa-desktop" />
                  <h4>High-Performance Workstations</h4>
                  <p>Powerful workstations optimized for compute-intensive workloads.</p>
                </div>
                <div className="services-core-item col-lg-4 col-md-6 m-b30">
                  <span className="services-core-number">04</span>
                  <i className="services-core-icon fa-solid fa-box" />
                  <h4>Smart Cabinet Solutions</h4>
                  <p>Integrated cabinets with power distribution and remote monitoring.</p>
                </div>
                <div className="services-core-item col-lg-4 col-md-6 m-b30">
