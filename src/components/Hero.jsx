import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SLIDES } from "../data/content.js";
import logo from "../assets/logo/TM (2).png";
import SiteMenu from "./SiteMenu.jsx";

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="slides" id="slides">
        {SLIDES.map((url, index) => (
          <div
            key={index}
            className={`slide ${index === slideIndex ? "active" : ""}`}
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>

      <div className="headerOverlay">
        <div className="topRow">
          <div />

          <Link className="logoCenter" to="/" aria-label="Home">
            {/* <img src={logo1} alt="Urtth" className="mainLogo" /> */}
          </Link>

          <div className="menuArea">
            <SiteMenu />
          </div>
        </div>
      </div>

      <div className="heroCenter" aria-hidden="true">
        <div className="heroTitleWrap">
          <img src={logo} alt="Urtth" className="heroLogo" />
        </div>
      </div>

      {/* <div className="dots" aria-hidden="true">
        {SLIDES.map((_, index) => (
          <div key={index} className={`dot ${index === slideIndex ? "on" : ""}`} />
        ))}
      </div> */}
    </header>
  );
}