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
              <h2 className="text-white text-center">Services </h2>
            </div>
          </div>
          {/* About Section */}
          <section id="about" className="about-section p-t60 p-b60">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="about-text">
                    <h2 className="title_split text-center">Smart Solutions. Expert Execution. Built for Every Industry</h2>
                    <p>


                      At Pyronics, we design, deploy, and support future-ready IT and Network Infrastructure solutions
                       tailored to your business needs. Our approach blends technical expertise with strategic insight 
                       to deliver reliable, scalable, and high-performance systems that grow with your organization.{" "}
                    </p>
                    <p>
                      February, 2011 marked the start of PYRONICS 18th year of
                      operations. Incorporated February 04, 1993 as PYRONICS
                      Innovative Engineering Solution, we began as a contracting and
                      maintenance company in Kingdom of Saudi Arabia, and later
                      expanded to serve our customers on selected projects in
                      Bahrain, UAE, India and United Kingdom.
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

          <section className="services-core-section">
            <div className="services-core-container">
              <div className="services-core-header">
                <h2>
                  Our <strong>Services</strong>
                </h2>
                <p className="subtitle">Expert-Led Technology Services</p>
              </div>

              <div
                className="services-core-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "24px",
                }}
              >
                <div className="services-core-item">
                  <span className="services-core-number">01</span>
                   <i className="services-core-icon fa-solid bi bi-kanban fa-diagram-project"></i>
                  <h4>Project Management</h4>
                  <p>
                    We manage end-to-end project lifecycles with structured planning,
                    precise execution, and continuous oversight—ensuring on-time delivery,
                    uncompromised quality, and complete client satisfaction.
                  </p>
                  <a href="/project-management" className="servicesbut">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

                <div className="services-core-item">
                  <span className="services-core-number">02</span>
                  <i className="services-core-icon fa-solid bi bi-lightbulb "></i>
                  <h4>Solution Planning</h4>
                  <p>
                    Our experts design customized, scalable technology solutions aligned
                    with your business objectives. We focus on seamless integration,
                    future readiness, and long-term operational efficiency across all
                    environments.
                  </p>
                  <a href="/solution-planning" className="servicesbut">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

                <div className="services-core-item">
                  <span className="services-core-number">03</span>
                   <i className="services-core-icon fa-solid bi bi-tools"></i>
                  <h4>Installations</h4>
                  <p>
                    Pyronics delivers professional system installations with minimal
                    operational disruption. Every deployment is executed with accuracy,
                    performance optimization, and strict compliance with international
                    standards and best practices.
                  </p>
                  <a href="/installations" className="servicesbut">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

                <div className="services-core-item">
                  <span className="services-core-number">04</span>
                   <i className="services-core-icon fa-solid bi bi-headset "></i>
                  <h4>Support Services</h4>
                  <p>
                    Our responsive support services provide reliable troubleshooting,
                    proactive monitoring, and ongoing maintenance—ensuring uninterrupted
                    operations and maximum system uptime.
                  </p>
                  <a href="/support-services" className="servicesbut">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>
              </div>
            </div>
          </section>


          {/* Products & Partners Section }
          <section className="products-distribution">
            <div className="container">
              <div className="row g-5">
                {/* Products & Distribution Column}
                <div className="col-lg-12">
                  <div className="section-header">
                    <h2>Products &amp; Distribution</h2>
                    <h4>Authorized Distributor</h4>
                  </div>
                  <div className="timeline">
                    <div className="row g-4">
                      {/* Item 1 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon success">✓</div>
                          <div className="timeline-card">
                            <p>
                              <strong>Honeywell Products</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Item 2 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon success">✓</div>
                          <div className="timeline-card">
                            <p>
                              <strong>Securiton Products</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Item 3 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon success">✓</div>
                          <div className="timeline-card">
                            <p>Aspirating Smoke Detection Pioneer</p>
                          </div>
                        </div>
                      </div>
                      {/* Item 4 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon success">✓</div>
                          <div className="timeline-card">
                            <p>50+ Years Industry Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product Range Column }
                <div className="col-lg-12">
                  <div className="section-header">
                    <h2>&nbsp;</h2>
                    <h4>Product Range</h4>
                  </div>
                  <div className="timeline">
                    <div className="row g-4">
                      {/* Item 1 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon fire">🔥</div>
                          <div className="timeline-card">
                            <p>Aspirating Smoke Detection Systems</p>
                          </div>
                        </div>
                      </div>
                      {/* Item 2 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon fire">🔥</div>
                          <div className="timeline-card">
                            <p>Linear Heat Detectors</p>
                          </div>
                        </div>
                      </div>
                      {/* Item 3 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon fire">🔥</div>
                          <div className="timeline-card">
                            <p>Beam Detectors</p>
                          </div>
                        </div>
                      </div>
                      {/* Item 4 }
                      <div className="col-lg-3">
                        <div className="timeline-item">
                          <div className="timeline-icon fire">🔥</div>
                          <div className="timeline-card">
                            <p>Wireless Radio Fire Alarm Devices</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ABOUT ONE SECTION START }
          <div className="section-full p-t90  p-b50  about-section-one-wrap">
            <div className="about-section-new">
              <div className="container">
                <div className="section-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="about-section-two-right">
                        {/* TITLE START}
                        <div className="section-head left wt-small-separator-outer">
                          <div style={{ textAlign: "left" }}>
                            <h2 className="section-title">Design Capabilities</h2>
                          </div>
                          <h4 className="text-left fw-bold">
                            Complete Design Services
                          </h4>
                          <p className="mb-0">
                            Sinmar Fire &amp; Security has the capability to use
                            client requirements and specifications as a basis to
                            carry out full design and produce detailed working
                            drawings using the latest computer-aided design
                            software.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 m-b30 about-max-two-position">
                      <div className="about-us-img">
                        <img
                          src="images/services/serveimg.jpg"
                          className="img-fluid"
                          alt="About Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { ABOUT ONE SECTION END */}
          
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

    <!-- Maintenance Services Section }
          <section
            className="planned-maintenance-services"
            style={{ paddingBottom: 60 }}
          >
            <div className="core-values-header">
              <h2>
                Planned <strong>Preventive Maintenance Services</strong>
              </h2>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-number">01</span>
                <div className="value-content">
                  <h4>
                    Weekly, monthly, quarterly, semi-annual, and annual testing,
                    service, and inspection
                  </h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">02</span>
                <div className="value-content">
                  <h4>Full-time site management</h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">03</span>
                <div className="value-content">
                  <h4>System service and inspection</h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">04</span>
                <div className="value-content">
                  <h4>Emergency call-out support</h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">05</span>
                <div className="value-content">
                  <h4>Modifications and system extensions</h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">06</span>
                <div className="value-content">
                  <h4>Training services for all systems</h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">07</span>
                <div className="value-content">
                  <h4>Spares supply and refurbishment</h4>
                </div>
              </div>
              <div className="value-item">
                <span className="value-number">08</span>
                <div className="value-content">
                  <h4>Calibration services</h4>
                </div>
              </div>
            </div>
          </section>
          {/* CLIENT LOGO SECTION START }
          <div className="section-full p-t60 p-b60  Client-logo-style1-wrap">
            <div className="section-content">
              <div className="home-client-carousel2-wrap">
                {/* TITLE START}
                <div className="section-head center wt-small-separator-outer">
                  <h2 className="wt-title title_split_anim">Our Partners</h2>
                </div>
                {/* TITLE END}
                {/* Swiper }
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
        {/* CONTENT END }
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
