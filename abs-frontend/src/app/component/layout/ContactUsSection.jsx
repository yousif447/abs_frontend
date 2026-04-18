"use client";

import Container from "./Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdAccessTime,
} from "react-icons/md";

export default function ContactUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label-center">Contact Us</span>
          <h2 className="section-title section-title-center">
            Get in
            <span className="section-title-accent"> Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question or ready to start your certification journey? Reach out to us
            and our team will be happy to assist you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left – Map & Info */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Map */}
            <div className="contact-map-wrapper">
              <iframe
                title="ABS Global Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.123456789!2d31.2357!3d29.9602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzM2LjciTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info cards */}
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <MdAccessTime size={22} />
                </div>
                <div>
                  <h4 className="contact-info-card-title">Regular Opening Hours</h4>
                  <p className="contact-info-card-text">
                    Saturday to Thursday<br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <MdOutlineLocationOn size={22} />
                </div>
                <div>
                  <h4 className="contact-info-card-title">Maadi Branch</h4>
                  <p className="contact-info-card-text">
                    3B El Mohandseen Towers, Corniche El Maadi, 18th floor,
                    Al Isaweyah, Maadi, Cairo Governorate, Egypt
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <MdOutlinePhone size={22} />
                </div>
                <div>
                  <h4 className="contact-info-card-title">Landline</h4>
                  <p className="contact-info-card-text">
                    <a href="tel:+20233731792" className="contact-phone-link">
                      +20 2 3373 1792
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="contact-form-title">Send Us a Message</h3>

              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-form-label">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-form-label">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-mobile" className="contact-form-label">
                  Mobile Number
                </label>
                <input
                  id="contact-mobile"
                  type="tel"
                  placeholder="+20 1XX XXX XXXX"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="contact-form-textarea"
                />
              </div>

              <button type="submit" className="contact-form-btn">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
