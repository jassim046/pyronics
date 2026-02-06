import Image from "next/image";
import Scripts from "./components/Scripts";
import Script from "next/script";
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
          {/* WE PROVIDE SERVICE SECTION START */}
<div className="section-full p-t60 p-b60">
    <div className="container-fluid">
        {/* TITLE START */}
        <div className="section-head center wt-small-separator-outer">
            <h2 className="wt-title title_split_anim">Our Services</h2>
        </div>
        {/* TITLE END */}

        <div className="section-content">
            <div className="service-icon-box-wrap">
                <div className="row g-4">

                    {/* Project Management */}
                    <div className="col-lg-3 col-md-12">
                        <div className="service-icon-box-one-section">
                            <div className="service-icon-box-one">
                                <div className="service-icon-content d-flex flex-column h-95">
                                    <div className="mb-3">
                                        <i className="services-core-icon fa-solid bi bi-kanban fa-diagram-project"></i>
                                    </div>
                                    <h3 className="wt-title">
                                        <a href="/project-management">Project Management</a>
                                    </h3>
                                    <p>
                                        At Pyronics, our Project Management services are designed to deliver projects with precision, control, and uncompromising quality. 
                                    </p>
                                    <a href="/project-management" className="servicesbt mt-auto" >
                                        Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Solution Planning */}
                    <div className="col-lg-3 col-md-12">
                        <div className="service-icon-box-one-section">
                            <div className="service-icon-box-one">
                                <div className="service-icon-content d-flex flex-column h-95">
                                    <div className="mb-3">
                                        <i className="services-core-icon fa-solid bi bi-lightbulb "></i>
                                    </div>
                                    <h3 className="wt-title">
                                        <a href="/solution-planning">Solution Planning</a>
                                    </h3>
                                    <p>
                                        Our Solution Planning service focuses on identifying the right
                                        opportunities and designing intelligent, future-ready
                                        solutions that align perfectly with your business objectives
                                        and operational needs.
                                    </p>
                                    <a href="/solution-planning" className="servicesbt mt-auto">
                                        Read More <i className="fa-solid fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Installations */}
                    <div className="col-lg-3 col-md-12">
                        <div className="service-icon-box-one-section">
                            <div className="service-icon-box-one">
                                <div className="service-icon-content d-flex flex-column h-95">
                                    <div className="mb-3">
                                        <i className="services-core-icon fa-solid bi bi-tools"></i>
                                    </div>
                                    <h3 className="wt-title">
                                        <a href="/installations">Installations</a>
                                    </h3>
                                    <p>
                                        At Pyronics, we deliver installations with precision,
                                        efficiency, and technical expertise, ensuring systems are
                                        deployed correctly, safely, and ready for optimal performance.
                                    </p>
                                    <a href="/installations" className="servicesbt mt-auto">
                                        Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Services */}
                    <div className="col-lg-3 col-md-12">
                        <div className="service-icon-box-one-section">
                            <div className="service-icon-box-one">
                                <div className="service-icon-content d-flex flex-column h-95">
                                    <div className="mb-3">
                                        <i className="services-core-icon fa-solid bi bi-headset "></i>
                                    </div>
                                    <h3 className="wt-title">
                                        <a href="/support-services">Support Services</a>
                                    </h3>
                                    <p>
                                        Our Support Services are designed to keep your systems running
                                        flawlessly and your business operations uninterrupted, with
                                        proactive monitoring, rapid issue resolution, and expert
                                        technical assistance.
                                    </p>
                                    <a href="/support-services" className="servicesbt mt-auto">
                                        Read More <i className="fa-solid fa-arrow-right"></i> </a>
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


<div
  className="twm-hvillas-2slider"
  style={{ background: "", padding: "60px 0" }}
>
  <div className="section">
    <div className="container">
      <h2
        className="wt-title text-center title_split_anim"
        style={{ color: "#000", marginBottom: 30 }}
      >
        Technologies
      </h2>

      <div className="hvillas-sl-2">
        <div className="swiper-wrapper">

          {/* 01 */}
          <div className="swiper-slide">
            <Link href="/data-center-infrastructure">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/infrastructure.jpg"
                  alt="Data Center Infrastructure"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">01</div>
                  <div className="slide__title">Data Center Infrastructure</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 02 */}
          <div className="swiper-slide">
            <Link href="/cyber-security">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/cyber.jpg"
                  alt="Cyber Security"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">02</div>
                  <div className="slide__title">Cyber Security</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 03 */}
          <div className="swiper-slide">
            <Link href="/networking-solutions">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/networking.jpg"
                  alt="Networking Solutions"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">03</div>
                  <div className="slide__title">Networking Solutions</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 04 */}
          <div className="swiper-slide">
            <Link href="/passive-infrastructure">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/passive.jpg"
                  alt="Passive Infrastructure"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">04</div>
                  <div className="slide__title">Passive Infrastructure</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 05 */}
          <div className="swiper-slide">
            <Link href="/physical-security">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/security.jpg"
                  alt="Physical Security"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">05</div>
                  <div className="slide__title">Physical Security</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 06 */}
          <div className="swiper-slide">
            <Link href="/audio-video-distribution">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/avd.jpg"
                  alt="Audio Video Distribution"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">06</div>
                  <div className="slide__title">Audio / Video Distribution</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 07 */}
          <div className="swiper-slide">
            <Link href="/fire-safety">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/fire.jpg"
                  alt="Fire & Safety"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">07</div>
                  <div className="slide__title">Fire &amp; Safety</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 08 */}
          <div className="swiper-slide">
            <Link href="/sound-and-paging">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/sound.jpg"
                  alt="Sound & Paging"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">08</div>
                  <div className="slide__title">Sound &amp; Paging</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 09 */}
          <div className="swiper-slide">
            <Link href="/time-synchronization">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/time.jpg"
                  alt="Time Synchronization"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">09</div>
                  <div className="slide__title">Time Synchronization</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

          {/* 10 */}
          <div className="swiper-slide">
            <Link href="/ip-telephony">
              <div className="people__card cursor-pointer">
                <img
                  src="images/tech/telephone.jpg"
                  alt="IP Telephony"
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">10</div>
                  <div className="slide__title">IP Telephony</div>
                </div>
                <div className="slide__gradient" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>



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
