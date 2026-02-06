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
                          <Link href="/data-center-infrastructure">Data Center Infrastructure</Link>
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
              <h2 className="text-white text-center">Physical Security</h2>
            </div>
          </div>
          {/* About Section */}
          {/* ABOUT ONE SECTION START */}
          <div className="section-full p-t90  p-b50  about-section-one-wrap">
            <div className="about-section-one">
              <div className="container">
                <div className="section-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 m-b30 about-max-two-position">
                      <div className="about-section-two-right">
                        {/* TITLE START*/}
                        <div className="section-head left ">

                          <h2 className="">
                            Physical Security
                          </h2>
                          <p>
                            In an increasingly connected environment, physical security is a critical component of overall business protection. At Pyronics, we deliver intelligent, integrated physical security solutions that safeguard people, assets, and infrastructure. Our systems provide real-time visibility, controlled access, and rapid response capabilities across diverse operational environments.  <br />
                            From advanced surveillance and intrusion detection to biometric and access control systems, Pyronics designs security infrastructures that prevent unauthorized access and enhance operational safety. Our physical security solutions help organizations remain secure, compliant, and in complete control of their facilities.{" "}
                          </p>
                        </div>
                        <a href="/contact" className="site-button">
                          Read More
                        </a>
                      </div>

                    </div>
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="about-us-img">
                        <img
                          src="images/tech/security.jpg"
                          className="img-fluid"
                          alt="About Image" style={{ height: "460px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ABOUT ONE SECTION END */}
          <section className="services-core-section">
            <div className="services-core-container">
              <div className="services-core-grid">

                {/* 01 Video Surveillance */}
                <div className="services-core-item">
                  <span className="services-core-number">01</span>
                  <i className="services-core-icon fa-solid fa-video" />
                  <h4>Video Surveillance</h4>
                  <p>
                    High-definition surveillance systems delivering real-time monitoring,
                    incident recording, and enhanced situational awareness across
                    facilities and critical areas.
                  </p>
                </div>

                {/* 02 Access Control */}
                <div className="services-core-item">
                  <span className="services-core-number">02</span>
                  <i className="services-core-icon fa-solid fa-door-closed" />
                  <h4>Access Control</h4>
                  <p>
                    Intelligent access control systems that regulate entry to secure
                    zones, ensuring only authorized personnel can access sensitive areas.
                  </p>
                </div>

                {/* 03 Biometric Solutions */}
                <div className="services-core-item">
                  <span className="services-core-number">03</span>
                  <i className="services-core-icon fa-solid fa-fingerprint" />
                  <h4>Biometric Solutions</h4>
                  <p>
                    Advanced fingerprint, facial, and iris recognition technologies
                    providing fast, accurate, and secure identity verification.
                  </p>
                </div>

                {/* 04 Perimeter Security */}
                <div className="services-core-item">
                  <span className="services-core-number">04</span>
                  <i className="services-core-icon fa-solid fa-shield-halved" />
                  <h4>Perimeter Security</h4>
                  <p>
                    Robust perimeter protection solutions designed to monitor boundaries,
                    deter intrusions, and prevent threats before they reach critical
                    zones.
                  </p>
                </div>

                {/* 05 Video Management Software */}
                <div className="services-core-item">
                  <span className="services-core-number">05</span>
                  <i className="services-core-icon fa-solid fa-desktop" />
                  <h4>Video Management Software</h4>
                  <p>
                    Centralized video management platforms that efficiently control,
                    record, and manage multiple camera feeds across locations.
                  </p>
                </div>

                {/* 06 Intrusion Detection */}
                <div className="services-core-item">
                  <span className="services-core-number">06</span>
                  <i className="services-core-icon fa-solid fa-bell" />
                  <h4>Intrusion Detection</h4>
                  <p>
                    Reliable intrusion detection systems that instantly identify
                    unauthorized access and alert security teams for rapid response.
                  </p>
                </div>

                {/* 07 Video Storage & Servers */}
                <div className="services-core-item">
                  <span className="services-core-number">07</span>
                  <i className="services-core-icon fa-solid fa-database" />
                  <h4>Video Storage &amp; Servers</h4>
                  <p>
                    Secure and scalable video storage and server solutions supporting
                    high-resolution footage and long-term retention requirements.
                  </p>
                </div>

                {/* 08 Bollards */}
                <div className="services-core-item">
                  <span className="services-core-number">08</span>
                  <i className="services-core-icon fa-solid fa-road-barrier" />
                  <h4>Bollards</h4>
                  <p>
                    Fixed and automated bollard systems designed to control vehicle
                    access, prevent ramming attacks, and secure entry points.
                  </p>
                </div>

                {/* 09 Turnstile Systems */}
                <div className="services-core-item">
                  <span className="services-core-number">09</span>
                  <i className="services-core-icon fa-solid fa-people-arrows" />
                  <h4>Turnstile Systems</h4>
                  <p>
                    Efficient turnstile solutions that manage pedestrian flow and
                    seamlessly integrate with access control and biometric systems.
                  </p>
                </div>

              </div>
            </div>
          </section>


          {/* Design Capabilities Section 
    <div class="capabilities-section">
  <div class="container">
      <h2 class="section-title">Design Capabilities</h2>
      <div class="row">
          <div class="col-lg-12">
              <div class="card border-0 shadow">
                  <div class="card-body p-4">
                      <div class="d-flex mb-3 align-items-start">
                          <div class="icon-box flex-shrink-0">
                              <span>📐</span>
                          </div>
                          <div class="ms-3">
                              <h4 class="text-left fw-bold">Complete Design Services</h4>
                              <p class="mb-0">Sinmar Fire & Security has the capability to use client requirements and specifications as a basis to carry out full design and produce detailed working drawings using the latest computer-aided design software.</p>
                          </div>
                      </div>
                  
						
							<h3 class="text-center fw-bold">We provide all types of smoke detection requirements</h3>
							<img src="images/services/serveimg.jpg" alt="" class="img-fluid">
						</div>
              </div>
          </div>
      </div>
  </div>
    </div>


      {/* CLIENT LOGO  SECTION End */}
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
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <i className="bi bi-square" />
                        <a href="/about">About us </a>
                      </li>
                      <li>
                        <i className="bi bi-square" />
                        <a href="/services">Services</a>
                      </li>
                       <li>
                        <i className="bi bi-square" />
                        <a href="/technologies">Technologies</a>
                      </li>
                      <li>
                        <i className="bi bi-square" />
                        <a href="/projects">Projects </a>
                      </li>
                      <li>
                        <i className="bi bi-square" />
                        <a href="/contact">Contact</a>
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
