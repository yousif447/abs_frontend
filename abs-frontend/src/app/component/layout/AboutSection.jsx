"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section" ref={ref}>
      <Container>
        <div className="about-grid">
          {/* Left side – Text */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label">About ABS Global</span>
            <h2 className="section-title">
              Driving Excellence through
              <span className="section-title-accent"> Quality & Compliance</span>
            </h2>
            <p className="about-desc">
              Founded with a vision to bridge the gap between global standards and local
              businesses, ABS Global has become one of the most trusted names in ISO
              certification and management consulting across the Middle East and Africa.
            </p>
            <p className="about-desc">
              Our team of expert auditors and consultants are committed to helping your
              organization implement robust management systems that drive efficiency,
              reduce risk, and foster continuous improvement.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>Accredited Certification Body</span>
              </div>
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>International ISO Standards</span>
              </div>
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>End-to-End Consulting Support</span>
              </div>
            </div>

            <Link href="/about" className="about-btn">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Right side – Image */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <Image
                src="/about-team.png"
                alt="ABS Global Team"
                fill
                className="about-image"
              />
              {/* Decorative accent */}
              <div className="about-image-accent" />
              <div className="about-image-accent-2" />
            </div>

            {/* Floating stats card */}
            <div className="about-float-card">
              <span className="about-float-number">9+</span>
              <span className="about-float-label">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
