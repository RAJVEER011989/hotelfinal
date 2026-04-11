import { useEffect, useState } from "react";
import FloatingActions from "../FloatingActions.jsx";
import InnerPageHeader from "../InnerPageHeader.jsx";
import Footer from "../Footer.jsx";

import ExperienceHighlights from "./ExperienceHighlights.jsx";
import ExperienceFaqs from "./ExperienceFaqs.jsx";

import img1 from "../../assets/partylawn/1.png"
import ExperienceNavigator from "../experiences/ExperienceNavigator.jsx"

const slides = [img1];

export default function PartyLawn() {
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

      <ExperienceHighlights type="partylawn" />
       <ExperienceNavigator current={"partylawn"}/>
      <ExperienceFaqs type="partylawn" />
      <Footer />
    </>
  );
}