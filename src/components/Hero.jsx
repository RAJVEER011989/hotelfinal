import { useEffect, useState } from "react";
import { SLIDES } from "../data/content.js";

function isTouchDevice() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // slider
  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  // close menu on outside click (touch only)
  useEffect(() => {
    function onDocClick(e) {
      if (!isTouchDevice()) return;
      const menuArea = document.getElementById("menuArea");
      if (!menuArea) return;
      if (!menuArea.contains(e.target)) setMenuOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="slides" id="slides">
        {SLIDES.map((url, i) => (
          <div
            key={url}
            className={`slide ${i === slideIndex ? "active" : ""}`}
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>

      {/* Header overlay (no box) */}
      <div className="headerOverlay">
        <div className="announce">
          Global Stage: Evergreen Retreat shines at the Seven Stars Luxury Hospitality & Lifestyle Awards 2025
        </div>

        <div className="topRow">
          <div />

          <a className="logoCenter" href="#top" aria-label="Home">
            <span className="leafMark" aria-hidden="true" />
            <span>Evergreen</span>
          </a>

          <div className="menuArea" id="menuArea">
            <div
              className="menuBtn"
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={(e) => {
                if (!isTouchDevice()) return;
                e.stopPropagation();
                setMenuOpen((v) => !v);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (!isTouchDevice()) return;
                  e.preventDefault();
                  setMenuOpen((v) => !v);
                }
              }}
            >
              Menu
              <span className="burger" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>

            <div className={`dropdown ${menuOpen ? "open" : ""}`} role="menu" aria-label="Menu">
              <div className="groupTitle">Explore</div>
              <a href="#about" role="menuitem" onClick={() => isTouchDevice() && setMenuOpen(false)}>
                About <span>→</span>
              </a>
              <a href="#stays" role="menuitem" onClick={() => isTouchDevice() && setMenuOpen(false)}>
                Room Stays <span>→</span>
              </a>
              <a href="#dine" role="menuitem" onClick={() => isTouchDevice() && setMenuOpen(false)}>
                Dine <span>→</span>
              </a>
              <a href="#gallery" role="menuitem" onClick={() => isTouchDevice() && setMenuOpen(false)}>
                Gallery <span>→</span>
              </a>

              <div className="groupTitle">Quick</div>
              <a href="#book" role="menuitem" onClick={() => isTouchDevice() && setMenuOpen(false)}>
                Booking <span>→</span>
              </a>
              <a href="#contact" role="menuitem" onClick={() => isTouchDevice() && setMenuOpen(false)}>
                Contact <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero center title */}
      <div className="heroCenter" aria-hidden="true">
        <div className="heroTitleWrap">
          <div className="heroScript">Evergreen Retreat</div>
          <div className="heroSub">The perfect destination for luxury stays, celebrations, and grand weddings.</div>
        </div>
      </div>

      {/* Dots */}
      <div className="dots" aria-hidden="true">
        {SLIDES.map((_, i) => (
          <div key={i} className={`dot ${i === slideIndex ? "on" : ""}`} />
        ))}
      </div>
    </header>
  );
}