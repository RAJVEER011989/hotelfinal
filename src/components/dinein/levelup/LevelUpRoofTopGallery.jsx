import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import shosha1 from "../../../assets/dine/levelup/1.png";
import shosha2 from "../../../assets/dine/levelup/2.png";
import shosha3 from "../../../assets/dine/levelup/3.png";
import shosha4 from "../../../assets/dine/levelup/4.png";


export default function ShoShaRoofTopGallery() {
  const images = useMemo(
    () => [shosha1, shosha2, shosha3, shosha4 ],
    []
  );

  const marqueeImages = [...images, ...images];
  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = (index) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="roomGallerySection">
        <div className="container">

          <div className="premiumGalleryWrap reveal">
            <div className="premiumGalleryFade left" />
            <div className="premiumGalleryFade right" />

            <div className="premiumGalleryTrack">
              {marqueeImages.map((img, index) => {
                const realIndex = index % images.length;
                return (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    className="premiumGalleryCard"
                    onClick={() => openImage(realIndex)}
                  >
                    <img src={img} alt={`Room view ${realIndex + 1}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="premiumLightbox" onClick={closeImage}>
          <div
            className="premiumLightboxInner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="premiumLightboxClose"
              onClick={closeImage}
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="premiumLightboxNav left"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>

            <div className="premiumLightboxMain">
              <img
                src={images[activeIndex]}
                alt={`Room preview ${activeIndex + 1}`}
              />
            </div>

            <button
              type="button"
              className="premiumLightboxNav right"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>

            <div className="premiumLightboxThumbs">
              {images.map((img, index) => (
                <button
                  key={img}
                  type="button"
                  className={`premiumThumb ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}