import { useEffect, useState } from "react";
import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";
import BanquetNavigator from "../BanquetNavigator.jsx";

import BanquetHighlights from "../BanquetHighlights.jsx";
import BanquetFaqs from "../BanquetFaqs.jsx";

import img1 from "../../../assets/banquets/emerald/1.jpg";

const slides = [img1];

export default function Emerald() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

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
            <h1>Emerald</h1>
            <p>
              A grand 8000 sq ft banquet venue designed for large-scale celebrations, weddings,
              and unforgettable gatherings with refined elegance.
            </p>
          </div>

          {/* <div className="banquetHeroDots" aria-hidden="true">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`banquetHeroDot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div> */}
        </div>
      </section>

      <BanquetHighlights type="emerald" />
<BanquetNavigator current="emerald" />
<BanquetFaqs />
<Footer />
      <Footer />
    </>
  );
}