'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const handleSubmenuToggle = (name: string) => {
    setActiveSubmenu(prev => (prev === name ? null : name))
  }

  return (
    <>
      {/* HEADER START */}
      <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
        <div className="main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="clearfix">

              {/* LOGO */}
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link href="/">
                    <Image
                      src="/images/logo-dark.png"
                      alt="logo"
                      width={150}
                      height={50}
                      className="desktop-logo-show"
                    />
                    <Image
                      src="/images/logo-light.png"
                      alt="logo"
                      width={150}
                      height={50}
                      className="mobile-logo-show"
                    />
                  </Link>
                </div>
              </div>

              {/* NAV Toggle Button */}
              <button
                id="mobile-side-drawer"
                type="button"
                className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>

              {/* MAIN NAV */}
              <div
                className={`nav-animation header-nav navbar-collapse d-flex justify-content-center ${
                  isMenuOpen ? 'show' : 'collapse'
                }`}
              >
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Header Right Section */}
              <div className="extra-nav header-1-nav">
                <div className="extra-cell two h-cart-block">
                  <button
                    className="wt-cart cart-btn d-sms-none navSidebar-button"
                    aria-label="Open social links sidebar"
                    onClick={() => handleSubmenuToggle('sidebar')}
                  >
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
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Sidebar Popup */}
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
        {/* End Sidebar Popup */}

      </header>
      {/* HEADER END */}
    </>
  )
}