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
                    <a href="/">
                      <img src="images/logo-dark.png" alt="logo" className="desktop-logo-show" />
                      <img src="images/logo-light.png" alt="logo" className="mobile-logo-show" />
                    </a>
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

                    <li>
                      <Link href="/">Home</Link>
                    </li>

                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    
                     {/*Technologies Menu with Submenu */}
                    <li className="menu-item-has-children">
                      <Link href="/technologies" className="menu-link-with-arrow">
                        Technologies 
                        <i className="fa fa-angle-down submenu-icon" />
                      </Link>

                      <ul className="sub-menu">
                        <li>
                          <Link href="/data-center-infrastructure">Data Center Infrastructure/</Link>
                        </li>
                        <li>
                          <Link href="/cyber-security">Cyber Security</Link>
                        </li>
                         <li>
                          <Link href="/networking-solutions">Networking Solutions</Link>
                        </li>
                         <li>
                          <Link href="/passive-infrastructure">Passive Infrastructure</Link>
                        </li>
                         <li>
                          <Link href="/physical-security">Physical Security</Link>
                        </li>
                         <li>
                          <Link href="/audio-video-distribution">Audio / Video Distribution</Link>
                        </li>
                        <li>
                          <Link href="/fire-safety">Fire & Safety</Link>
                        </li>
                        <li>
                          <Link href="/sound-and-paging">Sound and Paging</Link>
                        </li>
                        <li>
                          <Link href="/time-synchronization">Time Synchronization</Link>
                        </li>
                        <li>
                          <Link href="/ip-telephony">IP Telephony</Link>
                        </li>
                        <li>
                          <Link href="/remote-telemetry-units">Remote Telemetry Units</Link>
                        </li>
                      </ul>
                    </li>

                    {/* Services Menu with Submenu */}
                    <li className="menu-item-has-children">
                      <Link href="/services" className="menu-link-with-arrow">
                        Services
                        <i className="fa fa-angle-down submenu-icon" />
                      </Link>

                      <ul className="sub-menu">
                        <li>
                          <Link href="/project-management">Project Management</Link>
                        </li>
                        <li>
                          <Link href="/solution-planning">Solution Planning</Link>
                        </li>
                        <li>
                          <Link href="/installations">Installations</Link>
                        </li>
                        <li>
                          <Link href="/support-services">Support Services</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/projects">Projects</Link>
                    </li>

                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>

                  </ul>
                </div>

                {/* Header Right */}
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
          <h2 className="text-white text-center">Technologies </h2>
        </div>
      </div>
      
      {/* Prevent custom.js crash */}
          <span id="yearsExperience" style={{ display: "none" }}>0</span>

        {/* Section */}
         <section id="about" className="about-section p-t60 p-b60">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="about-text">
                    <h2 className="title_split text-center">Empowering Businesses with Reliable, Future-Ready Technologies</h2>
                    <p>
                     At Pyronics, we specialize in delivering advanced IT and infrastructure technologies that drive business growth, efficiency, and security. From resilient networking solutions to secure, high-performance data environments, our offerings are engineered to meet the evolving needs of modern enterprises.
                    </p>
                    <p>
                      Our approach blends innovation with precision—designing smart, scalable, and dependable systems that simplify complexity and enhance operational performance. With every project, Pyronics focuses on long-term value, ensuring your technology is ready not just for today, but for what’s next.</p>
                    <p> 
                      Flexible and scalable, our support plans are tailored to your business needs. From remote 
                      helpdesk support to on-site emergency response, Pyronics delivers dependable IT support that 
                      grows with your operations, keeping your systems secure, optimized, and always ready for performance.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Project START */}
      <div className="section-full p-t90 p-b90 projects-outer-full" style={{ background: "#fff" }}>
        <div className="container">
          <h2
                  className="wt-title text-center title_split_anim"
                  style={{ color: "#000", marginBottom: 30 }}
                >
                Integrated Technology for Smarter Enterprises
                </h2>
                <p></p>
         <div className="section-content">
  <div className="project-box-style1-outer row clearfix d-flex justify-content-center flex-wrap">

    {/* 1 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/data-center-infrastructure">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/infrastructure.jpg" alt="Data Center Infrastructure" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Data Center Infrastructure</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 2 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/cyber-security">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/cyber.jpg" alt="Cyber Security" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Cyber Security</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 3 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/networking-solutions">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/networking.jpg" alt="Networking Solutions" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Networking Solutions</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 4 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/passive-infrastructure">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/passive.jpg" alt="Passive Infrastructure" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Passive Infrastructure</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 5 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/physical-security">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/security.jpg" alt="Physical Security" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Physical Security</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 6 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/audio-video-distribution">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/avd.jpg" alt="Audio / Video Distribution" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Audio / Video Distribution</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 7 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/fire-safety">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/fire.jpg" alt="Fire & Safety" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Fire & Safety</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 8 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/sound-and-paging">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/sound.jpg" alt="Sound & Paging" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Sound & Paging</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 8 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/time-synchronization">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/time.jpg" alt="Time Synchronization" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">Time Synchronization</h3>
          </div>
        </div>
      </Link>
    </div>

    {/* 8 */}
    <div className="col-xl-4 col-lg-6 col-md-6">
      <Link href="/ip-telephony">
        <div className="twm-pro-st2">
          <div className="twm-pro-st2-media">
            <img src="images/tech/telephone.jpg" alt="IP Telephony" />
          </div>
          <div className="twm-pro-st2-inner">
            <h3 className="wt-title">IP Telephony</h3>
          </div>
        </div>
      </Link>
    </div>


  </div>
</div>

        </div>
      </div>
      {/* Project SECTION END */}
    </div>
    {/* CONTENT END */}
    {/* FOOTER START */}
    <footer
      className="site-footer footer-dark"
      style={{ backgroundImage: 'url("images/background/count-bg.jpg")' }}
    >
      {/* FOOTER BLOCKES START */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="widget widget_about">
                <div className="logo-footer clearfix">
                  <a href="index.html">
                    <img src="images/logo-dark.png" alt="" />
                  </a>
                </div>
                <ul className="social-icons">
                  <li>
                    <a href="https://www.x.com/">
                      <i className="bi bi-twitter-x cursor-scale small" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bi bi-facebook cursor-scale small" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bi bi-instagram cursor-scale small" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bi bi-pinterest cursor-scale small" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget f-top-space">
                <h3 className="widget-title">Contact Us</h3>
                <ul className="widget_address">
                  <li>
                    <i className="bi bi-telephone" />
                    00966 (01) 474 4411
                  </li>
                  <li>
                    <i className="bi bi-printer" />
                    00966 (01) 472 5295
                  </li>
                  <li>
                    <i className="bi bi-envelope" />
                    <a href="mailto:info@pyronics.co.uk">info@pyronics.co.uk</a>
                  </li>
                  <li>
                    <i className="bi bi-map" />
                    <strong>Pyronics Engineering Solutions</strong>
                    <br />
                    P. O. Box 271578,
                    <br /> Riyadh 11352, KSA
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget f-top-space recent-posts-entry">
                <h3 className="widget-title">Quick Links</h3>
                <ul className="widget_address newlinks">
                  <li>
                    <i className="bi bi-square" />
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-square" />
                    <a href="about.html">About us </a>
                  </li>
                  <li>
                    <i className="bi bi-square" />
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-square" />
                    <a href="projects.html">Projects </a>
                  </li>
                  <li>
                    <i className="bi bi-square" />
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER COPYRIGHT */}
      <div className="footer-bottom">
        <div className="container">
          <div className="container">
            <div className="footer-bottom-info">
              <div className="wt-footer-bot-left">
                <span className="copyrights-text">
                  Copyright © 2026 All Rights Reserved by Pyronics Engineering
                  Solutions. Powered by{" "}
                  <a
                    href="https://affinityopus.com"
                    className="text-white"
                    target="_blank"
                  >
                    Affinity Interactive
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* FOOTER END */}
    {/* BUTTON TOP START */}
    <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate" />
    </button>
  </div>

  {/* JAVASCRIPT  FILES ========================================= */}
  {/* JQUERY.MIN JS */}
  {/* POPPER.MIN JS */}
  {/* BOOTSTRAP.MIN JS */}
  {/* MAGNIFIC-POPUP JS */}
  {/* WAYPOINTS JS */}
  {/* COUNTERUP JS */}
  {/* MASONRY  */}
  {/* MASONRY  */}
  {/* OWL  SLIDER  */}
  {/* STICKY SIDEBAR  */}
  {/* FORM JS */}
  {/* IMAGE POPUP */}
  {/* Form js */}
  {/* Swiper JS */}
  {/* WOW ANIMATION JS */}
  {/* Title animation Js */}
  {/* cursor */}
  {/* CUSTOM FUCTIONS  */}
</>

  );
}
