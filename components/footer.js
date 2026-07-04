import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-top-grid">
              <div className="footer-brand-column">
                <div className="footer-logo-wrapper">
                  <span className="footer-logo-text">
                    <span>
                      {' '}
                      SHABAN
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="footer-thq-footer-logo-accent-elm">
                      PROPERTIES
                    </span>
                  </span>
                </div>
                <p className="section-content footer-description">
                  Your trusted long-term property partner in Abuja. We combine
                  local expertise with transparency to build wealth through
                  exceptional real estate investments.
                </p>
                <div className="footer-social-links">
                  <a href="#" className="footer-link10">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link11">
                    <div aria-label="Instagram" className="footer-social-icon">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link12">
                    <div aria-label="LinkedIn" className="footer-social-icon">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle r="2" cx="4" cy="4"></circle>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link13">
                    <div aria-label="WhatsApp" className="footer-social-icon">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14h.1a8.38 8.38 0 0 1 3.8.9L21 3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-nav-column">
                <h3 className="section-subtitle footer-heading">Company</h3>
                <nav className="footer-nav-list">
                  <a href="Homepage" className="footer-link14">
                    <div className="footer-nav-link">
                      <span>Home</span>
                    </div>
                  </a>
                  <Link href="/about-us">
                    <a className="footer-link15">
                      <div className="footer-nav-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/market-insights">
                    <a className="footer-link16">
                      <div className="footer-nav-link">
                        <span>Market Insights</span>
                      </div>
                    </a>
                  </Link>
                  <a href="Contact Us" className="footer-link17">
                    <div className="footer-nav-link">
                      <span>Contact Us</span>
                    </div>
                  </a>
                  <a href="#" className="footer-link18">
                    <div className="footer-nav-link">
                      <span>Careers</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-nav-column">
                <h3 className="section-subtitle footer-heading">Services</h3>
                <nav className="footer-nav-list">
                  <Link href="/properties">
                    <a className="footer-link19">
                      <div className="footer-nav-link">
                        <span>Buy Property</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/properties">
                    <a className="footer-link20">
                      <div className="footer-nav-link">
                        <span>Sell Property</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/property-management">
                    <a className="footer-link21">
                      <div className="footer-nav-link">
                        <span>Property Management</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/investment-opportunities">
                    <a className="footer-link22">
                      <div className="footer-nav-link">
                        <span>Investment Advisory</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/properties">
                    <a className="footer-link23">
                      <div className="footer-nav-link">
                        <span>Property Valuation</span>
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="footer-contact-column">
                <h3 className="section-subtitle footer-heading">Contact Us</h3>
                <div className="footer-contact-list">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        fill="none"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      Plot 1234, Garki District, Abuja, Nigeria
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        fill="none"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </div>
                    <a href="tel:+234800SHABAN" className="footer-link24">
                      <div className="footer-contact-text">
                        <span>+234 800 SHABAN</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        fill="none"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </svg>
                    </div>
                    <a
                      href="mailto:info@shabanproperties.com?subject="
                      className="footer-link25"
                    >
                      <div className="footer-contact-text">
                        <span>info@shabanproperties.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-newsletter-row">
              <div className="footer-newsletter-content">
                <h4 className="section-subtitle footer-newsletter-title">
                  Stay Ahead of the Market
                </h4>
                <p className="section-content footer-newsletter-text">
                  Subscribe for exclusive Abuja property insights and investment
                  deals.
                </p>
              </div>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="28f95493-541f-41aa-8f13-3eed737caf96"
                className="footer-newsletter-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    id="thq_email_hxNa"
                    name="email"
                    required
                    aria-label="Email Address"
                    placeholder="Your Email Address"
                    data-form-field-id="thq_email_hxNa"
                    className="footer-newsletter-input"
                  />
                  <button
                    id="thq_button_xRfw"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_xRfw"
                    className="btn-primary btn footer-newsletter-btn"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="footer-bottom-bar">
              <p className="section-content footer-copyright">
                © 2026 Shaban Properties. All Rights Reserved. RC: 1234567
              </p>
              <div className="footer-legal-links">
                <a href="#" className="footer-link26">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#" className="footer-link27">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <a href="#" className="footer-link28">
                  <div className="footer-legal-link">
                    <span>Sitemap</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactions">
(function(){
  // No complex logic required for footer, but we can add a subtle scroll reveal effect
  const footerNewsletter = document.querySelector(".footer-newsletter-row")

  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  if (footerNewsletter) {
    footerNewsletter.style.opacity = "0"
    footerNewsletter.style.transform = "translateY(20px)"
    footerNewsletter.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(footerNewsletter)
  }

  // Handle newsletter form submission feedback
  const newsletterForm = document.querySelector(".footer-newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      // Browser handles validation natively, we just provide UX feedback
      const btn = newsletterForm.querySelector("button")
      const originalText = btn.textContent

      // Visual feedback only
      setTimeout(() => {
        btn.textContent = "Thank You!"
        btn.classList.replace("btn-primary", "btn-accent")
        newsletterForm.reset()

        setTimeout(() => {
          btn.textContent = originalText
          btn.classList.replace("btn-accent", "btn-primary")
        }, 3000)
      }, 500)
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<style>
a.footer-contact-text:hover {
  color: var(--color-surface);
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-logo-accent-elm {
            color: var(--color-primary);
          }
          .footer-link10 {
            display: contents;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-link12 {
            display: contents;
          }
          .footer-link13 {
            display: contents;
          }
          .footer-link14 {
            display: contents;
          }
          .footer-link15 {
            display: contents;
          }
          .footer-link16 {
            display: contents;
          }
          .footer-link17 {
            display: contents;
          }
          .footer-link18 {
            display: contents;
          }
          .footer-link19 {
            display: contents;
          }
          .footer-link20 {
            display: contents;
          }
          .footer-link21 {
            display: contents;
          }
          .footer-link22 {
            display: contents;
          }
          .footer-link23 {
            display: contents;
          }
          .footer-link24 {
            display: contents;
          }
          .footer-link25 {
            display: contents;
          }
          .footer-link26 {
            display: contents;
          }
          .footer-link27 {
            display: contents;
          }
          .footer-link28 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
