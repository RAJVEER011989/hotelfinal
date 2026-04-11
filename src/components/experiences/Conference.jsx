import { useEffect, useState } from "react";
import FloatingActions from "../FloatingActions.jsx";
import InnerPageHeader from "../InnerPageHeader.jsx";
import Footer from "../Footer.jsx";

import ExperienceHighlights from "./ExperienceHighlights.jsx";
import ExperienceFaqs from "./ExperienceFaqs.jsx";
import ExperienceNavigator from "../experiences/ExperienceNavigator.jsx"


import img1 from "../../assets/confrenceroom/1.png";
const slides = [img1];

export default function Conference() {
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

      <ExperienceHighlights type="conference" />
      <ExperienceNavigator current={"conference"}/>
      <ExperienceFaqs type="conference" />
      <Footer />
    </>
  );
}