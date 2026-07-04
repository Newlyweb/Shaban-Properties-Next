import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const InvestmentOpportunities = (props) => {
  return (
    <>
      <div className="investment-opportunities-container1">
        <Head>
          <title>Investment-Opportunities - Shaban Properties</title>
          <meta
            property="og:title"
            content="Investment-Opportunities - Shaban Properties"
          />
          <link
            rel="canonical"
            href="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/investment-opportunities"
          />
          <meta
            property="og:url"
            content="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/investment-opportunities"
          />
        </Head>
        <Navigation></Navigation>
        <section className="investment-hero">
          <div className="investment-hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/19698409/19698409-hd_1280_720_60fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/19698409/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline
              className="investment-hero-video"
            ></video>
            <div className="investment-hero-overlay"></div>
          </div>
          <div className="investment-hero-content">
            <h1 className="hero-title">
              Building Wealth Through Exceptional Properties
            </h1>
            <p className="hero-subtitle">
              Curated, ROI-focused real estate opportunities across Nigeria.
              Discover, acquire, and maximize value with Shaban Properties.
            </p>
            <div className="investment-hero-actions">
              <a href="#portfolio" className="investment-opportunities-link10">
                <div className="btn-primary btn btn-lg">
                  <span>Explore Opportunities</span>
                </div>
              </a>
              <a href="#contact" className="investment-opportunities-link11">
                <div className="btn btn-lg btn-outline">
                  <span>Request Investor Call</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="opportunity-categories">
          <div className="opportunity-categories-container">
            <div className="opportunity-categories-header">
              <h2 className="section-title">Investment Categories</h2>
              <p className="section-content">
                Strategic avenues for wealth creation tailored to your
                investment profile.
              </p>
            </div>
            <div className="opportunity-categories-grid">
              <div className="opportunity-card">
                <div className="opportunity-card-icon">
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
                      <path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Residential Developments</h3>
                <p className="section-content">
                  High-demand luxury apartments and gated communities with
                  15-25% annual appreciation.
                </p>
                <span className="opportunity-roi">ROI: 18% Avg.</span>
                <a href="#">
                  <div className="btn btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 21h18M3 10h18M5 6l7-3l7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Commercial Projects</h3>
                <p className="section-content">
                  Premium office spaces and retail hubs in Abuja&apos;s central
                  business districts.
                </p>
                <span className="opportunity-roi">Yield: 12% Rental</span>
                <a href="#">
                  <div className="btn btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Land Investments</h3>
                <p className="section-content">
                  Strategic land banking in emerging growth corridors with
                  massive capital gains potential.
                </p>
                <span className="opportunity-roi">Growth: 40% 2-Year</span>
                <a href="#">
                  <div className="btn btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-card-icon">
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
                      <path d="M12.75 7.09a3 3 0 0 1 2.16 2.16m2.162 7.822c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568M2 2l20 20"></path>
                      <path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533M9.13 9.13a3 3 0 0 0 3.74 3.74"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Diaspora Solutions</h3>
                <p className="section-content">
                  Secure, remote-managed investment vehicles for Nigerians
                  abroad seeking stable returns.
                </p>
                <span className="opportunity-roi">Secure &amp; Managed</span>
                <a href="#">
                  <div className="btn btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="featured-portfolio">
          <div className="featured-portfolio-header">
            <h2 className="section-title">Featured Investment Portfolio</h2>
            <div className="portfolio-filters">
              <button className="active portfolio-filter-btn">
                All Projects
              </button>
              <button className="portfolio-filter-btn">Residential</button>
              <button className="portfolio-filter-btn">Commercial</button>
              <button className="portfolio-filter-btn">Off-Plan</button>
            </div>
          </div>
          <div className="featured-portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-media">
                <img
                  alt="Maitama Heights"
                  src="https://images.pexels.com/photos/33619259/pexels-photo-33619259.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-badge">
                  <span>Residential</span>
                </div>
              </div>
              <div className="portfolio-details">
                <div className="portfolio-tags">
                  <span className="location-tag">Maitama, Abuja</span>
                </div>
                <h3 className="section-subtitle">Maitama Heights Phase II</h3>
                <div className="portfolio-metrics">
                  <div className="metric">
                    <span className="metric-label">Min Ticket</span>
                    <span className="metric-value">₦45M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Proj. ROI</span>
                    <span className="metric-value">22%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Horizon</span>
                    <span className="metric-value">24 Mo.</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <span>View Deal</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-media">
                <img
                  alt="Central Business Hub"
                  src="https://images.pexels.com/photos/3167175/pexels-photo-3167175.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-badge">
                  <span>Commercial</span>
                </div>
              </div>
              <div className="portfolio-details">
                <div className="portfolio-tags">
                  <span className="location-tag">CBD, Abuja</span>
                </div>
                <h3 className="section-subtitle">Central Business Hub</h3>
                <div className="portfolio-metrics">
                  <div className="metric">
                    <span className="metric-label">Min Ticket</span>
                    <span className="metric-value">₦120M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Proj. ROI</span>
                    <span className="metric-value">15%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Horizon</span>
                    <span className="metric-value">36 Mo.</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <span>View Deal</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-media">
                <img
                  alt="Gwarinpa Estate"
                  src="https://images.pexels.com/photos/33619257/pexels-photo-33619257.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-badge">
                  <span>Residential</span>
                </div>
              </div>
              <div className="portfolio-details">
                <div className="portfolio-tags">
                  <span className="location-tag">Gwarinpa, Abuja</span>
                </div>
                <h3 className="section-subtitle">The Avenue Gwarinpa</h3>
                <div className="portfolio-metrics">
                  <div className="metric">
                    <span className="metric-label">Min Ticket</span>
                    <span className="metric-value">₦35M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Proj. ROI</span>
                    <span className="metric-value">18%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Horizon</span>
                    <span className="metric-value">18 Mo.</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <span>View Deal</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-media">
                <img
                  alt="Idu Industrial Land"
                  src="https://images.pexels.com/photos/38303664/pexels-photo-38303664.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-badge">
                  <span>Land</span>
                </div>
              </div>
              <div className="portfolio-details">
                <div className="portfolio-tags">
                  <span className="location-tag">Idu, Abuja</span>
                </div>
                <h3 className="section-subtitle">Idu Industrial Logistics</h3>
                <div className="portfolio-metrics">
                  <div className="metric">
                    <span className="metric-label">Min Ticket</span>
                    <span className="metric-value">₦15M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Proj. ROI</span>
                    <span className="metric-value">45%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Horizon</span>
                    <span className="metric-value">48 Mo.</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <span>View Deal</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-media">
                <img
                  alt="Asokoro Terrace"
                  src="https://images.pexels.com/photos/33619255/pexels-photo-33619255.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-badge">
                  <span>Residential</span>
                </div>
              </div>
              <div className="portfolio-details">
                <div className="portfolio-tags">
                  <span className="location-tag">Asokoro, Abuja</span>
                </div>
                <h3 className="section-subtitle">Asokoro Skyline Terrace</h3>
                <div className="portfolio-metrics">
                  <div className="metric">
                    <span className="metric-label">Min Ticket</span>
                    <span className="metric-value">₦85M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Proj. ROI</span>
                    <span className="metric-value">20%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Horizon</span>
                    <span className="metric-value">24 Mo.</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <span>View Deal</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-media">
                <img
                  alt="Wuse II Plaza"
                  src="https://images.pexels.com/photos/13024107/pexels-photo-13024107.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-badge">
                  <span>Commercial</span>
                </div>
              </div>
              <div className="portfolio-details">
                <div className="portfolio-tags">
                  <span className="location-tag">Wuse II, Abuja</span>
                </div>
                <h3 className="section-subtitle">Wuse II Retail Plaza</h3>
                <div className="portfolio-metrics">
                  <div className="metric">
                    <span className="metric-label">Min Ticket</span>
                    <span className="metric-value">₦60M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Proj. ROI</span>
                    <span className="metric-value">14%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Horizon</span>
                    <span className="metric-value">30 Mo.</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <span>View Deal</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="roi-case-studies">
          <div className="roi-case-studies-header">
            <h2 className="section-title">Successful Exit Case Studies</h2>
            <p className="section-content">
              Actual performance metrics from our historical investment cycles.
            </p>
          </div>
          <div className="roi-case-studies-grid">
            <div className="case-study-card">
              <div className="case-study-metrics">
                <div className="metric-box">
                  <span className="metric-title">Entry</span>
                  <span className="metric-val">₦22M</span>
                </div>
                <div className="highlight metric-box">
                  <span className="metric-title">Exit</span>
                  <span className="metric-val">₦38M</span>
                </div>
              </div>
              <h3 className="section-subtitle">Garki Court Apartments</h3>
              <p className="section-content">
                Acquired at shell stage, completed and exited within 18 months.
                Total multiple: 1.7x.
              </p>
              <div className="case-footer">
                <span>Timeline: 18 Months</span>
                <span>ROI: 72%</span>
              </div>
            </div>
            <div className="case-study-card">
              <div className="case-study-metrics">
                <div className="metric-box">
                  <span className="metric-title">Entry</span>
                  <span className="metric-val">₦10M</span>
                </div>
                <div className="highlight metric-box">
                  <span className="metric-title">Exit</span>
                  <span className="metric-val">₦28M</span>
                </div>
              </div>
              <h3 className="section-subtitle">Lugbe Expansion Land</h3>
              <p className="section-content">
                Strategic land banking ahead of infrastructure development.
                Capital gain focus.
              </p>
              <div className="case-footer">
                <span>Timeline: 30 Months</span>
                <span>ROI: 180%</span>
              </div>
            </div>
            <div className="case-study-card">
              <div className="case-study-metrics">
                <div className="metric-box">
                  <span className="metric-title">Entry</span>
                  <span className="metric-val">₦150M</span>
                </div>
                <div className="highlight metric-box">
                  <span className="metric-title">Valuation</span>
                  <span className="metric-val">₦210M</span>
                </div>
              </div>
              <h3 className="section-subtitle">Central Plaza Retail</h3>
              <p className="section-content">
                Commercial buy-to-lease strategy with 95% occupancy achieved in
                year 1.
              </p>
              <div className="case-footer">
                <span>Timeline: 12 Months</span>
                <span>Yield: 14% p.a.</span>
              </div>
            </div>
            <div aria-hidden="true" className="filler case-study-card"></div>
            <div aria-hidden="true" className="filler case-study-card"></div>
            <div aria-hidden="true" className="filler case-study-card"></div>
          </div>
        </section>
        <section className="market-insights">
          <div className="market-insights-split">
            <div className="market-insights-map-panel">
              <div className="map-placeholder">
                <img
                  alt="Abuja Growth Map"
                  src="https://images.pexels.com/photos/37352207/pexels-photo-37352207.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="investment-opportunities-thq-map-pin-overlay-elm1 map-pin-overlay">
                  <div className="map-pin-pulse"></div>
                  <div className="map-pin-info">
                    <span>Maitama Ext.</span>
                  </div>
                </div>
                <div className="investment-opportunities-thq-map-pin-overlay-elm2 map-pin-overlay">
                  <div className="map-pin-pulse"></div>
                  <div className="map-pin-info">
                    <span>Lugbe Corridor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="market-insights-content">
              <h2 className="section-title">Strategic Location Rationale</h2>
              <div className="insight-list">
                <div className="insight-item">
                  <h4 className="section-subtitle">
                    Maitama Extension Corridor
                  </h4>
                  <p className="section-content">
                    Expected Appreciation: 25% p.a. Elite demand and limited
                    supply driving massive premium growth.
                  </p>
                </div>
                <div className="insight-item">
                  <h4 className="section-subtitle">Idu-Lugbe Tech Hub</h4>
                  <p className="section-content">
                    Expected Appreciation: 40% 2-Year. Proximity to rail and
                    logistics parks making it a high-yield rental zone.
                  </p>
                </div>
                <div className="insight-item">
                  <h4 className="section-subtitle">
                    Karsana South Development
                  </h4>
                  <p className="section-content">
                    Expected Appreciation: 18% p.a. New government
                    infrastructure projects unlocking residential value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="investment-structures">
          <div className="investment-structures-container">
            <h2 className="section-title">
              Investment Structures &amp; Minimums
            </h2>
            <div className="table-wrapper">
              <table className="structure-table">
                <thead>
                  <tr>
                    <th>
                      <span>Structure</span>
                    </th>
                    <th>
                      <span>Min. Investment</span>
                    </th>
                    <th>
                      <span>Timeline</span>
                    </th>
                    <th>
                      <span>Risk Profile</span>
                    </th>
                    <th>
                      <span>Primary Objective</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Direct Purchase</strong>
                    </td>
                    <td>
                      <span>₦35,000,000</span>
                    </td>
                    <td>
                      <span>Indefinite</span>
                    </td>
                    <td>
                      <span>Low</span>
                    </td>
                    <td>
                      <span>Full Ownership / Rental Yield</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Joint Venture (JV)</strong>
                    </td>
                    <td>
                      <span>₦150,000,000</span>
                    </td>
                    <td>
                      <span>24-36 Months</span>
                    </td>
                    <td>
                      <span>Moderate</span>
                    </td>
                    <td>
                      <span>Development Profit Sharing</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fractional Ownership</strong>
                    </td>
                    <td>
                      <span>₦5,000,000</span>
                    </td>
                    <td>
                      <span>18-48 Months</span>
                    </td>
                    <td>
                      <span>Low-Moderate</span>
                    </td>
                    <td>
                      <span>Capital Growth / Diversification</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Off-Plan Entry</strong>
                    </td>
                    <td>
                      <span>₦25,000,000</span>
                    </td>
                    <td>
                      <span>12-24 Months</span>
                    </td>
                    <td>
                      <span>Moderate</span>
                    </td>
                    <td>
                      <span>Early-Stage Appreciation</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="section-content legal-note">
              All investments are backed by registered titles and comprehensive
              legal agreements. Projected returns are based on historical market
              data and are not guaranteed.
            </p>
          </div>
        </section>
        <section className="investor-testimonials">
          <div className="testimonial-carousel-wrapper">
            <div className="investment-opportunities-testimonial-slide">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V6C10.017 4.89543 10.9124 4 12.017 4H19.017C21.2261 4 23.017 5.79086 23.017 8V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.0166 21L1.0166 18C1.0166 16.8954 1.91203 16 3.0166 16H6.0166C6.56889 16 7.0166 15.5523 7.0166 15V9C7.0166 8.44772 6.56889 8 6.0166 8H2.0166C1.46432 8 1.0166 8.44772 1.0166 9V12C1.0166 12.5523 0.568886 13 0.0166016 13H-1.9834C-2.53569 13 -2.9834 12.5523 -2.9834 12V6C-2.9834 4.89543 -2.08797 4 -0.983398 4H6.0166C8.22574 4 10.0166 5.79086 10.0166 8V15C10.0166 18.3137 7.3303 21 4.0166 21H1.0166Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="section-subtitle">
                  &quot;Shaban Properties transformed my approach to the Abuja
                  market. Their data-driven insights on the Lugbe corridor led
                  to a 40% gain in just two years. Truly a trusted partner for
                  diaspora investors.&quot;
                </p>
                <div className="investor-profile">
                  <div className="investor-info">
                    <span className="investor-name">Dr. Emeka Nwosu</span>
                    <span className="investor-role">Diaspora Investor, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="get-started">
          <div className="get-started-split">
            <div className="get-started-content">
              <h2 className="section-title">
                Ready To Find Your Next Property Opportunity?
              </h2>
              <p className="section-content">
                Download our Q3 2024 Investment Outlook or schedule a private
                consultation with our portfolio managers.
              </p>
              <div className="get-started-benefits">
                <div className="benefit-item">
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Exclusive Off-Market Deals</span>
                </div>
                <div className="benefit-item">
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Detailed ROI Projections</span>
                </div>
                <div className="benefit-item">
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Legal &amp; Documentation Support</span>
                </div>
              </div>
            </div>
            <div className="get-started-form-panel">
              <form
                action="#"
                method="POST"
                data-form-id="30bfa272-4e74-4e1f-adb3-c46d584c2d36"
                className="investor-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="thq_textinput_l06Z"
                    name="textinput"
                    required
                    placeholder="Full Name"
                    data-form-field-id="thq_textinput_l06Z"
                    className="investment-opportunities-form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="thq_textinput_K0aZ"
                    name="textinput"
                    required
                    placeholder="Email Address"
                    data-form-field-id="thq_textinput_K0aZ"
                    className="investment-opportunities-form-input"
                  />
                </div>
                <div className="form-group">
                  <select
                    id="thq_select_8aHt"
                    name="select"
                    required
                    data-form-field-id="thq_select_8aHt"
                    className="investment-opportunities-form-input"
                  >
                    <option value="true" disabled selected>
                      Investment Interest
                    </option>
                    <option value="residential">Residential Development</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="land">Land Banking</option>
                    <option value="diaspora">Diaspora Solution</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    id="thq_textarea_VKK_"
                    name="textarea"
                    rows="4"
                    placeholder="Tell us about your investment goals"
                    data-form-field-id="thq_textarea_VKK_"
                    className="investment-opportunities-form-input"
                  ></textarea>
                </div>
                <button
                  id="thq_button_EmD6"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_EmD6"
                  className="btn-primary btn btn-full btn-lg"
                >
                  Request Deal Pack
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="investment-opportunities-container2">
          <div className="investment-opportunities-container3">
            <Script
              html={`<script defer data-name="investment-opportunities">
(function(){
  const portfolioFilters = document.querySelectorAll(".portfolio-filter-btn")
  portfolioFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      portfolioFilters.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  const form = document.querySelector(".investor-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input, select, textarea")
      let isValid = true
      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false
          input.style.borderColor = "#e74c3c"
        } else {
          input.style.borderColor = "var(--color-outline)"
        }
      })

      if (!isValid) {
        e.preventDefault()
      }
    })
  }

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

  document.querySelectorAll(".opportunity-card, .portfolio-item, .case-study-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="investment-opportunities-container4">
          <div className="investment-opportunities-container5">
            <Script
              html={`<style>
        @keyframes pulse {0% {box-shadow: 0 0 0 0 rgba(213, 74, 90, 0.7);}
70% {box-shadow: 0 0 0 15px rgba(213, 74, 90, 0);}
100% {box-shadow: 0 0 0 0 rgba(213, 74, 90, 0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .investment-opportunities-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .investment-opportunities-link10 {
            display: contents;
          }
          .investment-opportunities-link11 {
            display: contents;
          }
          .investment-opportunities-thq-map-pin-overlay-elm1 {
            top: 30%;
            left: 45%;
          }
          .investment-opportunities-thq-map-pin-overlay-elm2 {
            top: 60%;
            left: 35%;
          }
          .investment-opportunities-container2 {
            display: none;
          }
          .investment-opportunities-container3 {
            display: contents;
          }
          .investment-opportunities-container4 {
            display: none;
          }
          .investment-opportunities-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default InvestmentOpportunities
