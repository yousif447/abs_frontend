"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      {/* Background image */}
      <div className="hero-image-wrapper">
        <Image
          src="/hero-bg.png"
          alt="ABS Global Corporate Office"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-text-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Trusted ISO Certification Partner
          </span>

          <h1 className="hero-title">
            Empowering Businesses with
            <span className="hero-title-highlight"> Global Standards</span>
          </h1>

          <p className="hero-description">
            ABS Global delivers world-class ISO certification, management consulting,
            and quality assurance services — helping organizations achieve excellence,
            compliance, and sustainable growth across every industry.
          </p>

          <div className="hero-cta-group">
            <Link href="/services" className="hero-btn-primary">
              Explore Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact-us" className="hero-btn-secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="hero-scroll-mouse">
            <div className="hero-scroll-wheel" />
          </div>
          <span className="hero-scroll-text">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
