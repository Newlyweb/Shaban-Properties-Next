import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container1">
        <Head>
          <title>About-Us - Shaban Properties</title>
          <meta property="og:title" content="About-Us - Shaban Properties" />
          <link
            rel="canonical"
            href="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/about-us"
          />
          <meta
            property="og:url"
            content="https://conscious-tasty-caterpillar-utml4o.teleporthq.site/about-us"
          />
        </Head>
        <Navigation></Navigation>
        <section className="company-hero">
          <div className="company-hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/37694699/15982757_360_640_30fps.mp4"
              loop
              muted
              autoPlay="true"
              playsInline
              className="company-hero-video"
            ></video>
            <div className="company-hero-overlay"></div>
          </div>
          <div className="company-hero-content">
            <h1 className="hero-title">
              Building Wealth Through Exceptional Properties
            </h1>
            <p className="hero-subtitle">
              Helping individuals, families, investors, and businesses discover,
              acquire, manage, and maximize valuable real estate opportunities
              across Nigeria.
            </p>
            <div className="company-hero-actions">
              <a href="#team" className="about-us-link1">
                <div className="btn-primary btn btn-lg">
                  <span>Meet the Team</span>
                </div>
              </a>
              <a href="#story" className="about-us-link2">
                <div className="btn btn-lg btn-outline">
                  <span>Our Story</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="mission-vision-values">
          <div className="mvv-container">
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </svg>
                </div>
                <h2 className="section-title">Our Mission</h2>
                <p className="section-content">
                  To provide seamless property experiences by combining local
                  market expertise with transparency and professional integrity,
                  creating long-term value for our clients.
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide-eye lucide"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </svg>
                </div>
                <h2 className="section-title">Our Vision</h2>
                <p className="section-content">
                  To be the most trusted real estate partner in Nigeria,
                  recognized for architectural excellence, investment
                  intelligence, and stabilizing wealth through property.
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide-shield-check lucide"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h2 className="section-title">Core Values</h2>
                <p className="section-content">
                  Integrity, Transparency, Expertise, and a Client-First
                  approach guide every transaction and management strategy we
                  execute at Shaban Properties.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="story" className="company-timeline">
          <div className="timeline-header">
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="timeline-track-wrapper">
            <div className="timeline-track">
              <div className="timeline-item">
                <span className="timeline-year">2015</span>
                <div className="timeline-dot"></div>
                <div className="timeline-content-card">
                  <h3 className="section-subtitle">The Foundation</h3>
                  <p className="section-content">
                    Shaban Properties founded in Abuja with a vision to
                    revolutionize the local real estate market through
                    transparency.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2017</span>
                <div className="timeline-dot"></div>
                <div className="timeline-content-card">
                  <h3 className="section-subtitle">Expansion</h3>
                  <p className="section-content">
                    Launched comprehensive Property Management services,
                    securing our first portfolio of 50+ luxury residential
                    units.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2019</span>
                <div className="timeline-dot"></div>
                <div className="timeline-content-card">
                  <h3 className="section-subtitle">Major Milestones</h3>
                  <p className="section-content">
                    Facilitated first multi-billion Naira commercial investment
                    deal in the heart of Abuja&apos;s business district.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2021</span>
                <div className="timeline-dot"></div>
                <div className="timeline-content-card">
                  <h3 className="section-subtitle">Diaspora Solutions</h3>
                  <p className="section-content">
                    Established dedicated Diaspora Investment desk, connecting
                    Nigerians abroad with secure local property opportunities.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2024</span>
                <div className="timeline-dot"></div>
                <div className="timeline-content-card">
                  <h3 className="section-subtitle">Future Forward</h3>
                  <p className="section-content">
                    Recognized as Abuja&apos;s premier luxury real estate firm,
                    managing over 500+ properties nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="leadership-team">
          <div className="team-container">
            <div className="team-header">
              <h2 className="section-title">Our Leadership</h2>
              <p className="section-content">
                Guiding Shaban Properties with decades of combined market
                expertise and strategic vision.
              </p>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Executive Leadership"
                    src="https://images.pexels.com/photos/20719271/pexels-photo-20719271.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Alhaji Ibrahim Shaban</h3>
                  <p className="team-role">Founder &amp; CEO</p>
                  <p className="section-content">
                    Visionary leader with 20+ years in West African real estate
                    investment and development.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Operations Leadership"
                    src="https://images.pexels.com/photos/37198880/pexels-photo-37198880.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Engr. Amina Bello</h3>
                  <p className="team-role">Head of Operations</p>
                  <p className="section-content">
                    Expert in property management systems and large-scale
                    facility coordination.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Investment Advisory"
                    src="https://images.pexels.com/photos/37198883/pexels-photo-37198883.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">David Okoro</h3>
                  <p className="team-role">Investment Director</p>
                  <p className="section-content">
                    Specialist in ROI-driven property acquisition and commercial
                    portfolio growth.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Legal Counsel"
                    src="https://images.pexels.com/photos/33719837/pexels-photo-33719837.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Barr. Zainab Yusuf</h3>
                  <p className="team-role">Legal &amp; Compliance</p>
                  <p className="section-content">
                    Ensuring transparent documentation and seamless legal
                    closing for every client.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Sales Director"
                    src="https://images.pexels.com/photos/33619257/pexels-photo-33619257.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Samuel Adeyemi</h3>
                  <p className="team-role">Head of Sales</p>
                  <p className="section-content">
                    Luxury property expert with a deep network across
                    Abuja&apos;s high-value districts.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Client Relations"
                    src="https://images.pexels.com/photos/33729480/pexels-photo-33729480.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Sarah Johnson</h3>
                  <p className="team-role">Client Relations Manager</p>
                  <p className="section-content">
                    Dedicated to providing personalized experiences for our
                    local and diaspora clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-metrics">
          <div className="metrics-grid">
            <div className="metric-card">
              <div data-target="1200" className="metric-number">
                <span>0</span>
              </div>
              <p className="section-subtitle">Properties Sold</p>
            </div>
            <div className="metric-card">
              <div data-target="500" className="metric-number">
                <span>0</span>
              </div>
              <p className="section-subtitle">Properties Managed</p>
            </div>
            <div className="metric-card">
              <div data-target="2500" className="metric-number">
                <span>0</span>
              </div>
              <p className="section-subtitle">Happy Clients</p>
            </div>
            <div className="metric-card">
              <div data-target="10" className="metric-number">
                <span>0</span>
              </div>
              <p className="section-subtitle">Years Experience</p>
            </div>
            <div className="metric-card">
              <div data-target="85" className="metric-number">
                <span>0</span>
              </div>
              <p className="section-subtitle">Investment Deals</p>
            </div>
            <div className="metric-card">
              <div data-target="98" className="metric-number">
                <span>0</span>
              </div>
              <p className="section-subtitle">% Retention Rate</p>
            </div>
          </div>
        </section>
        <section className="trusted-partners">
          <div className="partners-container">
            <h2 className="section-title">Our Strategic Network</h2>
            <div className="partners-grid">
              <div className="partner-item">
                <div className="partner-logo-box">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="partner-icon"
                  >
                    <path d="M3 21h18"></path>
                    <path d="M3 7v1a3 3 0 0 0 6 0V7"></path>
                    <path d="M9 7v1a3 3 0 0 0 6 0V7"></path>
                    <path d="M15 7v1a3 3 0 0 0 6 0V7"></path>
                    <path d="M19 21v-4a2 2 0 0 1 2-2v-2H3v2a2 2 0 0 1 2 2v4"></path>
                    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
                  </svg>
                </div>
                <p className="section-content">Abuja Developers Association</p>
              </div>
              <div className="partner-item">
                <div className="partner-logo-box">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="partner-icon"
                  >
                    <rect x="2" y="3" rx="2" width="20" height="14"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <p className="section-content">Federal Mortgage Bank</p>
              </div>
              <div className="partner-item">
                <div className="partner-logo-box">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="partner-icon"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <p className="section-content">NIESV Certified Firm</p>
              </div>
              <div className="partner-item">
                <div className="partner-logo-box">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="partner-icon"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <p className="section-content">
                  International Property Network
                </p>
              </div>
              <div className="partner-item">
                <div className="partner-logo-box">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="partner-icon"
                  >
                    <path d="M2 20h20"></path>
                    <path d="M7 20v-5l5-5 5 5v5"></path>
                    <path d="M12 10V4"></path>
                    <path d="m15 7-3-3-3 3"></path>
                  </svg>
                </div>
                <p className="section-content">Abuja Investment Corp</p>
              </div>
              <div className="partner-item">
                <div className="partner-logo-box">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="partner-icon"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="section-content">ISO 9001 Quality Standard</p>
              </div>
            </div>
          </div>
        </section>
        <section className="success-stories">
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <svg
                      fill="var(--color-primary)"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      opacity="0.2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 3 5v1zm11 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4 3 5v1z"></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    &quot;Shaban Properties made my transition from London to
                    Abuja seamless. Their local market expertise and
                    professional negotiation saved me millions on my luxury
                    villa.&quot;
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img
                        alt="Investor"
                        src="https://images.pexels.com/photos/5662819/pexels-photo-5662819.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      />
                    </div>
                    <div className="author-details">
                      <p className="author-name">Dr. Emeka Nwosu</p>
                      <p className="author-role">Diaspora Investor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button className="active carousel-dot"></button>
              <button className="carousel-dot"></button>
              <button className="carousel-dot"></button>
            </div>
          </div>
        </section>
        <section className="leadership-consultation">
          <div className="consultation-split">
            <div className="consultation-info">
              <h2 className="section-title">
                Ready To Find Your Next Property Opportunity?
              </h2>
              <p className="section-content">
                Speak directly with our senior advisors to discuss your real
                estate goals, investment strategy, or property management needs.
              </p>
              <div className="contact-methods">
                <div className="contact-item">
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
                    className="contact-icon"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="section-content">+234 (0) 800 SHABAN</span>
                </div>
                <div className="contact-item">
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
                    className="contact-icon"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                  </svg>
                  <span className="section-content">WhatsApp Consultation</span>
                </div>
              </div>
              <div className="consultation-actions">
                <button className="btn-primary btn btn-lg">
                  Speak To An Advisor
                </button>
              </div>
            </div>
            <div className="consultation-form-wrapper">
              <form
                action="#"
                method="POST"
                data-form-id="e22c98ac-7257-477d-8b8b-325690ccd05d"
                className="consultation-form"
              >
                <div className="form-group">
                  <label className="section-content">Full Name</label>
                  <input
                    type="text"
                    id="thq_textinput_97Ej"
                    name="textinput"
                    required
                    placeholder="Enter your name"
                    data-form-field-id="thq_textinput_97Ej"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="section-content">Email Address</label>
                  <input
                    type="email"
                    id="thq_textinput_0MFL"
                    name="textinput"
                    required
                    placeholder="email@example.com"
                    data-form-field-id="thq_textinput_0MFL"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="section-content">Inquiry Type</label>
                  <select
                    id="thq_select_HP7z"
                    name="select"
                    data-form-field-id="thq_select_HP7z"
                    className="form-input"
                  >
                    <option>Investment Advisory</option>
                    <option>Property Management</option>
                    <option>Buying/Leasing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="section-content">Message</label>
                  <textarea
                    id="thq_textarea_QWfq"
                    name="textarea"
                    rows="4"
                    required
                    placeholder="How can we help you?"
                    data-form-field-id="thq_textarea_QWfq"
                    className="form-input"
                  ></textarea>
                </div>
                <button
                  id="thq_button_q1Zy"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_q1Zy"
                  className="btn-accent btn w-full btn-lg"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="about-us-container2">
          <div className="about-us-container3">
            <Script
              html={`<script defer data-name="shaban-about-logic">
(function(){
  // Animated Counters for Trust Metrics
  const animateCounters = () => {
    const counters = document.querySelectorAll(".metric-number")
    const speed = 200

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target")
        const count = +counter.innerText
        const inc = target / speed

        if (count < target) {
          counter.innerText = Math.ceil(count + inc)
          setTimeout(updateCount, 1)
        } else {
          counter.innerText = target
        }
      }

      // Intersection Observer to start animation when visible
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            updateCount()
            observer.unobserve(counter)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(counter)
    })
  }

  // Simple Parallax for Hero
  const heroParallax = () => {
    window.addEventListener("scroll", () => {
      const scroll = window.pageYOffset
      const video = document.querySelector(".company-hero-video")
      if (video) {
        video.style.transform = \`translateY(\${scroll * 0.3}px)\`
      }
    })
  }

  // Staggered Fade-in for Team Cards
  const revealTeam = () => {
    const teamCards = document.querySelectorAll(".team-card")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    teamCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      observer.observe(card)
    })
  }

  // Initialize All
  animateCounters()
  heroParallax()
  revealTeam()

  // Form Handling (Visual Only)
  const forms = document.querySelectorAll(".consultation-form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const btn = form.querySelector('button[type="submit"]')
      const originalText = btn.innerText
      btn.innerText = "Sending..."
      btn.disabled = true

      setTimeout(() => {
        btn.innerText = "Consultation Requested ✓"
        btn.style.backgroundColor = "#2ecc71"
        form.reset()
      }, 1500)
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="about-us-container4">
          <div className="about-us-container5">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
}
</style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .about-us-link1 {
            display: contents;
          }
          .about-us-link2 {
            display: contents;
          }
          .about-us-container2 {
            display: none;
          }
          .about-us-container3 {
            display: contents;
          }
          .about-us-container4 {
            display: none;
          }
          .about-us-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
