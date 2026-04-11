import { useEffect, useState } from "react";
import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";

import BanquetHighlights from "../BanquetHighlights.jsx";
import BanquetFaqs from "../BanquetFaqs.jsx";

import img1 from "../../../assets//banquets/pearl/1.jpeg"
import img2 from "../../../assets//banquets/pearl/2.jpeg";
import img3 from "../../../assets//banquets/pearl/3.jpeg";
import BanquetNavigator from "../BanquetNavigator.jsx";

const slides = [img1, img2, img3];

export default function Pearl() {
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

            <h1>Pearl</h1>
            <p>
              An intimate and graceful 1500 sq ft banquet venue designed for smaller celebrations,
              private functions, and meaningful gatherings in a warm, elegant, and
              refined setting.
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

      <BanquetHighlights type="pearl" />
      <BanquetNavigator current="pearl" />
      <BanquetFaqs />
      <Footer />
    </>
  );
}