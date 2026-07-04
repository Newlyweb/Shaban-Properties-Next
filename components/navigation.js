import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="main-navigation" className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a className="navigation-link10">
                <div
                  aria-label="Shaban Properties Home"
                  className="navigation-brand"
                >
                  <div className="navigation-logo-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 21h18m-2 0v-4m0 0a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2m-5 4V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14m5-4v4m-1-8h2M8 9h2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="navigation-brand-name section-title">
                    Shaban Properties
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li className="navigation-item">
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/properties">
                    <a>
                      <div className="navigation-link">
                        <span>Properties</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/investment-opportunities">
                    <a>
                      <div className="navigation-link">
                        <span>Investment</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/property-management">
                    <a>
                      <div className="navigation-link">
                        <span>Management</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/about-us">
                    <a>
                      <div className="navigation-link">
                        <span>About</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/market-insights">
                    <a>
                      <div className="navigation-link">
                        <span>Insights</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <div
                  data-thq="thq-dropdown"
                  className="navigation-thq-dropdown1"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-thq-dropdown-toggle1"
                  >
                    <span>More</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="navigation-thq-dropdown-arrow1"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navigation-icon12"
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="navigation-thq-dropdown-list1"
                  >
                    <li className="navigation-item"></li>
                  </ul>
                </div>
              </ul>
              <a href="Contact Us" className="navigation-link17">
                <div className="btn-primary btn navigation-cta btn-sm">
                  <span>Consultation</span>
                </div>
              </a>
            </div>
            <button
              id="mobile-menu-trigger"
              aria-label="Toggle Menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <Link href="/">
              <a className="navigation-link18">
                <div
                  aria-label="Shaban Properties Home"
                  className="navigation-brand"
                >
                  <div className="navigation-logo-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 21h18m-2 0v-4m0 0a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2m-5 4V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14m5-4v4m-1-8h2M8 9h2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="navigation-brand-name section-title">
                    Shaban Properties
                  </span>
                </div>
              </a>
            </Link>
            <button
              id="mobile-menu-close"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-mobile-links">
              <li className="navigation-mobile-item">
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/properties">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Properties</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/investment-opportunities">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Investment Opportunities</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/property-management">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Property Management</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/about-us">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/market-insights">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Market Insights</span>
                    </div>
                  </a>
                </Link>
              </li>
              <div data-thq="thq-dropdown" className="navigation-thq-dropdown2">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-thq-dropdown-toggle2"
                >
                  <span>More</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-thq-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon20">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navigation-thq-dropdown-list2"
                >
                  <li className="navigation-mobile-item"></li>
                </ul>
              </div>
            </ul>
            <div className="navigation-mobile-footer">
              <a href="Contact Us" className="navigation-link25">
                <div className="btn-primary btn navigation-mobile-cta btn-lg">
                  <span>Request Consultation</span>
                </div>
              </a>
              <div className="navigation-mobile-contact">
                <p className="section-content">Abuja, Nigeria</p>
                <a
                  href="mailto:info@shabanproperties.com?subject="
                  className="navigation-link26"
                >
                  <div className="navigation-mobile-link-sm">
                    <span>info@shabanproperties.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileTrigger = document.getElementById("mobile-menu-trigger")
  const mobileClose = document.getElementById("mobile-menu-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const bodyElement = document.body

  function openMenu() {
    mobileOverlay.classList.add("is-active")
    mobileTrigger.setAttribute("aria-expanded", "true")
    bodyElement.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    mobileTrigger.setAttribute("aria-expanded", "false")
    bodyElement.style.overflow = ""
  }

  mobileTrigger.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("navigation-mobile-link")) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-link::after {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-link10 {
            display: contents;
          }
          .navigation-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            padding: 4px 8px;
            position: relative;
            border-color: rgba(0, 0, 0, 0.45);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
          }
          .navigation-thq-dropdown-toggle1 {
            gap: 4px;
            display: inline-flex;
            align-items: center;
          }
          .navigation-thq-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navigation-icon12 {
            width: 18px;
            height: 18px;
          }
          .navigation-thq-dropdown-list1 {
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            flex-direction: column;
            list-style-type: none;
          }
          .navigation-link17 {
            display: contents;
          }
          .navigation-link18 {
            display: contents;
          }
          .navigation-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            padding: 4px 8px;
            position: relative;
            border-color: rgba(0, 0, 0, 0.45);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
          }
          .navigation-thq-dropdown-toggle2 {
            gap: 4px;
            display: inline-flex;
            align-items: center;
          }
          .navigation-thq-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navigation-icon20 {
            width: 18px;
            height: 18px;
          }
          .navigation-thq-dropdown-list2 {
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            flex-direction: column;
            list-style-type: none;
          }
          .navigation-link25 {
            display: contents;
          }
          .navigation-link26 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
