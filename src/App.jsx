import { useEffect } from "react";
import FloatingActions from "./components/FloatingActions.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Stays from "./components/Stays.jsx";
import Dine from "./components/Dine.jsx";
import Gallery from "./components/Gallery.jsx";
import BookingContact from "./components/BookingContact.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";

export default function App() {
  // Reveal-on-scroll (global)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <FloatingActions />
      <Hero />
      <BackgroundMusic />
      <About />
      <Stays />
      <Dine />
      <Gallery />
      <BookingContact />
      <Footer />
    </>
  );
}