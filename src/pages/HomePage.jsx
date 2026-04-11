import FloatingActions from "../components/FloatingActions.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Stays from "../components/Stays.jsx";
import Dine from "../components/Dine.jsx";
import Gallery from "../components/Gallery.jsx";
import BookingContact from "../components/BookingContact.jsx";
import Footer from "../components/Footer.jsx";
import Experiences from "../components/Experiences.jsx";
import Facilities from "../components/Facilities.jsx";

export default function HomePage() {
  return (
    <>
      <FloatingActions />
      <Hero />
      <About />
      <Stays />
      <Experiences/>
      <Dine />
      <Facilities/>
      <Gallery />
      <Footer />
    </>
  );
}