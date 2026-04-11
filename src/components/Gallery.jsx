import { useEffect, useMemo, useRef, useState } from "react";

import img1 from "../assets/slides/20.png";
import img2 from "../assets/slides/2.jpeg";
import img3 from "../assets/slides/3.jpeg";
import img4 from "../assets/slides/4.jpeg";
import img5 from "../assets/slides/5.jpeg";
import img6 from "../assets/slides/6.jpeg";
import img7 from "../assets/slides/7.jpeg";
import img8 from "../assets/slides/14.jpeg";
import img9 from "../assets/slides/15.jpeg";
import img10 from "../assets/slides/17.jpeg";
import img11 from "../assets/slides/19.jpeg";



const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img11 ];

export default function Gallery() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);
  const movedRef = useRef(false);

  const doubledImages = useMemo(
    () => [...galleryImages, ...galleryImages],
    []
  );

  useEffect(() => {
    document.body.style.overflow = viewerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewerOpen]);

  const openViewer = (index = 0) => {
    if (movedRef.current) return;
    setActiveIndex(index % galleryImages.length);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const getCurrentTranslateX = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  };

  const handlePointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;

    setIsDragging(true);
    movedRef.current = false;

    const clientX = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
    startXRef.current = clientX;
    startTranslateRef.current = getCurrentTranslateX();

    track.style.animation = "none";
    track.style.transform = `translateX(${startTranslateRef.current}px)`;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const track = trackRef.current;
    const slider = sliderRef.current;
    if (!track || !slider) return;

    const clientX = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
    const delta = clientX - startXRef.current;

    if (Math.abs(delta) > 6) movedRef.current = true;

    let nextX = startTranslateRef.current + delta;

    const singleWidth = track.scrollWidth / 2;

    if (nextX > 0) {
      nextX = nextX - singleWidth;
      startTranslateRef.current = nextX;
      startXRef.current = clientX;
    }

    if (Math.abs(nextX) >= singleWidth) {
      nextX = 0;
      startTranslateRef.current = 0;
      startXRef.current = clientX;
    }

    track.style.transform = `translateX(${nextX}px)`;
  };

  const handlePointerUp = () => {
    const track = trackRef.current;
    if (!track) return;

    setTimeout(() => {
      movedRef.current = false;
    }, 0);

    setIsDragging(false);
    track.style.transform = "";
    track.style.animation = "";
  };

  return (
    <>
      <section className="galleryHomeSection" id="gallery">
        <div className="container">
          <div className="galleryHomeIntro reveal">
            <h2>Gallery</h2>
            <p>
              A glimpse into the spaces, ambience, and experiences that shape URRTH.
            </p>
          </div>

          <div
            ref={sliderRef}
            className="galleryMarqueeViewport reveal"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            <div
              ref={trackRef}
              className={`galleryMarqueeTrack ${isDragging ? "dragging" : ""}`}
            >
              {doubledImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className="galleryThumbCard"
                  onClick={() => openViewer(index)}
                  aria-label={`Open gallery image ${(index % galleryImages.length) + 1}`}
                >
                  <img
                    src={image}
                    alt={`Gallery ${(index % galleryImages.length) + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="galleryHomeActions reveal">
            <button
              type="button"
              className="btn outline"
              onClick={() => openViewer(0)}
            >
              View All
            </button>
          </div>
        </div>
      </section>

      {viewerOpen && (
        <div
          className="galleryViewerOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
        >
          <button
            type="button"
            className="galleryViewerClose"
            onClick={closeViewer}
            aria-label="Close gallery"
          >
            ✕
          </button>

          <button
            type="button"
            className="galleryViewerNav left"
            onClick={showPrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="galleryViewerContent">
            <img
              src={galleryImages[activeIndex]}
              alt={`Gallery full view ${activeIndex + 1}`}
              className="galleryViewerImage"
            />
          </div>

          <button
            type="button"
            className="galleryViewerNav right"
            onClick={showNext}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="galleryViewerCount">
            {activeIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}