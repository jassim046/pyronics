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
        {/* HEADER END */}
        {/* CONTENT START */}
        <div className="page-content">
          <div className="page-breadcrumb">
            <div aria-label="breadcrumb" className="viewbreadcrumb text-center">
              <h2 className="text-white text-center">Installations</h2>
            </div>
          </div>
          {/* About Section */}
          <section id="about" className="about-section p-t60 p-b60">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="about-text">
                    <h2 className="title_split text-center">Installations</h2>
                    <p>
                      At Pyronics, we deliver installations with precision, efficiency, and technical expertise. From structured cabling to advanced IT systems, our team ensures every solution is implemented to meet both design standards and operational objectives. Installation is more than just placing equipment—it’s about laying the groundwork for seamless, long-term performance.
                    </p>
                    <p>
                      Whether it’s building a new data center or integrating systems into existing infrastructure, Pyronics guarantees that all components are installed following best practices and compliance standards. Our certified professionals handle everything—from hardware setup to network testing—so your systems operate flawlessly from day one.</p>

                    <p> We go beyond installation by providing full system commissioning. This includes verification, testing, and optimization to ensure your systems perform reliably under real-world conditions. With Pyronics, your business operations can start or resume smoothly, without delays or unexpected issues.{" "}
                    </p>
                    <span id="yearsExperience">0</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .products-distribution {\n      padding: 60px 0;\n      background: #f9fafb;\n    }\n\n    .section-header h2 {\n      font-size: 28px;\n      font-weight: 700;\n      margin-bottom: 8px;\n      color: #1f2937;\n    }\n\n    .section-header h4 {\n      color: #e1252a;\n      font-size: 20px;\n      font-weight: 600;\n      margin-bottom: 13px;\n      text-align: center;\n    }\n\n    /* Timeline Structure */\n    .timeline {\n      position: relative;\n      padding: 0;\n      list-style: none;\n    }\n\n    /* Timeline Line */\n    .timeline::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 28px;\n      width: 3px;\n      background: #d1d5db;\n    }\n\n    /* Desktop: Horizontal Line */\n    @media (min-width: 992px) {\n      .timeline::before {\n        top: 28px;\n        left: 0;\n        right: 0;\n        width: 100%;\n        height: 3px;\n        bottom: auto;\n      }\n    }\n\n    /* Timeline Item */\n    .timeline-item {\n      position: relative;\n      margin-bottom: 30px;\n      padding-left: 70px;\n    }\n\n    @media (min-width: 992px) {\n      .timeline-item {\n        padding-left: 0;\n        margin-bottom: 0;\n      }\n    }\n\n    /* Timeline Icon */\n    .timeline-icon {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 56px;\n      height: 56px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: linear-gradient(135deg, #e1252a 0%, #e1252a 100%);\n      color: #fff;\n      border-radius: 50%;\n      font-size: 26px;\n      z-index: 2;\n      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n    }\n\n    @media (min-width: 992px) {\n      .timeline-icon {\n        left: 50%;\n        transform: translateX(-50%);\n        top: -58px;\n      }\n    }\n#yearsExperience{\n    display:none;\n}\n    /* Timeline Card */\n    .timeline-card {\n      background: #fff;\n      padding: 24px;\n      border-radius: 12px;\n      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n      transition: all 0.3s ease;\n      min-height: 100px;\n      display: flex;\n      align-items: center;\n    }\n\n    .timeline-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);\n    }\n\n    @media (min-width: 992px) {\n      .timeline-card {\n        margin-top: 64px;\n      }\n    }\n\n    .timeline-card p {\n      font-size: 15px;\n      color: #374151;\n      line-height: 1.6;\n      margin: 0;\n    }\n\n    .timeline-card strong {\n      color: #1f2937;\n      font-weight: 600;\n    }\n\n    /* Remove bottom margin from last item */\n    .timeline-item:last-child {\n      margin-bottom: 0;\n    }\n\n    /* Success Icon (checkmark) styling */\n    .timeline-icon.success {\n      background: linear-gradient(135deg, #e31e24 0%, #e1252a 100%);\n      box-shadow: 0 4px 12px #e1252a;\n      font-size: 30px;\n      font-weight: bold;\n    }\n\n    /* Fire Icon styling */\n    .timeline-icon.fire {\n      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);\n      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n    }\n  '
            }}
          />


          {/* Products & Partners Section */}
          <section className="products-distribution">
            <div className="container">
              <div className="row g-5">
                {/* Timeline */}
                <div className="col-lg-12">
                  <div className="timeline">
                    <div className="row g-4">

                      {/* 1 */}
                      <div className="col-lg-4">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-server"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>Data Center Installation</h4>
                              <p>
                                Complete setup for new or upgraded data centers, including servers, racks, power systems, and connectivity, ensuring a robust and scalable infrastructure.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2 */}
                      <div className="col-lg-4">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-diagram-3"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>Rack & Cabling</h4>
                              <p>
                                Professional installation of network racks and structured cabling for organized layouts, efficient operations, and easy future scalability.
                              </p><br />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3 */}
                      <div className="col-lg-4">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-laptop"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>On-Site Configuration</h4>
                              <p>
                                Tailored setup of devices, software installation, and system configuration designed to meet your specific environment and business requirements.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="timeline">
                    <div className="row g-4">

                      {/* 4 */}
                      <div className="col-lg-6">
                        <div className="timeline-item">
                          <div className="timeline-icon fire">
                            <i className="bi bi-puzzle"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>System Integration</h4>
                              <p>
                                Seamless integration of devices and platforms into a unified ecosystem, connecting IT, security, and communication systems for smooth operations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 5 */}
                      <div className="col-lg-6">
                        <div className="timeline-item">
                          <div className="timeline-icon fire">
                            <i className="bi bi-check2-circle"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>Commissioning Support</h4>
                              <p>
                                Comprehensive testing, verification, and optimization to ensure all installations operate reliably and meet performance standards from day one.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
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
