import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import kidsImg from "../assets/facilities/kidsplay.jpg";
import spaImg from "../assets/facilities/spa.jpg";
import gymImg from "../assets/facilities/gym.jpg";
import coffeeImg from "../assets/facilities/coffee.jpg";

const facilitySlides = [
  {
    title: "Kids Play Area",
    image: kidsImg,
  },
  {
    title: "Spa",
    image: spaImg,
  },
  {
    title: "Gym",
    image: gymImg,
  },
  {
    title: "Coffee Shop",
    image: coffeeImg,
  },
];

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facilitySlides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="facilitiesSplitSection" id="facilities">
      <div className="facilitiesSplitWrap">
        <div className="facilitiesContent">
          <div className="facilitiesInner reveal">
            <h2>Facilities</h2>

            <p>
              Thoughtfully designed comforts at URRTH that enhance every stay —
              from spacious parking and a professionally developed soft zone for
              kids to wellness, fitness, and leisure experiences crafted for
              convenience and ease.
            </p>

            <div className="facilitiesTags">
              <span>Parking · 40000 sqft</span>
              <span>Kids Play Area</span>
              <span>Spa</span>
              <span>Coffee Shop</span>
              <span>Gym</span>
            </div>

            <Link to="/facilities" className="btn outline light">
              Explore More
            </Link>
          </div>
        </div>

        <div className="facilitiesImageWrap">
          {facilitySlides.map((item, index) => (
            <div
              key={item.title}
              className={`facilitiesSlide ${index === activeIndex ? "active" : ""}`}
            >
              <img src={item.image} alt={item.title} />
            </div>
          ))}

          <div className="facilitiesImageOverlay" />


          <div className="facilitiesSlideDots" aria-hidden="true">
            {facilitySlides.map((_, index) => (
              <span
                key={index}
                className={`facilitiesDot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <div className="facilitiesShine" />
        </div>
      </div>
    </section>
  );
}