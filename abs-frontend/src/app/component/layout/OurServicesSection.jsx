"use client";

import Container from "./Container";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentCheck,
  HiOutlineBuildingOffice2,
  HiOutlineBeaker,
  HiOutlineTruck,
  HiOutlineHeart,
  HiOutlineLockClosed,
  HiOutlineComputerDesktop,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const certifications = [
  {
    id: 1,
    image: "/iso9001.jpg",
    // title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Establish a robust quality management system to consistently deliver products and services that meet customer expectations.",
    icon: HiOutlineShieldCheck,
    color: "#3776bd",
  },
  {
    id: 2,
    image: "/iso14001.jpg",
    // title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    description: "Implement an effective environmental management system to minimize your ecological footprint and comply with regulations.",
    icon: HiOutlineGlobeAlt,
    color: "#22c55e",
  },
  {
    id: 3,
    image: "/iso45001.jpg",
    // title: "ISO 45001:2018",
    subtitle: "Occupational Health and Safety Management System",
    description: "Create a safe and healthy workplace by identifying and managing occupational health and safety risks.",
    icon: HiOutlineHeart,
    color: "#ef4444",
  },
  {
    id: 4,
    image: "/iso22000.jpg",
    // title: "ISO 22000:2018",
    subtitle: "Food Safety Management System",
    description: "Ensure food safety across the entire supply chain with internationally recognized management systems.",
    icon: HiOutlineClipboardDocumentCheck,
    color: "#f59e0b",
  },
  {
    id: 5,
    image: "/haccp.jpg",
    // title: "ISO 27001:2022",
    subtitle: "Food Safety",
    description: "Protect your organization's information assets with a comprehensive information security management system.",
    icon: HiOutlineLockClosed,
    color: "#8b5cf6",
  },
];

export default function OurServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? certifications : certifications.slice(0, 8);

  return (
    <section id="services" className="services-section" ref={ref}>
      <Container>
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label-center">Our Services</span>
          <h2 className="section-title section-title-center">
            ISO Certification
            <span className="section-title-accent"> Solutions</span>
          </h2>
          <p className="section-subtitle">
            We provide comprehensive ISO certification services across a wide range
            of international standards. Our expert auditors guide you through every
            step of the certification journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="services-grid">
          {displayed.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div
                  className="service-card-icon"
                  style={{ background: `${cert.color}14`, color: cert.color }}
                >
                  <Icon size={28} />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{cert.title}</h3>
                  <p className="service-card-subtitle">{cert.subtitle}</p>
                  <p className="service-card-desc">{cert.description}</p>
                </div>
                <div
                  className="service-card-accent"
                  style={{ background: cert.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View more / less */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {!showAll ? (
            <button
              className="services-view-more-btn"
              onClick={() => setShowAll(true)}
            >
              View More Certifications
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
