import { useState, useEffect } from "react";
import { GALLERY } from "../data/content.js";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GALLERY.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <>
      <section className="section compact" id="gallery">
        <div className="container">
          <div className="headlineCenter reveal big">
            <h2 style={{ fontSize: "clamp(44px, 5.2vw, 70px)" }}>Gallery</h2>
            <p style={{ marginTop: 10 }}>
              Experience the property through our curated visuals.
            </p>

            <div style={{ marginTop: 20 }}>
              <button className="btn primary" onClick={() => openGallery(0)}>
                View All
              </button>
            </div>
          </div>

          {/* Preview grid */}
          <div className="masonry reveal">
            {GALLERY.slice(0, 4).map((g, i) => (
              <div
                key={g.cap}
                className="shot"
                onClick={() => openGallery(i)}
                style={{ cursor: "pointer" }}
              >
                <img alt={g.alt} src={g.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="galleryModal" onClick={closeGallery}>
          <div className="galleryContent" onClick={(e) => e.stopPropagation()}>
            <button className="galleryClose" onClick={closeGallery}>
              ✕
            </button>

            <button className="galleryNav left" onClick={prev}>
              ‹
            </button>

            <img
              src={GALLERY[currentIndex].src}
              alt={GALLERY[currentIndex].alt}
              className="galleryImage"
            />

            <button className="galleryNav right" onClick={next}>
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}