import Image from "next/image";
import Scripts from "./components/Scripts";
import Header from "./components/Header";

export default function Home() {
  return (
   <>
  {/* Curser Pointer */}
  <div className="cursor" />
  <div className="cursor2" />
  <div className="page-wraper">
    {/* HEADER START */}
    <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
      <div className="main-bar-wraper  navbar-expand-lg">
        <div className="main-bar">
          <div className="clearfix">
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <a href="index.html">
                  <img
                    src="images/logo-dark.png"
                    alt="logo"
                    className="desktop-logo-show"
                  />
                  <img
                    src="images/logo-light.png"
                    alt="logo"
                    className="mobile-logo-show"
                  />
                </a>
              </div>
            </div>
            {/* NAV Toggle Button */}
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
            {/* MAIN Vav */}
            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
              <ul className=" nav navbar-nav">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About us </a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects </a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {/* Header Right Section*/}
            <div className="extra-nav header-1-nav">
              <ul className="company-site-info">
                {/* <li><i class="flaticon-phone-call"></i>00966 (01) 474 4411  /  00966 (01) 472 5295</li>
                          <li><i class="flaticon-arroba"></i>info@pyronics.co.uk</li>*/}
              </ul>
              <div className="extra-cell two h-cart-block">
                <a className="wt-cart cart-btn d-sms-none navSidebar-button">
                  <span className="link-inner">
                    <span className="woo-cart-count">
                      <i className="bi bi-facebook" />
                    </span>
                    <span className="woo-cart-count">
                      <i className="bi bi-instagram" />
                    </span>
                    <span className="woo-cart-count">
                      <i className="bi bi-twitter-x" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar popup Item */}
      <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black" />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                <i className="bi bi-x-square-fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Sidebar popup Item */}
    </header>
    {/* HEADER END */}
    {/* CONTENT START */}
    <div className="page-content">
      {/*Banner Setion Start*/}
      <div className="slider-outer">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
          </div>
          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/banner/pyro1.png"
                className="d-block w-100"
                alt="banner 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/banner/pyro2.png"
                className="d-block w-100"
                alt="banner 2"
              />
            </div>
          </div>
          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*Banner Setion End*/}
      {/* ABOUT ONE SECTION START */}
      <div
        className="section-full p-t60  p-b50  about-section-one-wrap"
        style={{ background: "#e1252a !important" }}
      >
        <div className="about-section-one">
          <div className="container-fluid">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-2 col-md-12 m-b30"></div>
                <div className="col-lg-8 col-md-12 m-b30">
                  <div className="about-section-two-right">
                    {/* TITLE START*/}
                    <div className="section-head left wt-small-separator-outer">
                      <h2 className="title_split text-white text-center">
                        Welcome to PYRONICS
                      </h2>
                      <p className="text-white text-justify">
                        PYRONICS Innovative Engineering Solution provides the
                        highest quality products and services possible for its
                        clients. We are committed to continuing education and
                        training. As quality improves, costs decrease because of
                        less rework and fewer mistakes. The result: improved
                        productivity, savings to our customers, and delivery of
                        our services ahead of schedule. PYRONICS complete suite
                        of services offers simplicity, and a single source for
                        all your engineering solution needs.{" "}
                      </p>
                    </div>
                    {/*<a href="about.html" class="site-button">Read More</a> */}
                    <a
                      href="about.html"
                      className="site-button"
                      style={{
                        display: "block",
                        border: "2px solid #fff",
                        borderRadius: 50,
                        color: "#fff",
                        padding: "12px 30px",
                        textAlign: "center",
                        margin: "0 auto",
                        width: 175
                      }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 m-b30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT ONE SECTION END */}
         {/* Slider Section */}
      <div
        className="twm-hvillas-2slider"
        style={{ background: "#ffffff", padding: "60px 0" }}
      >
        <div className="section">
          <div className="container">
            <h2
              className="wt-title text-center title_split_anim"
              style={{ color: "#000", marginBottom: 30 }}
            >
              Our Projects
            </h2>
            <div className="hvillas-sl-2">
              <div className="swiper-wrapper">
                {/*Column -1 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro1.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">01</div>
                      <div className="slide__title">
                        Kingdom Trade Centre, Riyadh
                      </div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -2 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro2.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">02</div>
                      <div className="slide__title">Centria, Riyadh</div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -3 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro3.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">03</div>
                      <div className="slide__title">Muraba Palace, Riyadh</div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -4 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro4.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">04</div>
                      <div className="slide__title">
                        Imam University, Riyadh
                      </div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -5 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro5.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">05</div>
                      <div className="slide__title">
                        King Abdullah Financial District, Riyadh
                      </div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -6 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro6.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">06</div>
                      <div className="slide__title">
                        AlSalam Aircraft Hanger-Riyadh
                      </div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -7 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro7.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">07</div>
                      <div className="slide__title">Hilton -Riyadh</div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
                {/*Column -8 */}
                <div className="swiper-slide">
                  <div className="people__card">
                    <img
                      src="images/project/pro8.jpg"
                      alt="Image"
                      className="people__card__image"
                    />
                    <div className="people__card__content">
                      <div className="slide__number">08</div>
                      <div className="slide__title">Holiday Inn-Jeddah</div>
                    </div>
                    <div className="slide__gradient" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Section */}
      {/* Category Carousal Section 
      <div class="section-full twm-category-carousal2-area">
          <div class="owl-carousel twm-category-carousal-slider">
              <!-- COLUMN 1 
              <div class="item">
                  <div class="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                      <span class="ao-our-categori-icon">
                          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                              <circle class="spin2" cx="400" cy="400" fill="none"
                                r="200" stroke-width="50" stroke="#E387FF"
                                stroke-dasharray="700 1400"
                                stroke-linecap="round" />
                          </svg>
                      </span>
                      <div class="twm-category-name">Highly qualified professionals</div>
                  </div>
              </div>
              <!-- COLUMN 2 
              <div class="item">
                  <div class="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                      <span class="ao-our-categori-icon">
                          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                              <circle class="spin2" cx="400" cy="400" fill="none"
                                r="200" stroke-width="50" stroke="#E387FF"
                                stroke-dasharray="700 1400"
                                stroke-linecap="round" />
                          </svg>
                      </span>
                      <div class="twm-category-name">International Expertise</div>
                  </div>
              </div>
              <!-- COLUMN 3 
              <div class="item">
                  <div class="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                      <span class="ao-our-categori-icon">
                          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                              <circle class="spin2" cx="400" cy="400" fill="none"
                                r="200" stroke-width="50" stroke="#E387FF"
                                stroke-dasharray="700 1400"
                                stroke-linecap="round" />
                          </svg>
                      </span>
                      <div class="twm-category-name">A single point of contact</div>
                  </div>
              </div>
              
          </div>
      </div>
      <!-- Category Carousal End */}
      {/* Counter Section Start */}
      <div
        className="section-full counter-outer-one-wrap p-t20 p-b20"
        style={{ backgroundImage: 'url("images/background/count-bg.jpg")' }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-outer-one">
                <span className="counter" id="yearsExperience">
                  35
                </span>
                <div className="icon-content-info">Years of Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-outer-one">
                <span className="counter">5</span>
                <div className="icon-content-info">Certifications</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-outer-one">
                <div className="counter-line">
                  <span className="counter">100</span>
                  <span className="plus">+</span>
                </div>
                <div className="icon-content-info">Projects Completed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-outer-one">
                <div className="counter-line">
                  <span className="counter">50</span>
                  <span className="plus">+</span>
                </div>
                <div className="icon-content-info">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Section End */}
      {/* WE PROVIDE SERVICE SECTION START */}
      <div className="section-full p-t60 p-b60">
        <div className="container">
          {/* TITLE START*/}
          <div className="section-head center wt-small-separator-outer">
            <h2 className="wt-title title_split_anim">Our Services</h2>
          </div>
          {/* TITLE END*/}
        </div>
        <div className="container-fluid">
          <div className="section-content">
            <div className="service-icon-box-wrap">
              <div className="owl-carousel twm-servi-carousal-slider">
                <div className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title">
                          <a href="service-detail.html">
                            Fire Alarm System Services
                          </a>
                        </h3>
                        <p>
                          Complete testing, inspection, cleaning, and
                          calibration of fire alarm systems to ensure reliable
                          performance, reduced false alarms, and full NFPA
                          compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title">
                          <a href="service-detail.html">
                            Fire Suppression System Services
                          </a>
                        </h3>
                        <p>
                          Expert inspection and maintenance of chemical, wet,
                          and dry fire suppression systems, including hazard
                          analysis and code compliance support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title">
                          <a href="service-detail.html">Monitoring Services</a>
                        </h3>
                        <p>
                          24/7 professional monitoring services ensuring rapid
                          response and continuous protection for residential and
                          commercial facilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title">
                          <a href="service-detail.html">
                            24/7 Emergency Services
                          </a>
                        </h3>
                        <p>
                          Round-the-clock emergency support with immediate
                          dispatch and customized response plans for complete
                          safety coverage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title">
                          <a href="service-detail.html">
                            Customer Training &amp; Support
                          </a>
                        </h3>
                        <p>
                          On-site system training and ongoing technical support
                          to ensure safe operation, efficiency, and long-term
                          reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title">
                          <a href="service-detail.html">
                            Inspection &amp; Maintenance Services
                          </a>
                        </h3>
                        <p>
                          Comprehensive inspection and preventive maintenance
                          with secure online access to detailed service reports.
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
      {/* WE PROVIDE SERVICE SECTION END */}
      {/* CLIENT LOGO SECTION START */}
      <div className="section-full  Client-logo-style1-wrap">
        <div className="section-content">
          <div className="home-client-carousel2-wrap">
            {/* Swiper */}
            <div className="swiper home-client-carousel2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/5.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/6.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/7.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/8.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/9.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/10.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <img src="images/client-logo/11.png" alt="" />
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
                    <a href="/contact.html">Contact</a>
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

