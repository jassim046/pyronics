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
              <h2 className="text-white text-center"> Remote Telemetry Units</h2>
            </div>
          </div>

			{/* Prevent custom.js crash */}
          <span id="yearsExperience" style={{ display: "none" }}>0</span>
			
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
                            Remote Telemetry Units
                          </h2>
                          <p>
                            Remote Telemetry Units (RTUs) are a critical element of modern SCADA systems, enabling real-time monitoring and intelligent control of remote and mission-critical assets. At Pyronics, we deliver robust RTU solutions designed for deployment in demanding environments such as power substations, water and wastewater facilities, transportation networks, and industrial infrastructure. Our RTUs reliably collect, process, and transmit operational data while supporting automated actions to improve efficiency and responsiveness. <br />
                            Highly configurable and adaptable, Pyronics RTUs allow operators to define precise monitoring parameters and set thresholds for automated responses. From activating heating systems during low-temperature conditions to adjusting pumping operations based on flow data, our RTU solutions enable smarter, data-driven decision-making. This flexibility makes them ideal for a wide range of industries and environmental conditions where reliability, accuracy, and control are essential.{" "}
                          </p>
                        </div>
                        <a href="/contact" className="site-button">
                          Learn More
                        </a>
                      </div>

                    </div>
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="about-us-img">
                        <img
                          src="images/tech/monitor.jpg"
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


          {/* ABOUT ONE SECTION END */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .products-distribution {\n      padding: 60px 0;\n      background: #f9fafb;\n    }\n\n    .section-header h2 {\n      font-size: 28px;\n      font-weight: 700;\n      margin-bottom: 8px;\n      color: #1f2937;\n    }\n\n    .section-header h4 {\n      color: #e1252a;\n      font-size: 20px;\n      font-weight: 600;\n      margin-bottom: 13px;\n      text-align: center;\n    }\n\n    /* Timeline Structure */\n    .timeline {\n      position: relative;\n      padding: 0;\n      list-style: none;\n    }\n\n    /* Timeline Line */\n    .timeline::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 28px;\n      width: 3px;\n      background: #d1d5db;\n    }\n\n    /* Desktop: Horizontal Line */\n    @media (min-width: 992px) {\n      .timeline::before {\n        top: 28px;\n        left: 0;\n        right: 0;\n        width: 100%;\n        height: 3px;\n        bottom: auto;\n      }\n    }\n\n    /* Timeline Item */\n    .timeline-item {\n      position: relative;\n      margin-bottom: 30px;\n      padding-left: 70px;\n    }\n\n    @media (min-width: 992px) {\n      .timeline-item {\n        padding-left: 0;\n        margin-bottom: 0;\n      }\n    }\n\n    /* Timeline Icon */\n    .timeline-icon {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 56px;\n      height: 56px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: linear-gradient(135deg, #e1252a 0%, #e1252a 100%);\n      color: #fff;\n      border-radius: 50%;\n      font-size: 26px;\n      z-index: 2;\n      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n    }\n\n    @media (min-width: 992px) {\n      .timeline-icon {\n        left: 50%;\n        transform: translateX(-50%);\n        top: -58px;\n      }\n    }\n#yearsExperience{\n    display:none;\n}\n    /* Timeline Card */\n    .timeline-card {\n      background: #fff;\n      padding: 24px;\n      border-radius: 12px;\n      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n      transition: all 0.3s ease;\n      min-height: 100px;\n      display: flex;\n      align-items: center;\n    }\n\n    .timeline-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);\n    }\n\n    @media (min-width: 992px) {\n      .timeline-card {\n        margin-top: 64px;\n      }\n    }\n\n    .timeline-card p {\n      font-size: 15px;\n      color: #374151;\n      line-height: 1.6;\n      margin: 0;\n    }\n\n    .timeline-card strong {\n      color: #1f2937;\n      font-weight: 600;\n    }\n\n    /* Remove bottom margin from last item */\n    .timeline-item:last-child {\n      margin-bottom: 0;\n    }\n\n    /* Success Icon (checkmark) styling */\n    .timeline-icon.success {\n      background: linear-gradient(135deg, #e31e24 0%, #e1252a 100%);\n      box-shadow: 0 4px 12px #e1252a;\n      font-size: 30px;\n      font-weight: bold;\n    }\n\n    /* Fire Icon styling */\n    .timeline-icon.fire {\n      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);\n      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n    }\n  '
            }}
          />
          <section className="expertise-capabilities">
            <div className="container">
              <div className="row g-5">

                {/* ================= OUR EXPERTISE ================= */}
                <div className="col-lg-12">
                  <div className="section-header text-center mb-4">
                    <h2>Our Remote Telemetry Solutions</h2>
                    <p>Pyronics delivers versatile Remote Telemetry Units built for modern industrial needs</p>
                  </div>

                  <div className="timeline">
                    <div className="row g-4">

                      {/* Siemens */}
                      <div className="col-lg-3 col-md-6">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-cpu"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>Siemens RTUs</h4>
                              <p>
                                Precision engineered telemetry solutions delivering high reliability,
                                flexibility, and seamless integration for industrial and infrastructure applications.
                              </p><br />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rockwell */}
                      <div className="col-lg-3 col-md-6">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-gear-fill"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>Rockwell RTUs</h4>
                              <p>
                                High-performance RTUs designed for industrial automation and process control,
                                enabling secure, real-time monitoring and dependable system performance.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Kingfisher */}
                      <div className="col-lg-3 col-md-6">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-diagram-3-fill"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>Kingfisher RTUs</h4>
                              <p>
                                Advanced SCADA-ready RTUs engineered for robust data acquisition,
                                remote monitoring, and intelligent control in demanding environments.
                              </p><br />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TBox */}
                      <div className="col-lg-3 col-md-6">
                        <div className="timeline-item">
                          <div className="timeline-icon success">
                            <i className="bi bi-hdd-network-fill"></i>
                          </div>
                          <div className="timeline-card">
                            <div className="timeline-text">
                              <h4>TBox RTUs</h4>
                              <p>
                                Secure and flexible remote telemetry solutions designed for automation
                                and monitoring of critical assets across widely distributed locations.
                              </p><br />
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


          {/* ABOUT ONE SECTION START */}
          <div className="section-full p-t50 p-b50 about-section-one-wrap">
            <div className="about-section-new">
              <div className="container">
                <div className="section-content">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 m-b30">
                      <div className="about-section-two-right">
                        {/* TITLE START */}
                        <div className="section-head left wt-small-separator-outer">
                          <div style={{ textAlign: "left" }}>
                          </div>

                          
                          <h3 className="p-t30">
                            
                          "Engineered for reliability and adaptability, Pyronics RTUs serve as the intelligent
                           bridge between field devices and central control systems."
                          </h3>
                        </div>
                        {/* TITLE END */}
                      </div>
                    </div>

                    {/* IMAGE SECTION (UNCHANGED) */}
                    {/*
          <div className="col-lg-6 col-md-12 m-b30 about-max-two-position">
            <div className="about-us-img">
              <img
                src="images/services/serveimg.jpg"
                className="img-fluid"
                alt="About Image"
              />
            </div>
          </div>
          */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ABOUT ONE SECTION END */}



          {/* ABOUT ONE SECTION START */}
          <section className="services-core-section">
            <div className="services-core-header">
              <h2>  Key Benefits  <strong>of RTUs</strong>    </h2>
              <p className="subtitle">Smarter control through automation, real-time insights, and remote access.</p>
            </div>


            <div className="services-core-container">
              <div className="services-core-grid">

                {/* 01 Minimized Downtime */}
                <div className="services-core-item">
                  <span className="services-core-number">01</span>
                  <i className="services-core-icon fa-solid fa-clock-rotate-left" />
                  <h4>Minimized Downtime</h4>
                  <p>
                    By continuously detecting anomalies and responding instantly, RTUs
                    help prevent system failures and keep operations running smoothly,
                    avoiding costly disruptions and unplanned outages.
                  </p>
                </div>

                {/* 02 Enhanced Safety */}
                <div className="services-core-item">
                  <span className="services-core-number">02</span>
                  <i className="services-core-icon fa-solid fa-shield-halved" />
                  <h4>Enhanced Safety</h4>
                  <p>
                    RTUs monitor hazardous conditions in real time, trigger alarms, and
                    initiate protective actions to safeguard personnel, equipment, and
                    critical infrastructure.
                  </p>
                </div>

                {/* 03 Flexible & Scalable */}
                <div className="services-core-item">
                  <span className="services-core-number">03</span>
                  <i className="services-core-icon fa-solid fa-arrows-up-down-left-right" />
                  <h4>Flexible &amp; Scalable</h4>
                  <p>
                    Designed for adaptability, RTUs can be customized to specific
                    operational requirements and easily expanded as systems grow,
                    making them a future-proof investment.
                  </p>
                </div>

                {/* 04 Sustainability */}
                <div className="services-core-item">
                  <span className="services-core-number">04</span>
                  <i className="services-core-icon fa-solid fa-leaf" />
                  <h4>Sustainability</h4>
                  <p>
                    RTUs optimize system performance to reduce energy consumption and
                    resource waste, supporting environmentally responsible and
                    sustainable operations.
                  </p>
                </div>

                {/* 05 Remote Access */}
                <div className="services-core-item">
                  <span className="services-core-number">05</span>
                  <i className="services-core-icon fa-solid fa-wifi" />
                  <h4>Remote Access</h4>
                  <p>
                    Operators can monitor, configure, and control RTUs remotely from
                    anywhere, making them ideal for assets located in hard-to-reach
                    or hazardous environments.
                  </p>
                </div>

                {/* 06 Real-Time Data & Insights */}
                <div className="services-core-item">
                  <span className="services-core-number">06</span>
                  <i className="services-core-icon fa-solid fa-chart-line" />
                  <h4>Real-Time Data &amp; Insights</h4>
                  <p>
                    RTUs continuously collect and transmit real-time data from remote
                    sites, giving operators a clear, up-to-date view of asset
                    performance and system health.
                  </p>
                </div>

                {/* 07 Cost Efficiency */}
                <div className="services-core-item">
                  <span className="services-core-number">07</span>
                  <i className="services-core-icon fa-solid fa-hand-holding-dollar" />
                  <h4>Cost Efficiency</h4>
                  <p>
                    By reducing manual intervention and preventing unplanned
                    breakdowns, RTUs lower labor, maintenance, and repair costs,
                    delivering long-term operational savings.
                  </p>
                </div>

                {/* 08 Automation & Smart Control */}
                <div className="services-core-item">
                  <span className="services-core-number">08</span>
                  <i className="services-core-icon fa-solid fa-gears" />
                  <h4>Automation &amp; Smart Control</h4>
                  <p>
                    Beyond monitoring, RTUs function as autonomous controllers,
                    automatically executing predefined actions when operating
                    conditions demand immediate response.
                  </p>
                </div>

                {/* 09 Better Decision Making */}
                <div className="services-core-item">
                  <span className="services-core-number">09</span>
                  <i className="services-core-icon fa-solid fa-brain" />
                  <h4>Better Decision Making</h4>
                  <p>
                    With access to both historical and live data, organizations can
                    identify trends, optimize processes, improve planning, and make
                    smarter, data-driven decisions.
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
