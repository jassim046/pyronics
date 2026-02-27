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
          <h2 className="text-white text-center">About Us </h2>
        </div>
      </div>
      {/* About Section */}
      <section id="about" className="about-section p-t60 p-b60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-text">
                <p>
                  PYRONICS has grown from strength to strength within a short
                  span of time by offering excellent quality in services
                  consistently. We endeavor to keep pace with cutting edge
                  technology in the field of interior design and incorporate
                  them into our projects to provide world class professional
                  services to our existing and future clientele.
                </p>
                <p>
                  Our team of workers have created a track record in their job
                  with their skills and dedication. One can hardly believe that
                  the base of our gypsum workers' creations are of Gypsum. So is
                  the case with all other craftsmen and technicians. We have
                  achieved this impeccable record in this niche field because we
                  cherish perfection.
                </p>
                <p>
                  We undertake projects entrusted to us with deep faith and
                  commitment, conforming to the requirement of the clients. Our
                  final product always exceeds the expectations of our clients
                  and their satisfaction and goodwill has powered the growing
                  business base of our clientele.
                </p>
                <span id="yearsExperience">0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vision-mission-section">
        <div className="vm-container">
          {/* Vision & Mission Cards */}
          <div className="vm-hero">
            <div className="vm-card">
              <div className="vm-label">Our Vision</div>
              <p>
                To be the <strong>premier construction partner</strong> known
                for uncompromising quality and customer satisfaction across
                private and government sectors.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-label">Our Mission</div>
              <p>
                At Sinmar Global, we leverage{" "}
                <strong>
                  three decades of civil and MEP contracting excellence
                </strong>{" "}
                to deliver solutions that exceed expectations. Our success is
                measured by customer satisfaction — our ultimate and
                non-negotiable commitment.
              </p>
            </div>
          </div>
          {/* Core Values Section */}
          <div className="core-values-header">
            <h2>
              Our <strong>Core Values</strong>
            </h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-number">01</span>
              <div className="value-content">
                <h4>Unwavering Commitment to Quality</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">02</span>
              <div className="value-content">
                <h4>Customer-Centric Approach</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">03</span>
              <div className="value-content">
                <h4>Excellence in Execution</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">04</span>
              <div className="value-content">
                <h4>Integrity in All Dealings</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">05</span>
              <div className="value-content">
                <h4>Dedication to Consistency</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">06</span>
              <div className="value-content">
                <h4>Innovation with Purpose</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">07</span>
              <div className="value-content">
                <h4>Long-term Partnerships</h4>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">08</span>
              <div className="value-content">
                <h4>Guided by Values</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="services-core-section ">
        <div className="services-core-container ">
          <div className="services-core-header">
            <h2>
              Our <strong>Services</strong>
            </h2>
            <p className="subtitle">Specialized Teams for Every Discipline</p>
          </div>
          <div className="services-core-grid">
            <div className="services-core-item">
              <span className="services-core-number">01</span>
              <i className="services-core-icon fa-solid fa-city" />
              <h4>Civil Engineering</h4>
              <p>
                Comprehensive civil engineering solutions with precision and
                quality craftsmanship.
              </p>
            </div>
            <div className="services-core-item">
              <span className="services-core-number">02</span>
              <i className="services-core-icon fa-solid fa-snowflake" />
              <h4>Air-Conditioning</h4>
              <p>
                Advanced HVAC systems designed for optimal climate control and
                energy efficiency.
              </p>
            </div>
            <div className="services-core-item">
              <span className="services-core-number">03</span>
              <i className="services-core-icon fa-solid fa-bolt" />
              <h4>Electromechanical</h4>
              <p>
                Expert electromechanical installations and maintenance services.
              </p>
            </div>
            <div className="services-core-item">
              <span className="services-core-number">04</span>
              <i className="services-core-icon fa-solid fa-couch" />
              <h4>Interiors &amp; Fit-Outs</h4>
              <p>
                Transform empty spaces into stunning, functional environments
                with modern design.
              </p>
            </div>
            <div className="services-core-item">
              <span className="services-core-number">05</span>
              <i className="services-core-icon fa-solid fa-cloud-sun-rain" />
              <h4>Weatherproofing</h4>
              <p>
                Professional weatherproofing solutions to protect your
                investment.
              </p>
            </div>
            <div className="services-core-item">
              <span className="services-core-number">06</span>
              <i className="services-core-icon fa-solid fa-microchip" />
              <h4>Electronics</h4>
              <p>
                State-of-the-art electronic systems installation and
                integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="expertise-capabilities">
        <div className="container">
          <div className="row g-5">
            {/* Our Expertise Column */}
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2>Our Expertise</h2>
                <p>Specialized Teams of Trained Experts</p>
              </div>
              <div className="timeline">
                <div className="row g-4">
                  {/* Item 1 */}
                  <div className="col-lg-4">
                    <div className="timeline-item">
                      <div className="timeline-icon">
                        <i className="bi bi-bullseye" />
                      </div>
                      <div className="timeline-card">
                        <h4>Turnkey Solutions</h4>
                        <p>
                          Complete project management from concept to completion
                          with timely delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="col-lg-4">
                    <div className="timeline-item">
                      <div className="timeline-icon">
                        <i className="bi bi-people-fill" />
                      </div>
                      <div className="timeline-card">
                        <h4>Qualified Workforce</h4>
                        <p>
                          Dedicated team of qualified engineers, technicians and
                          craftsmen.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="col-lg-4">
                    <div className="timeline-item">
                      <div className="timeline-icon">
                        <i className="bi bi-rulers" />
                      </div>
                      <div className="timeline-card">
                        <h4>Drawing &amp; Planning</h4>
                        <p>
                          Transform client drawings into well-furnished,
                          fabulous showplaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Our Capabilities Column */}
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2>Our Capabilities</h2>
                <p>Cutting-Edge Technology &amp; Craftsmanship</p>
              </div>
              <div className="timeline">
                <div className="row g-4">
                  {/* Item 1 */}
                  <div className="col-lg-4">
                    <div className="timeline-item">
                      <div className="timeline-icon">
                        <i className="bi bi-building" />
                      </div>
                      <div className="timeline-card">
                        <h4>Exhibition Preparation</h4>
                        <p>
                          Expert location preparation and setup for exhibitions
                          and events.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="col-lg-4">
                    <div className="timeline-item">
                      <div className="timeline-icon">
                        <i className="bi bi-gem" />
                      </div>
                      <div className="timeline-card">
                        <h4>Gypsum Mastery</h4>
                        <p>Incredible gypsum work with perfect finishing.</p>
                      </div>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="col-lg-4">
                    <div className="timeline-item">
                      <div className="timeline-icon">
                        <i className="bi bi-palette-fill" />
                      </div>
                      <div className="timeline-card">
                        <h4>Modern Aesthetics</h4>
                        <p>
                          Modernistic interior appearance that changes the way
                          spaces feel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title text-white d-inline-block">
              Our Core Values
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="value-box">
                <div className="value-icon">
                  <i className="bi bi-check-circle-fill" />
                </div>
                <h4 className="text-dark">Perfection</h4>
                <p>We cherish perfection in every project we undertake.</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="value-box">
                <div className="value-icon">
                  <i className="bi bi-person-check" />
                </div>
                <h4 className="text-dark">Commitment</h4>
                <p>Deep faith and commitment to client requirements.</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="value-box">
                <div className="value-icon">
                  <i className="bi bi-award-fill" />
                </div>
                <h4 className="text-dark">Quality</h4>
                <p>Impeccable quality that exceeds expectations.</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="value-box">
                <div className="value-icon">
                  <i className="bi bi-lightning-fill" />
                </div>
                <h4 className="text-dark">Innovation</h4>
                <p>Cutting-edge technology in every solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CLIENT LOGO SECTION START */}
      <div className="section-full p-t60 p-b60  Client-logo-style1-wrap">
        <div className="section-content">
          <div className="home-client-carousel2-wrap">
            {/* TITLE START*/}
            <div className="section-head center wt-small-separator-outer">
              <h2 className="wt-title title_split_anim">Our Partners</h2>
            </div>
            {/* TITLE END*/}
            {/* Swiper */}
            <div className="container clientlogos">
              <div className="row">
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/5.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/6.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/7.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/8.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/9.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/10.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/11.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/12.png" alt="" />
                    </div>
                  </div>
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
