import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PropertyManagement = (props) => {
  return (
    <>
      <div className="property-management-container1">
        <Head>
          <title>Property-Management - Shaban Properties</title>
          <meta
            property="og:title"
            content="Property-Management - Shaban Properties"
          />
          <link
            rel="canonical"
            href="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/property-management"
          />
          <meta
            property="og:url"
            content="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/property-management"
          />
        </Head>
        <Navigation></Navigation>
        <section className="management-hero">
          <div className="management-hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/17845042/17845042-hd_1920_1080_30fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/17845042/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline
              className="management-hero-video"
            ></video>
            <div className="management-hero-overlay"></div>
          </div>
          <div className="management-hero-content">
            <h1 className="hero-title">
              Building Wealth Through Exceptional Property Management
            </h1>
            <p className="hero-subtitle">
              Comprehensive landlord services ensuring seamless operations. From
              rigorous tenant screening and automated rent collection to
              proactive maintenance and transparent financial reporting, we
              maximize your asset&apos;s value in Abuja&apos;s premium market.
            </p>
            <div className="management-hero-actions">
              <a href="#consultation" className="property-management-link1">
                <div className="btn-primary btn btn-lg">
                  <span>Request Property Management Consultation</span>
                </div>
              </a>
              <a href="#services" className="property-management-link2">
                <div className="btn btn-lg btn-outline">
                  <span>Explore Our Services</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="services-overview">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">
                Comprehensive Management Solutions
              </h2>
              <p className="section-content">
                Professional care for your investments with a focus on
                stability, growth, and transparency.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Tenant Screening</h3>
                <p className="section-content">
                  Rigorous background checks and credit evaluations to ensure
                  only reliable, high-quality tenants occupy your property.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Rent Collection &amp; Arrears
                </h3>
                <p className="section-content">
                  Automated collection systems and professional management of
                  arrears to maintain consistent, predictable cash flow.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4"></path>
                      <path d="M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Maintenance &amp; Repairs</h3>
                <p className="section-content">
                  Proactive coordination of vetted contractors for swift
                  repairs, preserving the long-term value of your architectural
                  assets.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Routine Inspections</h3>
                <p className="section-content">
                  Scheduled property walkthroughs to ensure tenant compliance
                  and identify early signs of wear or structural issues.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Financial Reporting</h3>
                <p className="section-content">
                  Detailed accounting and monthly statements accessible via our
                  digital portal, providing full transparency on your
                  investment.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Occupancy Optimization</h3>
                <p className="section-content">
                  Strategic marketing and tenant retention programs designed to
                  minimize vacancy rates and maximize your annual ROI.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="management-workflow">
          <div className="workflow-header">
            <h2 className="section-title">The Landlord Journey</h2>
            <p className="section-content">
              Our SLA-driven process ensures absolute transparency from
              onboarding to exit.
            </p>
          </div>
          <div className="workflow-timeline-wrapper">
            <div className="workflow-timeline">
              <div className="workflow-step">
                <div className="step-number">
                  <span>01</span>
                </div>
                <div className="step-content">
                  <h3 className="section-subtitle">Onboarding</h3>
                  <p className="section-content">
                    Professional valuation and documentation support to
                    integrate your property into our premium portfolio.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">
                  <span>02</span>
                </div>
                <div className="step-content">
                  <h3 className="section-subtitle">Marketing</h3>
                  <p className="section-content">
                    Strategic placement across luxury property platforms and our
                    exclusive investor network.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">
                  <span>03</span>
                </div>
                <div className="step-content">
                  <h3 className="section-subtitle">Screening</h3>
                  <p className="section-content">
                    Rigorous multi-point verification of potential tenants to
                    secure your asset&apos;s future.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">
                  <span>04</span>
                </div>
                <div className="step-content">
                  <h3 className="section-subtitle">Move-In</h3>
                  <p className="section-content">
                    Detailed inventory management and seamless move-in
                    coordination for a premium tenant experience.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">
                  <span>05</span>
                </div>
                <div className="step-content">
                  <h3 className="section-subtitle">Management</h3>
                  <p className="section-content">
                    Ongoing 24/7 maintenance support and automated rent
                    collection with zero-delay reporting.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">
                  <span>06</span>
                </div>
                <div className="step-content">
                  <h3 className="section-subtitle">Reporting &amp; Exit</h3>
                  <p className="section-content">
                    Transparent financial accounting and managed tenant exits
                    with full restoration oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="management-portfolio">
          <div className="portfolio-grid">
            <div className="property-management-portfolio-item">
              <div className="property-management-portfolio-media">
                <img
                  alt="Maitama Luxury Heights"
                  src="https://images.pexels.com/photos/33379153/pexels-photo-33379153.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-stats">
                    <div className="stat-bubble">
                      <span className="stat-value">98%</span>
                      <span className="stat-label">Occupancy</span>
                    </div>
                    <div className="stat-bubble">
                      <span className="stat-value">+15%</span>
                      <span className="stat-label">Yield Increase</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-management-portfolio-details">
                <h3 className="section-subtitle">Maitama Luxury Heights</h3>
                <p className="section-content">
                  Streamlined maintenance and optimized tenant mix resulted in a
                  15% increase in annual rental yield within 12 months.
                </p>
              </div>
            </div>
            <div className="property-management-portfolio-item">
              <div className="property-management-portfolio-media">
                <img
                  alt="Asokoro Garden Residences"
                  src="https://images.pexels.com/photos/34432716/pexels-photo-34432716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-stats">
                    <div className="stat-bubble">
                      <span className="stat-value">0%</span>
                      <span className="stat-label">Arrears</span>
                    </div>
                    <div className="stat-bubble">
                      <span className="stat-value">24h</span>
                      <span className="stat-label">Repair SLA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-management-portfolio-details">
                <h3 className="section-subtitle">Asokoro Garden Residences</h3>
                <p className="section-content">
                  Implemented automated rent collection and a 24-hour
                  maintenance response protocol, eliminating rental arrears
                  completely.
                </p>
              </div>
            </div>
            <div className="property-management-portfolio-item">
              <div className="property-management-portfolio-media">
                <img
                  alt="Wuse II Commercial Plaza"
                  src="https://images.pexels.com/photos/6758521/pexels-photo-6758521.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-stats">
                    <div className="stat-bubble">
                      <span className="stat-value">100%</span>
                      <span className="stat-label">Retention</span>
                    </div>
                    <div className="stat-bubble">
                      <span className="stat-value">-30%</span>
                      <span className="stat-label">OpEx</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-management-portfolio-details">
                <h3 className="section-subtitle">Wuse II Commercial Plaza</h3>
                <p className="section-content">
                  Reduced operating expenses by 30% through bulk utility
                  negotiation and preventative maintenance scheduling.
                </p>
              </div>
            </div>
            <div className="property-management-portfolio-item">
              <div className="property-management-portfolio-media">
                <img
                  alt="Garki Executive Suites"
                  src="https://images.pexels.com/photos/8146144/pexels-photo-8146144.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-stats">
                    <div className="stat-bubble">
                      <span className="stat-value">12d</span>
                      <span className="stat-label">Avg Vacancy</span>
                    </div>
                    <div className="stat-bubble">
                      <span className="stat-value">Top 1%</span>
                      <span className="stat-label">Tenant Quality</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-management-portfolio-details">
                <h3 className="section-subtitle">Garki Executive Suites</h3>
                <p className="section-content">
                  Professional marketing reduced average vacancy time from 45
                  days to just 12 days for high-end corporate suites.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="management-testimonials">
          <div className="testimonials-slider-container">
            <div id="testimonialTrack" className="testimonials-track">
              <div className="property-management-testimonial-slide">
                <div className="property-management-testimonial-card">
                  <div className="property-management-testimonial-quote-icon">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H3.017V21H5.017Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    &quot;Shaban Properties has transformed my investment
                    experience. Their management team handles everything with
                    such professionalism that I often forget I own five
                    properties in Abuja. The ROI has never been better.&quot;
                  </p>
                  <div className="property-management-testimonial-author">
                    <span className="property-management-author-name">
                      Dr. Adebayo Ogunlesi
                    </span>
                    <span className="property-management-author-role">
                      Portfolio Investor
                    </span>
                  </div>
                </div>
              </div>
              <div className="property-management-testimonial-slide">
                <div className="property-management-testimonial-card">
                  <div className="property-management-testimonial-quote-icon">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H3.017V21H5.017Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    &quot;The level of transparency in their financial reporting
                    is unmatched. As a corporate landlord, we require strict
                    accounting standards, and Shaban Properties delivers every
                    single month without fail.&quot;
                  </p>
                  <div className="property-management-testimonial-author">
                    <span className="property-management-author-name">
                      Sarah Bello
                    </span>
                    <span className="property-management-author-role">
                      Director, Zenith Assets
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-controls">
              <button
                id="prevSlide"
                aria-label="Previous Testimonial"
                className="slider-btn"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m15 18l-6-6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                id="nextSlide"
                aria-label="Next Testimonial"
                className="slider-btn"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="management-pricing">
          <div className="pricing-container">
            <div className="pricing-header">
              <h2 className="section-title">Transparent Management Tiers</h2>
              <p className="section-content">
                Choose the level of support that aligns with your investment
                strategy.
              </p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-tier">
                  <span>Basic</span>
                </div>
                <div className="pricing-value">
                  <span>
                    {' '}
                    5%
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/ month</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Rent Collection
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Financial Statements
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Maintenance Coordination
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li className="feature-disabled">
                    <span>Annual Inspections</span>
                  </li>
                  <li className="feature-disabled">
                    <span>Tenant Placement</span>
                  </li>
                </ul>
                <a href="#consultation" className="property-management-link3">
                  <div className="btn btn-outline">
                    <span>Select Basic</span>
                  </div>
                </a>
              </div>
              <div className="pricing-card card-featured">
                <div className="pricing-badge">
                  <span>Most Popular</span>
                </div>
                <div className="pricing-tier">
                  <span>Professional</span>
                </div>
                <div className="pricing-value">
                  <span>
                    {' '}
                    8%
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/ month</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      All Basic Features
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Quarterly Inspections
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Tenant Placement (50% off)
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Legal Support
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Arrears Management
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#consultation" className="property-management-link4">
                  <div className="btn-primary btn">
                    <span>Select Professional</span>
                  </div>
                </a>
              </div>
              <div className="pricing-card">
                <div className="pricing-tier">
                  <span>Premium</span>
                </div>
                <div className="pricing-value">
                  <span>
                    {' '}
                    12%
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/ month</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      All Professional Features
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Monthly Inspections
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Free Tenant Placement
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Emergency Repair Fund
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Vacancy Protection
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#consultation" className="property-management-link5">
                  <div className="btn btn-outline">
                    <span>Select Premium</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="pricing-custom">
              <p className="section-content">
                <span>
                  {' '}
                  Need a bespoke solution for a large portfolio?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#consultation">
                  <div className="btn-link">
                    <span>Get a customized quote</span>
                  </div>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section id="consultation" className="management-contact">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2 className="section-title">Let&apos;s Secure Your Assets</h2>
                <p className="section-content">
                  Arrange a private consultation with our property management
                  experts to discuss your portfolio needs.
                </p>
                <div className="property-management-contact-methods">
                  <div className="property-management-contact-item">
                    <div className="property-management-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m4.5-1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 16.5s1.5-2 4-2s4 2 4 2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-label">
                        WhatsApp Quick Contact
                      </span>
                      <a href="https://wa.me/2340000000000">
                        <div className="btn-link">
                          <span>+234 (0) 800 SHABAN</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="property-management-contact-item">
                    <div className="property-management-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-label">Abuja Office</span>
                      <p className="section-content">
                        Plot 1024, Central Business District, Abuja, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
                <div className="map-snippet">
                  <img
                    alt="Shaban Properties Abuja Office Location"
                    src="https://images.pexels.com/photos/7533757/pexels-photo-7533757.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
              </div>
              <div className="contact-form-box">
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="ace0a636-c640-4797-b489-ac920dfceacf"
                  className="consultation-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="true"
                      required
                      placeholder="John Doe"
                      data-form-field-id="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      data-form-field-id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="property-type">Property Type</label>
                    <select
                      id="property-type"
                      name="property-type"
                      data-form-field-id="property-type"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                      <option value="portfolio">Full Portfolio</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="How can we help manage your wealth?"
                      data-form-field-id="message"
                    ></textarea>
                  </div>
                  <button
                    id="thq_button_eHhx"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_eHhx"
                    className="btn-primary btn btn-lg"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="property-management-container4">
          <div className="property-management-container5">
            <Script
              html={`<script defer data-name="management-scripts">
(function(){
  // Testimonial Slider Logic
  const track = document.getElementById("testimonialTrack")
  const slides = Array.from(track.children)
  const nextBtn = document.getElementById("nextSlide")
  const prevBtn = document.getElementById("prevSlide")
  let currentIdx = 0

  function updateSlider() {
    track.style.transform = \`translateX(-\${currentIdx * 100}%)\`
  }

  nextBtn.addEventListener("click", () => {
    currentIdx = (currentIdx + 1) % slides.length
    updateSlider()
  })

  prevBtn.addEventListener("click", () => {
    currentIdx = (currentIdx - 1 + slides.length) % slides.length
    updateSlider()
  })

  // Auto-slide every 8 seconds
  setInterval(() => {
    currentIdx = (currentIdx + 1) % slides.length
    updateSlider()
  }, 8000)

  // Parallax Effect for Portfolio Images
  window.addEventListener("scroll", () => {
    const images = document.querySelectorAll(".portfolio-media img")
    images.forEach((img) => {
      const rect = img.getBoundingClientRect()
      const viewHeight = window.innerHeight
      if (rect.top < viewHeight && rect.bottom > 0) {
        const offset = (rect.top - viewHeight / 2) * 0.1
        img.style.transform = \`scale(1.1) translateY(\${offset}px)\`
      }
    })
  })

  // Simple Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".service-card, .workflow-step, .pricing-card")
  const revealOnScroll = () => {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }
    })
  }

  // Initial setup for reveal
  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Run once on load
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="property-management-container6">
          <div className="property-management-container7">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .property-management-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .property-management-link1 {
            display: contents;
          }
          .property-management-link2 {
            display: contents;
          }
          .property-management-link3 {
            display: contents;
          }
          .property-management-link4 {
            display: contents;
          }
          .property-management-link5 {
            display: contents;
          }
          .property-management-container4 {
            display: none;
          }
          .property-management-container5 {
            display: contents;
          }
          .property-management-container6 {
            display: none;
          }
          .property-management-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default PropertyManagement
