"use client";

import Container from "./Container";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ── Dummy partner logos (text-based placeholders styled as logo cards) ── */
const partners = [
  { id: 1, name: "Orascom Construction", initials: "OC" },
  { id: 2, name: "ElSewedy Electric", initials: "SE" },
  { id: 3, name: "Talaat Moustafa Group", initials: "TM" },
  { id: 4, name: "Juhayna Food Industries", initials: "JF" },
  { id: 5, name: "Eastern Company", initials: "EC" },
  { id: 6, name: "Palm Hills Developments", initials: "PH" },
  { id: 7, name: "Americana Group", initials: "AG" },
  { id: 8, name: "Arabian Cement Company", initials: "AC" },
  { id: 9, name: "Emaar Misr", initials: "EM" },
  { id: 10, name: "Hassan Allam Holding", initials: "HA" },
  { id: 11, name: "Ezz Steel", initials: "EZ" },
  { id: 12, name: "Vodafone Egypt", initials: "VE" },
];

const stats = [
  { label: "Customer Satisfaction", value: 1548, suffix: "+" },
  { label: "Daily Data Input", value: 25, suffix: "+" },
  { label: "Years Experience", value: 9, suffix: "+" },
];

/* ── Count-up hook ── */
function useCountUp(target, isInView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

function StatCard({ label, value, suffix, isInView, delay }) {
  const count = useCountUp(value, isInView);

  return (
    <motion.div
      className="partner-stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <span className="partner-stat-number">
        {count}
        <span className="partner-stat-suffix">{suffix}</span>
      </span>
      <span className="partner-stat-label">{label}</span>
    </motion.div>
  );
}

export default function OurPartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? partners : partners.slice(0, 8);

  return (
    <section id="partners" className="partners-section" ref={ref}>
      <Container>
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label-center">Our Partners</span>
          <h2 className="section-title section-title-center">
            Trusted by
            <span className="section-title-accent"> Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            We are proud to have partnered with leading organizations across
            diverse industries, helping them achieve and maintain international standards.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="partners-stats-row">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              isInView={isInView}
              delay={0.2 + i * 0.15}
            />
          ))}
        </div>

        {/* Partners grid */}
        <div className="partners-grid">
          {displayed.map((partner, i) => (
            <motion.div
              key={partner.id}
              className="partner-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <div className="partner-card-logo">{partner.initials}</div>
              <span className="partner-card-name">{partner.name}</span>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {!showAll ? (
            <button
              className="services-view-more-btn"
              onClick={() => setShowAll(true)}
            >
              View All Clients
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          ) : (
            <button
              className="services-view-more-btn"
              onClick={() => setShowAll(false)}
            >
              Show Less
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
