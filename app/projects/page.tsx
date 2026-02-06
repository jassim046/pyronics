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
          <h2 className="text-white text-center">Our Projects </h2>
        </div>
      </div>
      {/* Project START */}
      <div className="section-full p-t90 p-b90 projects-outer-full">
        <div className="container">
          <div className="section-content">
            <div className="project-box-style1-outer row clearfix d-flex justify-content-center flex-wrap">
              {/* COLUMNS 1 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro1.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">Kingdom Trade Centre, Riyadh</h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 2 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro2.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">Centria, Riyadh</h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 3 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro3.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">Muraba Palace, Riyadh</h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 4 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro4.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">Imam University, Riyadh</h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 5 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro5.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">
                      King Abdullah Financial District, Riyadh
                    </h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 6 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro6.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">AlSalam Aircraft Hanger-Riyadh</h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 3 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro7.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">Hilton -Riyadh</h3>
                  </div>
                </div>
              </div>
              {/* COLUMNS 4 */}
              <div className=" col-xl-4 col-lg-6 col-md-6">
                <div className="twm-pro-st2">
                  <div className="twm-pro-st2-media">
                    <img src="images/project/pro8.jpg" alt="img20" />
                  </div>
                  <div className="twm-pro-st2-inner">
                    <h3 className="wt-title">Holiday Inn-Jeddah</h3>
                    <span id="yearsExperience">0</span>
                  </div>
                </div>
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
  <style
    dangerouslySetInnerHTML={{
      __html: "\n#yearsExperience{\n    display:none;\n}\n"
    }}
  />

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
