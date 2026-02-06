'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Handle submenu toggle
    const handleSubmenuClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('.has-submenu > a')
      if (link) {
        e.preventDefault()
        const submenu = link.nextElementSibling as HTMLElement
        const allSubmenus = document.querySelectorAll('.dropdown-submenu')
        const allLinks = document.querySelectorAll('.has-submenu > a')
        
        allSubmenus.forEach(sm => sm.classList.remove('active'))
        allLinks.forEach(l => l.classList.remove('active'))
        
        submenu?.classList.toggle('active')
        link.classList.toggle('active')
      }
    }

    document.addEventListener('click', handleSubmenuClick)
    return () => document.removeEventListener('click', handleSubmenuClick)
  }, [])

  return <> (
    {/* HEADER START */}
    <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
      <div className="main-bar-wraper navbar-expand-lg">
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
      <a href="index.jsx">Home</a>
    </li>
    <li>
      <a href="about.jsx">About us </a>
    </li>
    <li>
      <a href="services.jsx">Services</a>
    </li>
    <li>
      <a href="projects.jsx">Projects </a>
    </li>
    <li>
      <a href="contact.jsx">Contact</a>
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
 </>
   );
}
