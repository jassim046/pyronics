"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
      <div className="main-bar-wraper navbar-expand-lg">
        <div className="main-bar">
          <div className="clearfix">

            {/* LOGO */}
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <Link href="/">
                  <img src="/images/logo-dark.png" alt="logo" className="desktop-logo-show" />
                  <img src="/images/logo-light.png" alt="logo" className="mobile-logo-show" />
                </Link>
              </div>
            </div>

            {/* MENU */}
            <div className="header-nav navbar-collapse collapse d-flex justify-content-center">
              <ul className="nav navbar-nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
