import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Shaban Properties</title>
          <meta property="og:title" content="Shaban Properties" />
          <link
            rel="canonical"
            href="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-search-wrapper">
          <div className="hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/17845042/17845042-hd_1920_1080_30fps.mp4"
              loop
              muted
              autoPlay="true"
              playsInline
              className="hero-video-bg"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              Building Wealth Through Exceptional Properties
            </h1>
            <p className="hero-subtitle">
              Helping individuals, families, investors, and businesses discover,
              acquire, manage, and maximize valuable real estate opportunities
              across Nigeria.
            </p>
            <div className="hero-actions">
              <a href="#" className="home-link1">
                <div className="home-thq-btn-elm10 btn btn-lg btn-outline">
                  <span>Explore Properties</span>
                </div>
              </a>
            </div>
            <div className="advanced-search-container">
              <div className="search-tabs">
                <button data-type="buy" className="search-tab active">
                  Buy
                </button>
                <button data-type="rent" className="search-tab">
                  Rent
                </button>
                <button data-type="commercial" className="search-tab">
                  Commercial
                </button>
                <button data-type="land" className="search-tab">
                  Land
                </button>
                <button data-type="investment" className="search-tab">
                  Investment
                </button>
              </div>
              <div className="search-form-box">
                <form
                  data-form-id="813f3c3e-6cff-478d-addc-89353b255526"
                  className="hero-search-form"
                >
                  <div className="search-field">
                    <div className="icon-wrap">
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
                        <circle r="8" cx="11" cy="11"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="thq_textinput_h01Z"
                      name="textinput"
                      required
                      placeholder="Location in Abuja..."
                      data-form-field-id="thq_textinput_h01Z"
                    />
                  </div>
                  <div className="search-field select-field">
                    <select
                      id="thq_select_dwEf"
                      name="select"
                      aria-label="Property Type"
                      data-form-field-id="thq_select_dwEf"
                    >
                      <option value="true">Property Type</option>
                      <option value="duplex">Duplex</option>
                      <option value="apartment">Apartment</option>
                      <option value="office">Office Space</option>
                      <option value="land">Land Plot</option>
                    </select>
                  </div>
                  <div className="search-field select-field">
                    <select
                      id="thq_select_2D3N"
                      name="select"
                      aria-label="Price Range"
                      data-form-field-id="thq_select_2D3N"
                    >
                      <option value="true">Price Range</option>
                      <option value="low">Under ₦50M</option>
                      <option value="mid">₦50M - ₦200M</option>
                      <option value="high">Above ₦200M</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_Nl61"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_Nl61"
                    className="btn-primary btn search-submit"
                  >
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
                      <circle r="8" cx="11" cy="11"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <span>Search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-metrics-section">
          <div className="trust-grid">
            <div className="home-metric-card">
              <div data-target="1500" className="home-metric-value">
                <span>0</span>
              </div>
              <div className="home-metric-label">
                <span>Properties Sold</span>
              </div>
              <p className="section-content">
                Premium residential and commercial acquisitions.
              </p>
            </div>
            <div className="home-metric-card">
              <div data-target="450" className="home-metric-value">
                <span>0</span>
              </div>
              <div className="home-metric-label">
                <span>Properties Managed</span>
              </div>
              <p className="section-content">
                Comprehensive oversight for landlords.
              </p>
            </div>
            <div className="home-metric-card">
              <div data-target="2800" className="home-metric-value">
                <span>0</span>
              </div>
              <div className="home-metric-label">
                <span>Happy Clients</span>
              </div>
              <p className="section-content">
                Trust built through transparent service.
              </p>
            </div>
            <div className="home-metric-card">
              <div data-target="12" className="home-metric-value">
                <span>0</span>
              </div>
              <div className="home-metric-label">
                <span>Years of Experience</span>
              </div>
              <p className="section-content">
                Deep expertise in the Nigerian market.
              </p>
            </div>
            <div className="home-metric-card">
              <div data-target="95" className="home-metric-value">
                <span>0</span>
              </div>
              <div className="home-metric-label">
                <span>Investment Deals</span>
              </div>
              <p className="section-content">
                Strategic high-yield opportunities facilitated.
              </p>
            </div>
            <div className="home-metric-card">
              <div data-target="100" className="home-metric-value">
                <span>0</span>
              </div>
              <div className="home-metric-label">
                <span>% Integrity</span>
              </div>
              <p className="section-content">
                Our core value in every single transaction.
              </p>
            </div>
          </div>
        </section>
        <section className="services-overview-section">
          <div className="container-inner">
            <div className="section-header">
              <h2 className="section-title">Our Premium Services</h2>
              <p className="section-subtitle">
                Comprehensive real estate solutions designed for wealth creation
                and stability.
              </p>
            </div>
            <div className="services-grid">
              <div className="home-service-card">
                <div className="service-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Buy Property</h3>
                <p className="section-content">
                  Find residential and commercial properties tailored to your
                  goals.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="home-service-card">
                <div className="service-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Sell Property</h3>
                <p className="section-content">
                  Strategic marketing, professional photography, and qualified
                  buyers.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="home-service-card">
                <div className="service-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12H3l9-9l9 9h-2"></path>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Rent &amp; Lease</h3>
                <p className="section-content">
                  Verified listings and seamless leasing experiences for
                  tenants.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="home-service-card">
                <div className="service-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="3" cx="12" cy="12"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Property Management</h3>
                <p className="section-content">
                  Comprehensive management solutions for landlords and
                  investors.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="home-service-card">
                <div className="service-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Property Valuation</h3>
                <p className="section-content">
                  Accurate market-driven assessments to determine true property
                  value.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="home-service-card">
                <div className="service-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Investment Advisory</h3>
                <p className="section-content">
                  Data-driven guidance to maximize returns on your property
                  portfolio.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-showcase-wrapper">
          <div className="showcase-header">
            <h2 className="section-title">Featured Luxury Properties</h2>
            <div className="filter-tabs-container">
              <button className="filter-tab active">All</button>
              <button className="filter-tab">For Sale</button>
              <button className="filter-tab">For Rent</button>
              <button className="filter-tab">Commercial</button>
              <button className="filter-tab">Land</button>
            </div>
          </div>
          <div className="horizontal-scroller">
            <div className="property-card">
              <div className="property-image-wrap">
                <img
                  alt="Maitama Heights Villa"
                  src="https://images.pexels.com/photos/7350889/pexels-photo-7350889.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <span className="featured-badge">Featured</span>
                <span className="property-type-tag">For Sale</span>
              </div>
              <div className="property-details">
                <div className="property-price">
                  <span>₦450,000,000</span>
                </div>
                <h3 className="property-title">Maitama Heights Villa</h3>
                <p className="property-location">Maitama, Abuja</p>
                <div className="property-specs">
                  <div className="spec-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M2 4v16"></path>
                      <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                      <path d="M2 17h20"></path>
                      <path d="M6 8v9"></path>
                    </svg>
                    <span>
                      {' '}
                      5 Beds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="spec-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-1.41 1.41a1.5 1.5 0 0 0 0 2.12L5.5 9.5m0 0 5 5m-5-5-3 3m8-8 3-3m-3 3 5 5m-5-5 1.5 1.5"></path>
                    </svg>
                    <span>
                      {' '}
                      6 Baths
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <button className="btn btn-sm btn-full btn-outline">
                  Quick Enquiry
                </button>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image-wrap">
                <img
                  alt="Wuse II Commercial Plaza"
                  src="https://images.pexels.com/photos/14603131/pexels-photo-14603131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <span className="property-type-tag">Commercial</span>
              </div>
              <div className="property-details">
                <div className="property-price">
                  <span>₦12,000,000/yr</span>
                </div>
                <h3 className="property-title">Wuse II Executive Suite</h3>
                <p className="property-location">Wuse II, Abuja</p>
                <div className="property-specs">
                  <div className="spec-item">
                    <span>Office Space</span>
                  </div>
                  <div className="spec-item">
                    <span>450 SQM</span>
                  </div>
                </div>
                <button className="btn btn-sm btn-full btn-outline">
                  Quick Enquiry
                </button>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image-wrap">
                <img
                  alt="Asokoro Garden Estate"
                  src="https://images.pexels.com/photos/17773876/pexels-photo-17773876.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <span className="property-type-tag">For Sale</span>
              </div>
              <div className="property-details">
                <div className="property-price">
                  <span>₦280,000,000</span>
                </div>
                <h3 className="property-title">Asokoro Garden Estate</h3>
                <p className="property-location">Asokoro, Abuja</p>
                <div className="property-specs">
                  <div className="spec-item">
                    <span>4 Beds</span>
                  </div>
                  <div className="spec-item">
                    <span>Semi-Detached</span>
                  </div>
                </div>
                <button className="btn btn-sm btn-full btn-outline">
                  Quick Enquiry
                </button>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image-wrap">
                <img
                  alt="Guzape View Apartments"
                  src="https://images.pexels.com/photos/33619257/pexels-photo-33619257.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <span className="property-type-tag">For Rent</span>
              </div>
              <div className="property-details">
                <div className="property-price">
                  <span>₦4,500,000/yr</span>
                </div>
                <h3 className="property-title">Guzape View Apartments</h3>
                <p className="property-location">Guzape, Abuja</p>
                <div className="property-specs">
                  <div className="spec-item">
                    <span>3 Beds</span>
                  </div>
                  <div className="spec-item">
                    <span>Luxury Flat</span>
                  </div>
                </div>
                <button className="btn btn-sm btn-full btn-outline">
                  Quick Enquiry
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="investment-portfolio-wrapper">
          <div className="portfolio-intro">
            <h2 className="section-title">
              Strategic Investment Opportunities
            </h2>
            <p className="section-subtitle">
              Unlock high-yield potential with our curated real estate
              investment portfolios.
            </p>
          </div>
          <div className="home-portfolio-grid">
            <div className="home-portfolio-item">
              <div className="portfolio-img-container">
                <img
                  alt="Residential Development"
                  src="https://images.pexels.com/photos/36622005/pexels-photo-36622005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="home-portfolio-overlay">
                  <span className="roi-badge">18% Est. ROI</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="section-subtitle">Residential Developments</h3>
                <p className="section-content">
                  Off-plan opportunities in Abuja&apos;s fastest-growing
                  residential districts.
                </p>
              </div>
            </div>
            <div className="home-portfolio-item">
              <div className="portfolio-img-container">
                <img
                  alt="Commercial Projects"
                  src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="home-portfolio-overlay">
                  <span className="roi-badge">12% Rental Yield</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="section-subtitle">Commercial Projects</h3>
                <p className="section-content">
                  Prime retail and office spaces with guaranteed corporate
                  tenancies.
                </p>
              </div>
            </div>
            <div className="home-portfolio-item">
              <div className="portfolio-img-container">
                <img
                  alt="Land Investments"
                  src="https://images.pexels.com/photos/5909671/pexels-photo-5909671.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="home-portfolio-overlay">
                  <span className="roi-badge">25% Appreciation</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="section-subtitle">Land Investments</h3>
                <p className="section-content">
                  Strategic land banking in emerging high-growth corridors.
                </p>
              </div>
            </div>
            <div className="home-portfolio-item">
              <div className="portfolio-img-container">
                <img
                  alt="Diaspora Solutions"
                  src="https://images.pexels.com/photos/7937765/pexels-photo-7937765.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="section-subtitle">Diaspora Solutions</h3>
                <p className="section-content">
                  Secure, remote property acquisition and management for
                  Nigerians abroad.
                </p>
              </div>
            </div>
            <div className="home-portfolio-item">
              <div className="portfolio-img-container">
                <img
                  alt="Emerging Growth"
                  src="https://images.pexels.com/photos/34432716/pexels-photo-34432716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="section-subtitle">Emerging Growth Areas</h3>
                <p className="section-content">
                  Early-stage entry into future luxury neighborhoods.
                </p>
              </div>
            </div>
            <div className="center-cta home-portfolio-item">
              <div className="portfolio-info">
                <h3 className="section-subtitle">Ready to Invest?</h3>
                <p className="section-content">
                  Get access to our exclusive investor-only reports and
                  opportunities.
                </p>
                <button className="btn-primary btn">
                  View Detailed Opportunities
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="management-cta-wrapper">
          <div className="container-inner">
            <div className="management-card">
              <div className="card-content">
                <h2 className="section-title">
                  Property Management Excellence
                </h2>
                <p className="section-subtitle">
                  Maximize your occupancy and minimize your stress with our
                  professional landlord services.
                </p>
                <div className="management-features">
                  <div className="m-feat-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                      <path d="m22 22-5-5"></path>
                      <path d="m17 22 5-5"></path>
                    </svg>
                    <span>Tenant Screening</span>
                  </div>
                  <div className="m-feat-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <span>Rent Collection</span>
                  </div>
                  <div className="m-feat-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    <span>Maintenance Coordination</span>
                  </div>
                  <div className="m-feat-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M3 3v18h18"></path>
                      <path d="M7 16V8"></path>
                      <path d="M11 16V12"></path>
                      <path d="M15 16V10"></path>
                      <path d="M19 16V4"></path>
                    </svg>
                    <span>Financial Reporting</span>
                  </div>
                  <div className="m-feat-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span>Property Inspections</span>
                  </div>
                  <div className="m-feat-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>Occupancy Optimization</span>
                  </div>
                </div>
                <button className="btn-primary btn btn-lg">
                  Request Property Management
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-carousel-wrapper">
          <div className="testimonials-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Real results for individuals, families, and corporate partners.
            </p>
          </div>
          <div className="home-carousel-track-container">
            <div className="testimonial-carousel">
              <div className="home-testimonial-card">
                <div className="home-quote-icon">
                  <svg
                    fill="var(--color-primary)"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    opacity="0.1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 2 5zm11 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 2 5z"></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Shaban Properties made my first home purchase in Abuja
                  seamless. Their transparency and integrity are unmatched in
                  this market.&quot;
                </p>
                <div className="client-meta">
                  <div className="client-info">
                    <strong>Chinedu Okafor</strong>
                    <span>Home Buyer</span>
                  </div>
                </div>
              </div>
              <div className="home-testimonial-card">
                <div className="home-quote-icon">
                  <svg
                    fill="var(--color-primary)"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    opacity="0.1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 2 5zm11 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 2 5z"></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;As an investor in the Diaspora, I need a partner I can
                  trust. Shaban Properties has managed my portfolio with
                  exceptional professionalism.&quot;
                </p>
                <div className="client-meta">
                  <div className="client-info">
                    <strong>Amina Yusuf</strong>
                    <span>Property Investor</span>
                  </div>
                </div>
              </div>
              <div className="home-testimonial-card">
                <div className="home-quote-icon">
                  <svg
                    fill="var(--color-primary)"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    opacity="0.1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 2 5zm11 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 2 5z"></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Our corporate office search was handled with data-driven
                  precision. They understood our requirements perfectly.&quot;
                </p>
                <div className="client-meta">
                  <div className="client-info">
                    <strong>Tunde Bakare</strong>
                    <span>Corporate Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta-wrapper">
          <dialog id="ctaModal" className="cta-dialog">
            <div className="dialog-inner">
              <h2 className="section-title">
                Ready To Find Your Next Property Opportunity?
              </h2>
              <p className="section-subtitle">
                Speak with our expert advisors today and take the first step
                towards your property goals.
              </p>
              <div className="cta-button-group">
                <button className="btn-primary btn btn-lg">
                  Speak With An Expert
                </button>
                <button className="btn btn-lg btn-outline">
                  Schedule Property Viewing
                </button>
              </div>
              <button id="closeCta" aria-label="Close" className="close-btn">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </svg>
              </button>
            </div>
          </dialog>
          <div className="cta-trigger-area">
            <button id="openCta" className="btn-primary btn btn-xl">
              Get Started Today
            </button>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="shaban-properties-engine">
(function(){
  // Animated Counters for Trust Metrics
  const animateCounters = () => {
    const metrics = document.querySelectorAll(".metric-value")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute("data-target"))
            let count = 0
            const duration = 2000
            const increment = target / (duration / 16)

            const updateCount = () => {
              count += increment
              if (count < target) {
                entry.target.innerText = Math.floor(count).toLocaleString() + (target === 100 && entry.target.innerText.includes("%") ? "" : "")
                if (entry.target.innerText.includes("%")) {
                  entry.target.innerText = Math.floor(count) + "%"
                } else if (target === 12) {
                  entry.target.innerText = Math.floor(count) + "+"
                }
                requestAnimationFrame(updateCount)
              } else {
                entry.target.innerText = target.toLocaleString() + (target === 12 ? "+" : target === 100 ? "%" : "")
              }
            }
            updateCount()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    metrics.forEach((metric) => observer.observe(metric))
  }

  // Hero Search Tabs
  const initSearchTabs = () => {
    const tabs = document.querySelectorAll(".search-tab")
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"))
        tab.classList.add("active")
      })
    })
  }

  // Modal Logic
  const initCtaModal = () => {
    const modal = document.getElementById("ctaModal")
    const openBtn = document.getElementById("openModalBtn") // In case it exists elsewhere
    const triggerBtn = document.getElementById("openCta")
    const closeBtn = document.getElementById("closeCta")

    if (triggerBtn && modal) {
      triggerBtn.addEventListener("click", () => modal.showModal())
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.close())
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close()
      })
    }
  }

  // Scroll Animations (Subtle Parallax & Fades)
  const initScrollAnims = () => {
    const fadeItems = document.querySelectorAll(".service-card, .property-card, .portfolio-item")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    fadeItems.forEach((item) => {
      item.style.opacity = "0"
      item.style.transform = "translateY(30px)"
      item.style.transition = "all 0.6s ease-out"
      observer.observe(item)
    })
  }

  // Run initializers
  animateCounters()
  initSearchTabs()
  initCtaModal()
  initScrollAnims()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-link1 {
            display: contents;
          }
          .home-thq-btn-elm10 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
