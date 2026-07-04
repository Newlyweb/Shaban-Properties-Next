import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Properties = (props) => {
  return (
    <>
      <div className="properties-container1">
        <Head>
          <title>Properties - Shaban Properties</title>
          <meta property="og:title" content="Properties - Shaban Properties" />
          <link
            rel="canonical"
            href="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/properties"
          />
          <meta
            property="og:url"
            content="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/properties"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-search-section">
          <div className="hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
              loop
              muted
              autoPlay="true"
              playsInline
              className="hero-bg-video"
            ></video>
            <div className="hero-scrim-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <h1 className="properties-hero-title hero-title">
                Discover Exceptional Properties in Abuja
              </h1>
              <p className="hero-subtitle">
                Advanced property search for individuals, families, and
                high-value investors across Nigeria.
              </p>
            </div>
            <div className="hero-search-container">
              <div className="properties-search-tabs">
                <button
                  data-type="sale"
                  className="active properties-search-tab"
                >
                  Buy
                </button>
                <button data-type="rent" className="properties-search-tab">
                  Rent
                </button>
                <button
                  data-type="commercial"
                  className="properties-search-tab"
                >
                  Commercial
                </button>
                <button data-type="land" className="properties-search-tab">
                  Land
                </button>
              </div>
              <form
                action="/search"
                method="GET"
                data-form-id="074e85ab-7c79-400a-84dd-813a9faf1c0e"
                className="search-bar-form"
              >
                <div className="search-input-group">
                  <div className="input-with-icon">
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
                      <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                    </svg>
                    <input
                      type="text"
                      id="thq_location_B8Ub"
                      name="location"
                      required
                      placeholder="Enter neighborhood or city..."
                      data-form-field-id="thq_location_B8Ub"
                    />
                  </div>
                  <div className="divider"></div>
                  <div className="input-with-icon">
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
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <select
                      id="thq_property-type_39i9"
                      name="property-type"
                      data-form-field-id="thq_property-type_39i9"
                    >
                      <option value="true">Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="duplex">Duplex</option>
                      <option value="office">Office Space</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_i2oK"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_i2oK"
                    className="btn-primary btn search-submit-btn"
                  >
                    <span>Find Properties</span>
                  </button>
                </div>
              </form>
              <div className="hero-cta-footer">
                <button className="btn saved-search-cta btn-link">
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
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Save this search for alerts</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="property-grid-section">
          <div className="section-header-container">
            <div className="header-left">
              <h2 className="properties-section-title section-title">
                Featured Listings
              </h2>
              <p className="section-content">
                Our curated selection of premium real estate opportunities.
              </p>
            </div>
            <div className="grid-controls">
              <div className="view-toggles">
                <button id="grid-view-trigger" className="view-btn active">
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
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button id="list-view-trigger" className="view-btn">
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
                    <line x1="8" x2="21" y1="6" y2="6"></line>
                    <line x1="8" x2="21" y1="12" y2="12"></line>
                    <line x1="8" x2="21" y1="18" y2="18"></line>
                    <line x1="3" x2="3.01" y1="6" y2="6"></line>
                    <line x1="3" x2="3.01" y1="12" y2="12"></line>
                    <line x1="3" x2="3.01" y1="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="property-main-grid" className="property-grid-container">
            <article className="properties-property-card">
              <div className="card-image-wrapper">
                <img
                  alt="Luxury Villa Abuja"
                  src="https://images.pexels.com/photos/14603131/pexels-photo-14603131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-img"
                />
                <div className="card-badges">
                  <span className="featured badge">Featured</span>
                  <span className="type badge">For Sale</span>
                </div>
                <button id="open-modal-1" className="quick-view-btn">
                  Quick View
                </button>
              </div>
              <div className="properties-card-content">
                <div className="card-price">
                  <span>₦450,000,000</span>
                </div>
                <h3 className="card-title">The Grand Maitama Villa</h3>
                <p className="card-location">
                  <svg
                    fill="none"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                  <span>
                    {' '}
                    Maitama District, Abuja
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
                <div className="card-specs">
                  <div className="properties-spec-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 20h20M2 14h20M2 8h20M2 3v18"></path>
                    </svg>
                    <span>
                      {' '}
                      6 Beds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="properties-spec-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <path d="M9 22V12h6v10M2 12h20"></path>
                    </svg>
                    <span>
                      {' '}
                      7 Baths
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="properties-spec-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        rx="2"
                        ry="2"
                        width="18"
                        height="18"
                      ></rect>
                      <line x1="3" x2="21" y1="9" y2="9"></line>
                      <line x1="9" x2="9" y1="21" y2="9"></line>
                    </svg>
                    <span>
                      {' '}
                      1,200 SQM
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className="properties-property-card">
              <div className="card-image-wrapper">
                <img
                  alt="Modern Apartment"
                  src="https://images.pexels.com/photos/34432716/pexels-photo-34432716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-img"
                />
                <div className="card-badges">
                  <span className="badge new">New</span>
                  <span className="type badge">For Rent</span>
                </div>
              </div>
              <div className="properties-card-content">
                <div className="card-price">
                  <span>₦15,000,000 / Year</span>
                </div>
                <h3 className="card-title">Skyline Penthouse</h3>
                <p className="card-location">Wuse II, Abuja</p>
                <div className="card-specs">
                  <div className="properties-spec-item">
                    <span>3 Beds</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>4 Baths</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>450 SQM</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="properties-property-card">
              <div className="card-image-wrapper">
                <img
                  alt="Commercial Plaza"
                  src="https://images.pexels.com/photos/31032367/pexels-photo-31032367.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-img"
                />
                <div className="card-badges">
                  <span className="type badge">Commercial</span>
                </div>
              </div>
              <div className="properties-card-content">
                <div className="card-price">
                  <span>₦1,200,000,000</span>
                </div>
                <h3 className="card-title">Corporate Tech Plaza</h3>
                <p className="card-location">
                  Central Business District, Abuja
                </p>
                <div className="card-specs">
                  <div className="properties-spec-item">
                    <span>24 Units</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>150 Parking</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>5,000 SQM</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="properties-property-card">
              <div className="card-image-wrapper">
                <img
                  alt="Luxury Estate"
                  src="https://images.pexels.com/photos/17773876/pexels-photo-17773876.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-img"
                />
                <div className="card-badges">
                  <span className="featured badge">Featured</span>
                </div>
              </div>
              <div className="properties-card-content">
                <div className="card-price">
                  <span>₦280,000,000</span>
                </div>
                <h3 className="card-title">Asokoro Heights Duplex</h3>
                <p className="card-location">Asokoro, Abuja</p>
                <div className="card-specs">
                  <div className="properties-spec-item">
                    <span>5 Beds</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>6 Baths</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>800 SQM</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="properties-property-card">
              <div className="card-image-wrapper">
                <img
                  alt="Industrial Land"
                  src="https://images.pexels.com/photos/3855622/pexels-photo-3855622.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-img"
                />
                <div className="card-badges">
                  <span className="type badge">Land</span>
                </div>
              </div>
              <div className="properties-card-content">
                <div className="card-price">
                  <span>₦85,000,000</span>
                </div>
                <h3 className="card-title">Idu Industrial Plot</h3>
                <p className="card-location">Idu Industrial Layout, Abuja</p>
                <div className="card-specs">
                  <div className="properties-spec-item">
                    <span>Level Ground</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>C of O Ready</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>2,500 SQM</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="properties-property-card">
              <div className="card-image-wrapper">
                <img
                  alt="Investment Opportunity"
                  src="https://images.pexels.com/photos/36622005/pexels-photo-36622005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-img"
                />
                <div className="card-badges">
                  <span className="badge new">High ROI</span>
                </div>
              </div>
              <div className="properties-card-content">
                <div className="card-price">
                  <span>₦35,000,000 / Unit</span>
                </div>
                <h3 className="card-title">Gwarinpa Smart Studios</h3>
                <p className="card-location">Gwarinpa, Abuja</p>
                <div className="card-specs">
                  <div className="properties-spec-item">
                    <span>1 Bed</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>1 Bath</span>
                  </div>
                  <div className="properties-spec-item">
                    <span>12% ROI Est.</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="pagination-container">
            <button className="btn btn-sm btn-outline">Previous</button>
            <div className="page-numbers">
              <button className="active page-num">1</button>
              <button className="page-num">2</button>
              <button className="page-num">3</button>
              <span className="dots">...</span>
              <button className="page-num">12</button>
            </div>
            <button className="btn btn-sm btn-outline">Next</button>
          </div>
        </section>
        <section className="advanced-filters-section">
          <div className="filters-layout-wrapper">
            <div className="filters-sidebar">
              <div className="properties-filter-group">
                <h4 className="filter-label">Investment ROI Range</h4>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Min %"
                    className="filter-input"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    placeholder="Max %"
                    className="filter-input"
                  />
                </div>
              </div>
              <div className="properties-filter-group">
                <h4 className="filter-label">Property Amenities</h4>
                <div className="checkbox-grid">
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Swimming Pool</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Smart Home</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Gymnasium</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>CCTV Security</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Solar Power</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Boy&apos;s Quarter</span>
                  </label>
                </div>
              </div>
              <div className="properties-filter-group">
                <h4 className="filter-label">Neighborhood Focus</h4>
                <select className="properties-filter-select">
                  <option>All Abuja Areas</option>
                  <option>Maitama</option>
                  <option>Asokoro</option>
                  <option>Wuse II</option>
                  <option>Guzape</option>
                  <option>Jabi</option>
                </select>
              </div>
            </div>
            <div className="filters-actions-panel">
              <div className="actions-card">
                <h3 className="properties-section-title section-title">
                  Save Your Criteria
                </h3>
                <p className="section-content">
                  Never miss an opportunity. Save your custom filters and get
                  instant notifications when matching properties hit the market.
                </p>
                <div className="actions-group">
                  <button className="btn-primary btn btn-lg">
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
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Save This Search</span>
                  </button>
                  <button className="btn btn-lg btn-secondary">
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    <span>Export Market Report</span>
                  </button>
                </div>
                <div className="sort-options">
                  <span className="sort-label">Sort by:</span>
                  <select className="sort-select">
                    <option>Newest Listed</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest ROI</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="interactive-map-section">
          <div className="map-layout-container">
            <div className="map-visual-area">
              <div className="properties-map-placeholder">
                <img
                  alt="Map View Abuja"
                  src="https://images.pexels.com/photos/27938900/pexels-photo-27938900.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="map-bg-img"
                />
                <div className="map-overlay-layer">
                  <div
                    data-price="₦450M"
                    className="properties-thq-map-pin-elm1 map-pin"
                  >
                    <svg
                      fill="var(--color-primary)"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle r="3" cx="12" cy="10" fill="white"></circle>
                    </svg>
                    <div className="pin-tooltip">
                      <span>Maitama Luxury Villa</span>
                    </div>
                  </div>
                  <div
                    data-price="₦280M"
                    className="properties-thq-map-pin-elm2 map-pin"
                  >
                    <svg
                      fill="var(--color-primary)"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle r="3" cx="12" cy="10" fill="white"></circle>
                    </svg>
                    <div className="pin-tooltip">
                      <span>Asokoro Duplex</span>
                    </div>
                  </div>
                  <div className="properties-thq-map-cluster-elm map-cluster">
                    <span>15+</span>
                  </div>
                </div>
                <div className="map-controls">
                  <button title="Draw Area" className="map-tool-btn">
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
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                      <path d="M2 2l7.5 1.5"></path>
                      <path d="M7.5 3.5L9 9l5.5 1.5"></path>
                    </svg>
                  </button>
                  <button title="Heatmap" className="map-tool-btn">
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
                      <path d="M12 2v20M2 12h20"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="map-sidebar-content">
              <h2 className="properties-section-title section-title">
                Visual Market Intelligence
              </h2>
              <p className="section-content">
                Explore the Abuja property landscape through our interactive
                heatmap. Analyze price density, investment ROI clusters, and
                emerging growth areas in real-time.
              </p>
              <div className="heatmap-legend">
                <div className="legend-item">
                  <span className="color-dot high"></span>
                  <div className="legend-text">
                    <strong>High ROI (12%+)</strong>
                    <span>Emerging Commercial Hubs</span>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="color-dot medium"></span>
                  <div className="legend-text">
                    <strong>Stable Value (8-10%)</strong>
                    <span>Prime Residential Districts</span>
                  </div>
                </div>
              </div>
              <div className="area-stats-card">
                <h4 className="card-mini-title">Selected Area: Maitama</h4>
                <div className="mini-stats-grid">
                  <div className="mini-stat">
                    <span className="stat-val">₦420M</span>
                    <span className="stat-lbl">Avg. Price</span>
                  </div>
                  <div className="mini-stat">
                    <span className="stat-val">9.2%</span>
                    <span className="stat-lbl">Avg. ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="curated-showcase-section">
          <div className="tabs-header">
            <h2 className="properties-section-title section-title">
              Curated Collections
            </h2>
            <div className="tabs-nav-wrapper">
              <div role="tablist" className="tabs-nav">
                <button
                  role="tab"
                  data-target="sale-panel"
                  aria-selected="true"
                  className="active tab-trigger"
                >
                  For Sale
                </button>
                <button
                  role="tab"
                  data-target="rent-panel"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  For Rent
                </button>
                <button
                  role="tab"
                  data-target="comm-panel"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  Commercial
                </button>
                <button
                  role="tab"
                  data-target="land-panel"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  Land
                </button>
                <button
                  role="tab"
                  data-target="invest-panel"
                  aria-selected="false"
                  className="investor-highlight tab-trigger"
                >
                  Investor Picks
                </button>
              </div>
            </div>
          </div>
          <div className="tabs-content-area">
            <div id="sale-panel" className="active tab-panel">
              <div className="curated-grid">
                <div className="curated-hero-card">
                  <img
                    alt="Premium Mansion"
                    src="https://images.pexels.com/photos/28681439/pexels-photo-28681439.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="hero-card-img"
                  />
                  <div className="hero-card-overlay">
                    <span className="collection-tag">Editor&apos;s Choice</span>
                    <h3 className="hero-card-title">
                      The Platinum Collection: Maitama
                    </h3>
                    <p className="hero-card-desc">
                      Exclusive ultra-luxury mansions for the discerning
                      high-net-worth investor.
                    </p>
                    <button className="btn-primary btn">View Collection</button>
                  </div>
                </div>
                <div className="curated-side-list">
                  <div className="mini-property-item">
                    <img
                      alt="Property"
                      src="https://images.pexels.com/photos/29162604/pexels-photo-29162604.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="item-info">
                      <h4>Modern Cork Villa</h4>
                      <p>₦120,000,000</p>
                    </div>
                  </div>
                  <div className="mini-property-item">
                    <img
                      alt="Property"
                      src="https://images.pexels.com/photos/33729480/pexels-photo-33729480.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="item-info">
                      <h4>Skyline Heights</h4>
                      <p>₦85,000,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <dialog id="property-quick-view-modal" className="property-modal">
          <div className="modal-inner-container">
            <button id="close-modal-btn" className="modal-close-btn">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
            <div className="modal-layout-grid">
              <div className="modal-gallery-side">
                <div className="main-modal-img">
                  <img
                    id="modal-main-img"
                    alt="Main Property View"
                    src="https://images.pexels.com/photos/14603131/pexels-photo-14603131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="thumb-strip">
                  <img
                    src="https://images.pexels.com/photos/14603131/pexels-photo-14603131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="active"
                  />
                  <img src="https://images.pexels.com/photos/28681439/pexels-photo-28681439.png?auto=compress&amp;cs=tinysrgb&amp;w=1500" />
                  <img src="https://images.pexels.com/photos/17773876/pexels-photo-17773876.png?auto=compress&amp;cs=tinysrgb&amp;w=1500" />
                </div>
                <div className="virtual-tour-link">
                  <a href="#">
                    <div className="btn btn-sm btn-secondary">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span>Start 3D Virtual Tour</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="modal-info-side">
                <h2 className="properties-section-title section-title modal-title">
                  The Grand Maitama Villa
                </h2>
                <div className="modal-price">
                  <span>₦450,000,000</span>
                </div>
                <div className="roi-snapshot">
                  <div className="roi-chip">
                    <span className="roi-label">Est. Annual ROI</span>
                    <span className="roi-value">9.5%</span>
                  </div>
                  <div className="roi-chip">
                    <span className="roi-label">Capital Apprec.</span>
                    <span className="roi-value">12%/yr</span>
                  </div>
                </div>
                <p className="section-content modal-description">
                  This architectural masterpiece defines luxury living in the
                  heart of Abuja. Featuring smart home integration, private
                  elevator, and Olympic-sized pool.
                </p>
                <form
                  action="/contact"
                  method="POST"
                  data-form-id="bbcc1b74-75d4-4de4-89e1-c9ed9d8a7501"
                  className="modal-inquiry-form"
                >
                  <div className="form-grid">
                    <input
                      type="text"
                      id="thq_textinput_6wO7"
                      name="textinput"
                      required
                      placeholder="Your Name"
                      data-form-field-id="thq_textinput_6wO7"
                      className="modal-input"
                    />
                    <input
                      type="email"
                      id="thq_textinput_kiXV"
                      name="textinput"
                      required
                      placeholder="Email Address"
                      data-form-field-id="thq_textinput_kiXV"
                      className="modal-input"
                    />
                  </div>
                  <textarea
                    id="thq_textarea_0CNH"
                    name="textarea"
                    required
                    placeholder="I'm interested in this property..."
                    data-form-field-id="thq_textarea_0CNH"
                    className="modal-textarea"
                  ></textarea>
                  <div className="form-actions">
                    <button
                      id="thq_button_P4k_"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_P4k_"
                      className="btn-primary btn"
                    >
                      Schedule Viewing
                    </button>
                    <a
                      href="https://wa.me/234000000000"
                      className="properties-link2"
                    >
                      <div className="btn whatsapp-btn btn-secondary">
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
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
                        </svg>
                        <span>WhatsApp</span>
                      </div>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </dialog>
        <section className="market-insights-section">
          <div className="insights-container">
            <div className="insights-header">
              <h2 className="properties-section-title section-title">
                Real-Time Market Snapshot
              </h2>
              <p className="section-content">
                Data-driven insights for the current filtered selection.
              </p>
            </div>
            <div className="stats-grid-container">
              <div className="stat-card-insight">
                <div className="stat-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                </div>
                <div className="stat-content">
                  <span
                    data-target="245"
                    className="animated-counter stat-number"
                  >
                    0
                  </span>
                  <span className="properties-stat-label">
                    Avg. Price (Millions)
                  </span>
                </div>
              </div>
              <div className="stat-card-insight">
                <div className="stat-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="stat-content">
                  <span
                    data-target="42"
                    className="animated-counter stat-number"
                  >
                    0
                  </span>
                  <span className="properties-stat-label">
                    Avg. Days on Market
                  </span>
                </div>
              </div>
              <div className="stat-card-insight">
                <div className="stat-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" x2="12" y1="22.08" y2="12"></line>
                  </svg>
                </div>
                <div className="stat-content">
                  <span
                    data-target="158"
                    className="animated-counter stat-number"
                  >
                    0
                  </span>
                  <span className="properties-stat-label">
                    Available Inventory
                  </span>
                </div>
              </div>
              <div className="stat-card-insight">
                <div className="stat-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="stat-content">
                  <span
                    data-target="9.8"
                    className="animated-counter stat-number"
                  >
                    0
                  </span>
                  <span className="properties-stat-label">
                    Average Annual ROI %
                  </span>
                </div>
              </div>
              <div className="stat-card-insight">
                <div className="stat-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="8.5" cy="7"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </div>
                <div className="stat-content">
                  <span
                    data-target="12"
                    className="animated-counter stat-number"
                  >
                    0
                  </span>
                  <span className="properties-stat-label">
                    New Listings Today
                  </span>
                </div>
              </div>
              <div className="stat-card-insight">
                <div className="stat-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="stat-content">
                  <span
                    data-target="94"
                    className="animated-counter stat-number"
                  >
                    0
                  </span>
                  <span className="properties-stat-label">
                    Investor Confidence %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="listing-cta-section">
          <div className="cta-split-wrapper">
            <div className="cta-text-side">
              <h2 className="properties-section-title section-title">
                Ready To Find Your Next Property Opportunity?
              </h2>
              <p className="section-content">
                Whether you are buying your first home or expanding a commercial
                portfolio, our expert advisors are ready to guide your journey
                with integrity and local expertise.
              </p>
              <div className="cta-buttons-row">
                <button className="btn-primary btn btn-lg">
                  Speak With An Expert
                </button>
                <button className="btn btn-lg btn-outline">
                  Schedule Property Viewing
                </button>
              </div>
              <div className="whatsapp-integration">
                <a
                  href="https://wa.me/234000000000"
                  className="properties-link3"
                >
                  <div className="whatsapp-link">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
                    </svg>
                    <span>Chat with us on WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-form-side">
              <div className="cta-form-card">
                <h3 className="card-title">Quick Inquiry</h3>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="c6b7a423-7624-42a7-a1c7-e1d56564a2d7"
                  className="quick-contact-form"
                >
                  <div className="input-row">
                    <input
                      type="text"
                      id="thq_true_yebJ"
                      name="true"
                      required
                      placeholder="Full Name"
                      data-form-field-id="thq_true_yebJ"
                      className="form-field"
                    />
                  </div>
                  <div className="input-row">
                    <input
                      type="email"
                      id="thq_email_aceC"
                      name="email"
                      required
                      placeholder="Email Address"
                      data-form-field-id="thq_email_aceC"
                      className="form-field"
                    />
                  </div>
                  <div className="input-row">
                    <select
                      id="thq_interest_VKAD"
                      name="interest"
                      data-form-field-id="thq_interest_VKAD"
                      className="form-field"
                    >
                      <option value="buy">Interested in Buying</option>
                      <option value="rent">Interested in Renting</option>
                      <option value="invest">Investment Advisory</option>
                      <option value="manage">Property Management</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_nCJ-"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_nCJ-"
                    className="btn-primary btn btn-xl"
                  >
                    Get Started Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="properties-container2">
          <div className="properties-container3">
            <Script
              html={`<script defer data-name="properties-interactions">
(function(){
  // Property Filter Tab Switching
  const searchTabs = document.querySelectorAll(".search-tab")
  searchTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      searchTabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")
    })
  })

  // Modal Logic
  const modal = document.getElementById("property-quick-view-modal")
  const openModalBtn = document.getElementById("open-modal-1")
  const closeModalBtn = document.getElementById("close-modal-btn")

  if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
      modal.showModal()
    })
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.close()
    })
  }

  // Close modal on outside click
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close()
    }
  })

  // Animated Counters
  const animateCounters = () => {
    const counters = document.querySelectorAll(".animated-counter")
    const speed = 200

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target")
      const count = +counter.innerText
      const inc = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + inc)
        setTimeout(() => animateCounters(), 10)
      } else {
        counter.innerText = target
      }
    })
  }

  // Intersection Observer for Stats
  const statsSection = document.querySelector(".market-insights-section")
  const observerOptions = {
    threshold: 0.5,
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        statsObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (statsSection) {
    statsObserver.observe(statsSection)
  }

  // Curated Tabs Logic
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      tabTriggers.forEach((t) => t.classList.remove("active"))
      trigger.classList.add("active")
      // In a real app, logic to swap content panels would go here
    })
  })

  // Grid/List View Toggle
  const gridTrigger = document.getElementById("grid-view-trigger")
  const listTrigger = document.getElementById("list-view-trigger")
  const propertyGrid = document.getElementById("property-main-grid")

  if (gridTrigger && listTrigger && propertyGrid) {
    gridTrigger.addEventListener("click", () => {
      gridTrigger.classList.add("active")
      listTrigger.classList.remove("active")
      propertyGrid.style.gridTemplateColumns = "repeat(3, 1fr)"
      if (window.innerWidth < 992) propertyGrid.style.gridTemplateColumns = "repeat(2, 1fr)"
      if (window.innerWidth < 768) propertyGrid.style.gridTemplateColumns = "1fr"
    })

    listTrigger.addEventListener("click", () => {
      listTrigger.classList.add("active")
      gridTrigger.classList.remove("active")
      propertyGrid.style.gridTemplateColumns = "1fr"
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="properties-container4">
          <div className="properties-container5">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 5%;
  position: relative;
  overflow: hidden;
}
@media (max-width: 479px) {
section {
  padding: var(--spacing-2xl) 5%;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .properties-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .properties-thq-map-pin-elm1 {
            top: 30%;
            left: 45%;
          }
          .properties-thq-map-pin-elm2 {
            top: 55%;
            left: 60%;
          }
          .properties-thq-map-cluster-elm {
            top: 40%;
            left: 20%;
          }
          .properties-link2 {
            display: contents;
          }
          .properties-link3 {
            display: contents;
          }
          .properties-container2 {
            display: none;
          }
          .properties-container3 {
            display: contents;
          }
          .properties-container4 {
            display: none;
          }
          .properties-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Properties
