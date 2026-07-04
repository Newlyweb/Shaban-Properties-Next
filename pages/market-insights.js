import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const MarketInsights = (props) => {
  return (
    <>
      <div className="market-insights-container1">
        <Head>
          <title>Market-Insights - Shaban Properties</title>
          <meta
            property="og:title"
            content="Market-Insights - Shaban Properties"
          />
          <link
            rel="canonical"
            href="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/market-insights"
          />
          <meta
            property="og:url"
            content="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/market-insights"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-insights">
          <div className="hero-insights-media">
            <video
              src="https://videos.pexels.com/video-files/19698409/19698409-hd_1280_720_60fps.mp4"
              loop
              muted
              autoPlay="true"
              playsInline
              className="hero-insights-video"
            ></video>
            <div className="hero-insights-overlay"></div>
          </div>
          <div className="hero-insights-content">
            <h1 className="market-insights-hero-title hero-title">
              Market Insights &amp; Intelligence
            </h1>
            <p className="hero-subtitle">
              Your definitive guide to Abuja&apos;s real estate landscape.
              Explore deep-dive market trends, strategic investment tips, and
              wealth-building guides curated by Shaban Properties experts.
            </p>
            <div className="hero-insights-search-container">
              <form
                data-form-id="4c5b4f39-4b4f-4389-ab9e-76a570fd84bb"
                className="hero-insights-filter-form"
              >
                <div className="filter-group">
                  <select
                    id="thq_select_z5B8"
                    name="select"
                    aria-label="Topic"
                    data-form-field-id="thq_select_z5B8"
                    className="filter-select"
                  >
                    <option value="true">All Topics</option>
                    <option value="trends">Market Trends</option>
                    <option value="investment">Investment Tips</option>
                    <option value="abuja">Abuja Analysis</option>
                  </select>
                </div>
                <div className="filter-group">
                  <select
                    id="thq_select_fWMa"
                    name="select"
                    aria-label="Audience"
                    data-form-field-id="thq_select_fWMa"
                    className="filter-select"
                  >
                    <option value="true">Target Audience</option>
                    <option value="investors">Investors</option>
                    <option value="buyers">Home Buyers</option>
                  </select>
                </div>
                <button
                  id="thq_button_aRTm"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_aRTm"
                  className="btn-primary btn"
                >
                  <span>Analyze Market</span>
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="trending-data">
          <div className="trending-data-container">
            <div className="trending-header">
              <h2 className="section-title">Trending Research &amp; Data</h2>
              <p className="section-subtitle">
                Real-time indicators and annual performance metrics for
                Nigeria&apos;s capital city.
              </p>
            </div>
            <div className="trending-grid">
              <div className="data-card">
                <div className="data-icon">
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
                <div data-target="12.5" className="data-value">
                  <span>0%</span>
                </div>
                <h3 className="data-label">Annual Price Appreciation</h3>
                <p className="section-content">
                  Average capital growth for prime Abuja residential districts
                  in 2024.
                </p>
              </div>
              <div className="data-card">
                <div className="data-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div data-target="8.2" className="data-value">
                  <span>0%</span>
                </div>
                <h3 className="data-label">Rental Yield Average</h3>
                <p className="section-content">
                  Net rental income potential for luxury serviced apartments in
                  Maitama.
                </p>
              </div>
              <div className="data-card">
                <div className="data-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div data-target="45" className="data-value">
                  <span>0</span>
                </div>
                <h3 className="data-label">New Developments</h3>
                <p className="section-content">
                  Premium projects currently under construction across Phase 1
                  &amp; 2 districts.
                </p>
              </div>
              <div className="data-card">
                <div className="data-icon">
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
                      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    </g>
                  </svg>
                </div>
                <div data-target="68" className="data-value">
                  <span>0%</span>
                </div>
                <h3 className="data-label">Investor Confidence</h3>
                <p className="section-content">
                  Surveyed sentiment increase among Diaspora Nigerians regarding
                  Abuja assets.
                </p>
              </div>
              <div className="data-card">
                <div className="data-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div data-target="15" className="data-value">
                  <span>0</span>
                </div>
                <h3 className="data-label">Market Reports</h3>
                <p className="section-content">
                  In-depth quarterly analyses available for immediate digital
                  download.
                </p>
              </div>
              <div className="highlight data-card">
                <h3 className="data-label">Q4 Market Outlook</h3>
                <p className="section-content">
                  Download our comprehensive 2024 final quarter forecast for the
                  FCT real estate market.
                </p>
                <a href="#" className="market-insights-link10">
                  <div className="btn-accent btn btn-sm">
                    <span>Download Full Report</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="insights-grid">
          <div className="insights-grid-header">
            <h2 className="section-title">Latest Insights &amp; Articles</h2>
            <div className="insights-filter-pills">
              <button className="active pill">All</button>
              <button className="pill">Investment</button>
              <button className="pill">Abuja Trends</button>
              <button className="pill">Buying</button>
              <button className="pill">Land</button>
            </div>
          </div>
          <div className="articles-wrapper">
            <article className="article-card">
              <div className="article-image">
                <img
                  alt="Luxury property in Abuja"
                  src="https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="article-category">Investment</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>8 min read</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>By Shaban Advisory</span>
                </div>
                <h3 className="article-title">
                  Wealth Building Through Abuja&apos;s Luxury Residential Market
                </h3>
                <p className="section-content">
                  Exploring the long-term ROI of high-end developments in
                  Maitama and Asokoro districts.
                </p>
                <a href="#" className="market-insights-link11">
                  <div className="btn-link">
                    <span>Read Full Guide</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="article-card">
              <div className="article-image">
                <img
                  alt="Abuja city infrastructure"
                  src="https://images.pexels.com/photos/37352207/pexels-photo-37352207.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="article-category">Abuja Trends</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>5 min read</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>By Market Research</span>
                </div>
                <h3 className="article-title">
                  The Rise of Gwarinpa: Why Investors are Flocking to Phase 3
                </h3>
                <p className="section-content">
                  A deep dive into infrastructure development and population
                  growth in Abuja&apos;s largest estate.
                </p>
                <a href="#" className="market-insights-link12">
                  <div className="btn-link">
                    <span>Read Full Guide</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="article-card">
              <div className="article-image">
                <img
                  alt="Buying property guide"
                  src="https://images.pexels.com/photos/7937765/pexels-photo-7937765.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="article-category">Buying</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>12 min read</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>By Legal Team</span>
                </div>
                <h3 className="article-title">
                  A Beginner&apos;s Guide to Property Acquisition in Nigeria
                </h3>
                <p className="section-content">
                  Everything you need to know about documentation, C of O, and
                  title verification in the FCT.
                </p>
                <a href="#" className="market-insights-link13">
                  <div className="btn-link">
                    <span>Read Full Guide</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="article-card">
              <div className="article-image">
                <img
                  alt="Commercial real estate"
                  src="https://images.pexels.com/photos/33619257/pexels-photo-33619257.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="article-category">Selling</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>6 min read</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>By Sales Director</span>
                </div>
                <h3 className="article-title">
                  Maximizing Resale Value: Tips for Abuja Property Owners
                </h3>
                <p className="section-content">
                  Strategic renovations and marketing techniques that guarantee
                  a premium exit strategy.
                </p>
                <a href="#" className="market-insights-link14">
                  <div className="btn-link">
                    <span>Read Full Guide</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="article-card">
              <div className="article-image">
                <img
                  alt="Land investment"
                  src="https://images.pexels.com/photos/34973979/pexels-photo-34973979.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="article-category">Land</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>10 min read</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>By Land Advisory</span>
                </div>
                <h3 className="article-title">
                  Land Banking 101: Securing Future Wealth in Emerging Districts
                </h3>
                <p className="section-content">
                  Identifying high-growth corridors in Abuja&apos;s Phase 4 for
                  long-term land investment.
                </p>
                <a href="#" className="market-insights-link15">
                  <div className="btn-link">
                    <span>Read Full Guide</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="article-card">
              <div className="article-image">
                <img
                  alt="Luxury interior design"
                  src="https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="article-category">Investment</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>7 min read</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>By Interior Experts</span>
                </div>
                <h3 className="article-title">
                  Short-Let Mastery: Generating High Yields from Serviced
                  Apartments
                </h3>
                <p className="section-content">
                  How to optimize your property for the growing demand for
                  luxury short-stay rentals.
                </p>
                <a href="#" className="market-insights-link16">
                  <div className="btn-link">
                    <span>Read Full Guide</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="deep-dives">
          <div className="deep-dives-container">
            <div className="deep-dives-header">
              <h2 className="section-title">Featured Deep Dives</h2>
              <p className="section-subtitle">
                Comprehensive whitepapers and long-form investment guides for
                the serious investor.
              </p>
            </div>
            <div className="deep-dives-grid">
              <div className="deep-dive-card">
                <div className="card-tag">
                  <span>Whitepaper</span>
                </div>
                <h3 className="section-subtitle">
                  2024 Abuja Developer Analysis
                </h3>
                <p className="section-content">
                  An exhaustive review of the top 20 developers in the FCT,
                  assessing project delivery speed, quality, and buyer
                  satisfaction.
                </p>
                <ul className="key-takeaways">
                  <li>
                    <span>Delivery reliability metrics</span>
                  </li>
                  <li>
                    <span>Construction quality benchmarks</span>
                  </li>
                  <li>
                    <span>Future project pipelines</span>
                  </li>
                </ul>
                <button className="btn btn-sm btn-outline open-modal-btn">
                  Request Access
                </button>
              </div>
              <div className="deep-dive-card featured">
                <div className="card-tag">
                  <span>Investor Guide</span>
                </div>
                <h3 className="section-subtitle">
                  The Diaspora Wealth Blueprint
                </h3>
                <p className="section-content">
                  A specialized guide for Nigerians abroad looking to build a
                  secure and profitable property portfolio in Abuja without the
                  stress.
                </p>
                <ul className="key-takeaways">
                  <li>
                    <span>Remote verification protocols</span>
                  </li>
                  <li>
                    <span>Financing for Diaspora buyers</span>
                  </li>
                  <li>
                    <span>Management for absentee owners</span>
                  </li>
                </ul>
                <button className="btn-primary btn btn-sm open-modal-btn">
                  Download PDF
                </button>
              </div>
              <div className="deep-dive-card">
                <div className="card-tag">
                  <span>Market Report</span>
                </div>
                <h3 className="section-subtitle">
                  Commercial Real Estate Forecast
                </h3>
                <p className="section-content">
                  Analyzing the shift in office space demand post-2023 and the
                  rise of co-working hubs in Central Business District.
                </p>
                <ul className="key-takeaways">
                  <li>
                    <span>Yield analysis by district</span>
                  </li>
                  <li>
                    <span>Occupancy rate trends</span>
                  </li>
                  <li>
                    <span>Future zoning insights</span>
                  </li>
                </ul>
                <button className="btn btn-sm btn-outline open-modal-btn">
                  Request Access
                </button>
              </div>
            </div>
          </div>
          <dialog id="leadCaptureModal">
            <div className="modal-content">
              <h2 className="section-title">Get Full Access</h2>
              <p className="section-content">
                Please provide your details to receive the full report in your
                inbox.
              </p>
              <form
                action="/submit"
                method="POST"
                data-form-id="7fd1c71c-12a8-4479-8bdd-4085d48f6c0a"
                className="modal-form"
              >
                <input
                  type="text"
                  id="thq_textinput_XcOj"
                  name="textinput"
                  required
                  placeholder="Full Name"
                  data-form-field-id="thq_textinput_XcOj"
                  className="market-insights-form-input"
                />
                <input
                  type="email"
                  id="thq_textinput_ms5j"
                  name="textinput"
                  required
                  placeholder="Email Address"
                  data-form-field-id="thq_textinput_ms5j"
                  className="market-insights-form-input"
                />
                <button
                  id="thq_button_NDMe"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_NDMe"
                  className="btn-primary btn"
                >
                  Send My Report
                </button>
                <button
                  id="closeModalBtn"
                  name="button"
                  type="button"
                  data-form-field-id="closeModalBtn"
                  className="btn-link"
                >
                  Cancel
                </button>
              </form>
            </div>
          </dialog>
        </section>
        <section className="video-briefs">
          <div className="video-briefs-header">
            <h2 className="section-title">Video Briefs &amp; Webinars</h2>
            <p className="section-subtitle">
              Expert perspectives on the fly. Watch our latest market updates.
            </p>
          </div>
          <div className="video-rail">
            <div className="video-card">
              <div className="video-thumbnail">
                <img
                  alt="Webinar thumbnail"
                  src="https://images.pexels.com/photos/28436259/pexels-photo-28436259.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="play-overlay">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="video-duration">15:20</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">
                  Abuja 2025: Infrastructure &amp; Growth
                </h3>
                <p className="video-speaker">Speaker: Engr. Shaban, MD</p>
                <div className="video-timestamps">
                  <span>02:15 - New Road Networks</span>
                  <span>08:40 - Power Grid Impact</span>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">
                <img
                  alt="Webinar thumbnail"
                  src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="play-overlay">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="video-duration">42:10</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">Mastering Property Valuation</h3>
                <p className="video-speaker">Speaker: Sarah O., Lead Valuer</p>
                <div className="video-timestamps">
                  <span>05:30 - Comparative Methods</span>
                  <span>22:15 - Market Adjustment Factors</span>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">
                <img
                  alt="Webinar thumbnail"
                  src="https://images.pexels.com/photos/33619259/pexels-photo-33619259.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="play-overlay">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="video-duration">28:45</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">Investment Strategy for 2024</h3>
                <p className="video-speaker">Panel Discussion</p>
                <div className="video-timestamps">
                  <span>10:00 - Risk Mitigation</span>
                  <span>18:30 - Emerging Hotspots</span>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">
                <img
                  alt="Webinar thumbnail"
                  src="https://images.pexels.com/photos/33529500/pexels-photo-33529500.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="play-overlay">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="video-duration">12:05</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">The Future of Smart Homes</h3>
                <p className="video-speaker">Guest: Tech Innovators</p>
                <div className="video-timestamps">
                  <span>01:45 - Automation Trends</span>
                  <span>09:10 - Security Integration</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-cta">
            <button className="btn-accent btn btn-lg">
              Register for Upcoming Webinar
            </button>
          </div>
        </section>
        <section className="neighborhood-spotlight">
          <div className="spotlight-header">
            <h2 className="section-title">Abuja Neighborhood Spotlight</h2>
            <p className="section-subtitle">
              Explore key districts and their investment potential.
            </p>
          </div>
          <div className="spotlight-grid">
            <div className="district-card">
              <div className="district-image">
                <img
                  alt="Maitama Abuja"
                  src="https://images.pexels.com/photos/34432716/pexels-photo-34432716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="district-info">
                <h3 className="section-subtitle">Maitama</h3>
                <div className="district-stats">
                  <span>High Demand</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Elite Status</span>
                </div>
                <p className="section-content">
                  The pinnacle of Abuja luxury. Stable returns and ultra-premium
                  asset security.
                </p>
                <a href="#" className="market-insights-link17">
                  <div className="btn-link">
                    <span>View District Guide</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="district-card">
              <div className="district-image">
                <img
                  alt="Asokoro Abuja"
                  src="https://images.pexels.com/photos/17773876/pexels-photo-17773876.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="district-info">
                <h3 className="section-subtitle">Asokoro</h3>
                <div className="district-stats">
                  <span>Government Hub</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Prestige</span>
                </div>
                <p className="section-content">
                  Home to diplomats and top officials. Exceptional long-term
                  land value retention.
                </p>
                <a href="#" className="market-insights-link18">
                  <div className="btn-link">
                    <span>View District Guide</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="district-card">
              <div className="district-image">
                <img
                  alt="Guzape Abuja"
                  src="https://images.pexels.com/photos/36622005/pexels-photo-36622005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="district-info">
                <h3 className="section-subtitle">Guzape</h3>
                <div className="district-stats">
                  <span>Rapid Growth</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Modern Architecture</span>
                </div>
                <p className="section-content">
                  The new frontier for luxury developments with stunning
                  hillside views.
                </p>
                <a href="#" className="market-insights-link19">
                  <div className="btn-link">
                    <span>View District Guide</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="district-card">
              <div className="district-image">
                <img
                  alt="Wuye Abuja"
                  src="https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="district-info">
                <h3 className="section-subtitle">Wuye</h3>
                <div className="district-stats">
                  <span>Central Link</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Mid-Range Luxury</span>
                </div>
                <p className="section-content">
                  Strategic location with modern infrastructure and high rental
                  demand.
                </p>
                <a href="#" className="market-insights-link20">
                  <div className="btn-link">
                    <span>View District Guide</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="district-card">
              <div className="district-image">
                <img
                  alt="Jabi Abuja"
                  src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="district-info">
                <h3 className="section-subtitle">Jabi</h3>
                <div className="district-stats">
                  <span>Lifestyle Hub</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Lakeside Living</span>
                </div>
                <p className="section-content">
                  Vibrant commercial and residential blend with excellent
                  amenities.
                </p>
                <a href="#" className="market-insights-link21">
                  <div className="btn-link">
                    <span>View District Guide</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="district-card">
              <div className="district-image">
                <img
                  alt="Garki Abuja"
                  src="https://images.pexels.com/photos/36703484/pexels-photo-36703484.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="district-info">
                <h3 className="section-subtitle">Garki</h3>
                <div className="district-stats">
                  <span>Commercial Core</span>
                  <span>
                    {' '}
                    •
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Established</span>
                </div>
                <p className="section-content">
                  The heart of Abuja&apos;s business district. High occupancy
                  for commercial assets.
                </p>
                <a href="#" className="market-insights-link22">
                  <div className="btn-link">
                    <span>View District Guide</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="outcomes-carousel">
          <div className="market-insights-carousel-container">
            <div className="carousel-header">
              <h2 className="section-title">Reader &amp; Client Outcomes</h2>
              <p className="section-subtitle">
                Real results from our advisory and market insights.
              </p>
            </div>
            <div className="carousel-track-container">
              <div className="carousel-track">
                <div className="carousel-item">
                  <div className="outcome-card">
                    <div className="outcome-quote">
                      <svg
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11M10.017 21L10.017 18C10.017 16.8954 9.12157 16 8.01699 16H5.01699C4.46471 16 4.01699 15.5523 4.01699 15V9C4.01699 8.44772 4.46471 8 5.01699 8H9.01699C9.56928 8 10.017 8.44772 10.017 9V11"
                          fill="var(--color-primary)"
                        ></path>
                      </svg>
                    </div>
                    <p className="section-content">
                      &quot;The Shaban market report on Gwarinpa Phase 3 saved
                      me from a bad investment and guided me to a property that
                      has already appreciated by 15% in just 8 months. Their
                      insights are data-driven and reliable.&quot;
                    </p>
                    <div className="client-info">
                      <h4 className="section-subtitle">Chidi O., Investor</h4>
                      <div className="outcome-stat">
                        <span>ROI: +15% in 8 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-nav">
                <button aria-label="Previous" className="prev carousel-btn">
                  ←
                </button>
                <button aria-label="Next" className="carousel-btn next">
                  →
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe-research">
          <div className="subscribe-card">
            <div className="subscribe-content">
              <h2 className="section-title">Stay Ahead of the Market</h2>
              <p className="section-content">
                Join 5,000+ investors receiving our weekly Abuja market
                intelligence, legal tips, and exclusive off-plan opportunities.
              </p>
              <form
                action="/submit"
                method="POST"
                data-form-id="2d78d65f-86e9-4d39-965f-8ccb98e69992"
                className="subscribe-form"
              >
                <div className="form-row">
                  <input
                    type="email"
                    id="thq_textinput_34pn"
                    name="textinput"
                    required
                    placeholder="Your Email Address"
                    data-form-field-id="thq_textinput_34pn"
                    className="market-insights-form-input"
                  />
                  <button
                    id="thq_button_e4Um"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_e4Um"
                    className="btn-primary btn"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
              <div className="divider">
                <span>OR</span>
              </div>
              <div className="bespoke-request">
                <h3 className="section-subtitle">
                  Need Bespoke Market Research?
                </h3>
                <p className="section-content">
                  Our advisory team provides custom feasibility studies and
                  portfolio audits for institutional and private investors.
                </p>
                <button className="btn btn-lg btn-secondary">
                  Request Bespoke Report
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="market-insights-container3">
          <div className="market-insights-container4">
            <Script
              html={`<script defer data-name="market-insights-logic">
(function(){
  // Numerical Counter Animation for Trending Data
  const animateCounters = () => {
    const counters = document.querySelectorAll(".data-value")
    const speed = 100

    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target"))
      const isPercentage = counter.innerText.includes("%") || target % 1 !== 0

      let current = 0
      const increment = target / speed

      const updateCount = () => {
        if (current < target) {
          current += increment
          counter.innerText = isPercentage ? current.toFixed(1) + "%" : Math.ceil(current)
          setTimeout(updateCount, 20)
        } else {
          counter.innerText = isPercentage ? target.toFixed(1) + "%" : target
        }
      }

      updateCount()
    })
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.2,
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("trending-data")) {
          animateCounters()
        }
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        sectionObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    sectionObserver.observe(section)
  })

  // Modal Logic for Deep Dives
  const modal = document.getElementById("leadCaptureModal")
  const openModalBtns = document.querySelectorAll(".open-modal-btn")
  const closeModalBtn = document.getElementById("closeModalBtn")

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.showModal()
    })
  })

  closeModalBtn.addEventListener("click", () => {
    modal.close()
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close()
    }
  })

  // Simple Pill Filter Logic (Visual only for prototype)
  const pills = document.querySelectorAll(".pill")
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"))
      pill.classList.add("active")
    })
  })

  // Video Rail Scroll Enhancement (Subtle Parallax-like feel on scroll)
  const videoRail = document.querySelector(".video-rail")
  if (videoRail) {
    videoRail.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        videoRail.scrollLeft += e.deltaY
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="market-insights-container5">
          <div className="market-insights-container6">
            <Script
              html={`<style>
dialog {
  border: none;
  border-radius: var(--border-radius-lg);
  padding: 0;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
dialog::backdrop {
  background: var(--color-scrim);
  backdrop-filter: blur(4px);
}
</style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .market-insights-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .market-insights-link10 {
            display: contents;
          }
          .market-insights-link11 {
            display: contents;
          }
          .market-insights-link12 {
            display: contents;
          }
          .market-insights-link13 {
            display: contents;
          }
          .market-insights-link14 {
            display: contents;
          }
          .market-insights-link15 {
            display: contents;
          }
          .market-insights-link16 {
            display: contents;
          }
          .market-insights-link17 {
            display: contents;
          }
          .market-insights-link18 {
            display: contents;
          }
          .market-insights-link19 {
            display: contents;
          }
          .market-insights-link20 {
            display: contents;
          }
          .market-insights-link21 {
            display: contents;
          }
          .market-insights-link22 {
            display: contents;
          }
          .market-insights-container3 {
            display: none;
          }
          .market-insights-container4 {
            display: contents;
          }
          .market-insights-container5 {
            display: none;
          }
          .market-insights-container6 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default MarketInsights
