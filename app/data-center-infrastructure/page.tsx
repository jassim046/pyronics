import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* Curser Pointer */}
      <div className="cursor" />
      <div className="cursor2" />

      <div className="page-wraper">

        {/* ================= HEADER START ================= */}
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

<div className="header-nav collapse navbar-collapse justify-content-center">
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

              </div>
            </div>
          </div>
        </header>
        {/* ================= HEADER END ================= */}


        {/* ================= CONTENT START ================= */}
        <div className="page-content">

          {/* Breadcrumb */}
          <div className="page-breadcrumb">
            <div className="viewbreadcrumb text-center">
              <h2 className="text-white">Data Center Infrastructure</h2>
            </div>
          </div>

          {/* About Section */}
          <section className="about-section p-t90 p-b60">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-lg-6 m-b30">
                  <h2>Data Center Infrastructure</h2>
                  <p>
                    In a digital-first world, robust data center infrastructure is critical to business performance. At Pyronics, we design and implement reliable, scalable data center environments that ensure uninterrupted operations, enhanced security, and long-term efficiency.
                  </p>
                  <p>
                    From core hardware to intelligent monitoring, our integrated solutions are built to support evolving enterprise demands. Whether establishing a new facility or modernizing an existing one, Pyronics delivers optimized infrastructure designed for performance, resilience, and sustainable growth.
                  </p>
                  <a href="/contact" className="site-button">Read More</a>
                </div>

                <div className="col-lg-6 m-b30">
                  <img
                    src="images/tech/infrastructure.jpg"
                    className="img-fluid"
                    alt="Data Center Infrastructure"
                  />
                </div>

              </div>
            </div>
          </section>


          {/* Services Core Section */}
          <section className="services-core-section p-b60">
            <div className="container">
              <div className="row">

                {[
                  {
                    number: "01",
                    icon: "fa-server",
                    title: "High-Performance Servers",
                    text: "Enterprise-grade servers engineered for fast data processing, application stability, and reliable computing."
                  },
                  {
                    number: "02",
                    icon: "fa-database",
                    title: "Scalable Storage Solutions",
                    text: "Secure and scalable storage systems designed for growing data demands and dependable backup."
                  },
                  {
                    number: "03",
                    icon: "fa-desktop",
                    title: "High-Performance Workstations",
                    text: "Powerful workstations optimized for engineers and designers handling compute-intensive workloads."
                  },
                  {
                    number: "04",
                    icon: "fa-box",
                    title: "Smart Cabinet Solutions",
                    text: "Integrated smart cabinets with power distribution, cooling, and security."
                  },
                  {
                    number: "05",
                    icon: "fa-battery-full",
                    title: "UPS Backup Systems",
                    text: "Reliable UPS solutions ensuring uninterrupted power during outages."
                  },
                  {
                    number: "06",
                    icon: "fa-temperature-high",
                    title: "Precision Cooling & Monitoring",
                    text: "Advanced precision cooling and environmental monitoring for optimal infrastructure management."
                  }
                ].map((item, index) => (
                  <div className="col-lg-4 col-md-6 m-b30" key={index}>
                    <div className="services-core-item text-center">
                      <span className="services-core-number">{item.number}</span>
                      <i className={`fa-solid ${item.icon} services-core-icon`} />
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>

        </div>
        {/* ================= CONTENT END ================= */}


        {/* ================= FOOTER START ================= */}
        <footer
          className="site-footer footer-dark"
          style={{ backgroundImage: 'url("images/background/count-bg.jpg")' }}
        >
          <div className="footer-bottom text-center">
            <div className="container">
              <span className="copyrights-text">
                Copyright © 2026 All Rights Reserved by Pyronics Engineering Solutions.
              </span>
            </div>
          </div>
        </footer>
        {/* ================= FOOTER END ================= */}

      </div>
    </>
  );
}
