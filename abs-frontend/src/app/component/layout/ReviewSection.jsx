"use client";

import Container from "./Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ahmed El-Sayed",
    role: "Operations Director, Orascom",
    comment:
      "ABS Global made our ISO 9001 certification journey seamless. Their expertise and hands-on approach helped us achieve compliance in record time. Highly recommended!",
    stars: 5,
    avatar: "AE",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    role: "Quality Manager, Juhayna",
    comment:
      "Professional, knowledgeable, and responsive. The team at ABS Global exceeded our expectations with their thorough audit and consulting services for ISO 22000.",
    stars: 5,
    avatar: "SM",
  },
  {
    id: 3,
    name: "Khaled Hassan",
    role: "CEO, TechNile Solutions",
    comment:
      "We partnered with ABS Global for our ISO 27001 certification. Their structured methodology and deep understanding of information security made the entire process smooth and efficient.",
    stars: 4.5,
    avatar: "KH",
  },
  {
    id: 4,
    name: "Fatima Al-Rashid",
    role: "HSE Manager, Arabian Cement",
    comment:
      "Outstanding service! ABS Global's consultants were incredibly thorough in helping us implement ISO 45001. Our workplace safety has improved dramatically since certification.",
    stars: 5,
    avatar: "FA",
  },
  {
    id: 5,
    name: "Mohamed Youssef",
    role: "Plant Manager, ElSewedy",
    comment:
      "ABS Global delivered on every promise. Their ISO 14001 consulting was comprehensive and practical. Our environmental management system is now a competitive advantage.",
    stars: 4.5,
    avatar: "MY",
  },
  {
    id: 6,
    name: "Nadia Ibrahim",
    role: "IT Director, Palm Hills",
    comment:
      "From gap analysis to final audit, ABS Global provided exceptional support. Their team is genuinely invested in their clients' success. Will definitely work with them again.",
    stars: 5,
    avatar: "NI",
  },
];

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="review-star filled" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} className="review-star filled" />);
    } else {
      stars.push(<FaRegStar key={i} className="review-star empty" />);
    }
  }
  return <div className="review-stars">{stars}</div>;
}

export default function ReviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="review-section" ref={ref}>
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label-center">Testimonials</span>
          <h2 className="section-title section-title-center">
            What Our Clients
            <span className="section-title-accent"> Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Hear from the organizations we have helped achieve international certification
            and operational excellence.
          </p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <FaQuoteLeft className="review-quote-icon" />
              <p className="review-comment">{review.comment}</p>
              <StarRating rating={review.stars} />
              <div className="review-author">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-author-info">
                  <span className="review-author-name">{review.name}</span>
                  <span className="review-author-role">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
