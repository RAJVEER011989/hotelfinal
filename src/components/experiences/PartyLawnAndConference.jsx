import { useEffect, useState } from "react";
import FloatingActions from "../FloatingActions.jsx";
import InnerPageHeader from "../InnerPageHeader.jsx";
import Footer from "../Footer.jsx";

import img1 from "../../assets/partylawn/1.png"
import img2 from "../../assets/confrenceroom/1.png";
import ExperienceHighlights from "./ExperienceHighlights.jsx";

const slides = [img1];
const slides2 = [img2];


const faqs = [
  {
    question: "What kind of experiences can be hosted at URRTH?",
    answer:
      "URRTH offers spaces for grand celebrations, elegant banquets, social gatherings, and premium business meetings through its Party Lawn, Banquets, and Conference venue options.",
  },
  {
    question: "Is the Party Lawn suitable for large-scale events?",
    answer:
      "Yes, the Party Lawn is designed for large celebrations and open-air occasions, offering a spacious 1 acre setting for memorable events.",
  },
  {
    question: "How many banquet venue options are available?",
    answer:
      "Our banquet offerings include three distinct venue options — Emerald, Sapphire, and Pearl — each designed to accommodate different event sizes and experiences.",
  },
  {
    question: "Is there a dedicated space for business meetings?",
    answer:
      "Yes, our Conference space is designed for focused professional gatherings and offers a refined setting for smaller meetings and discussions.",
  },
];

export default function PartyLawnAndConferencePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <FloatingActions />
      <InnerPageHeader />

      {/* Cinematic Hero */}
      <section className="banquetHeroCinematic">
        <div className="banquetHeroSlides">
          {slides.map((img, index) => (
            <div
              key={img}
              className={`banquetHeroSlide ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="banquetHeroOverlay" />

        <div className="container banquetHeroContentWrap">
          <div className="banquetHeroContent reveal">
            <div className="kicker banquetHeroKicker">Experience Venue</div>
            <h1>Party Lawn</h1>
            <p>
              A grand 1 acre open-air celebration space designed for weddings,
              receptions, and unforgettable large-scale gatherings with elegance
              and beautiful ambience.
            </p>
          </div>

          <div className="banquetHeroDots" aria-hidden="true">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`banquetHeroDot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="banquetHeroCinematic">
        <div className="banquetHeroSlides">
          {slides2.map((img, index) => (
            <div
              key={img}
              className={`banquetHeroSlide ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="banquetHeroOverlay" />

        <div className="container banquetHeroContentWrap">
          <div className="banquetHeroContent reveal">
            <h1>Conference</h1>
            <p>
              A refined 12 seater meeting space designed for focused discussions,
              presentations, and professional interactions in a calm and premium
              environment.
            </p>
          </div>

          <div className="banquetHeroDots" aria-hidden="true">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`banquetHeroDot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

     <ExperienceHighlights/>

      {/* FAQs */}
      <section className="faqSection">
        <div className="container">
          <div className="faqIntro reveal">
            <h2>FAQs</h2>
          </div>

          <div className="faqList reveal">
            {faqs.map((item) => (
              <details key={item.question} className="faqItem">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}