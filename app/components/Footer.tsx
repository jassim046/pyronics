"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="site-footer footer-dark"
      style={{ backgroundImage: 'url("/images/background/count-bg.jpg")' }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* LOGO */}
            <div className="col-lg-4">
              <img src="/images/logo-dark.png" alt="logo" />
            </div>

            {/* CONTACT */}
            <div className="col-lg-4">
              <h3>Contact Us</h3>
              <p>info@pyronics.co.uk</p>
            </div>

            {/* QUICK LINKS */}
            <div className="col-lg-4">
              <h3>Quick Links</h3>
              <ul className="widget_address newlinks">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        © 2026 Pyronics Engineering Solutions
      </div>
    </footer>
  );
}
