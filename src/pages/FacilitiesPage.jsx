import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";
import FacilitiesHighlights from "../pages/FacilitiesHighlights.jsx";
import FacilitiesFaqs from "./FacilitiesFaqs.jsx";

import kidsImg from "../assets/facilities/kidsplay.jpg";
import spaImg from "../assets/facilities/spa.jpg";
import gymImg from "../assets/facilities/gym.jpg";
import coffeeImg from "../assets/facilities/coffee.jpg";
import parkingImg from "../assets/facilities/parking.jpg";

const facilitySections = [
  {
    title: "Kids Play Area",
    kicker: "Facilities",
    image: kidsImg,
    description:
      "A professionally developed soft zone for kids, thoughtfully created to offer a safe, playful, and joyful environment for younger guests.",
  },
  {
    title: "Parking",
    kicker: "Facilities",
    image: parkingImg,
    description:
      "A spacious parking area spread across approximately 40000 sq ft, designed to ensure ease, convenience, and smooth access for guests and events.",
  },
  {
    title: "Coffee Shop",
    kicker: "Facilities",
    image: coffeeImg,
    description:
      "A warm and inviting coffee space ideal for relaxed moments, casual conversations, and comforting breaks throughout the day.",
  },
  {
    title: "Spa",
    kicker: "Facilities",
    image: spaImg,
    description:
      "A calm wellness space designed for relaxation, rejuvenation, and quiet indulgence, complementing the comfort and hospitality experience at URRTH.",
  },
  {
    title: "Gym",
    kicker: "Facilities",
    image: gymImg,
    description:
      "A dedicated fitness space for guests who wish to maintain an active routine in a clean, energizing, and premium environment.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader />

      {facilitySections.map((section, index) => (
        <section
          key={section.title}
          className={`facilityHeroSection ${index === 0 ? "firstFacilityHero" : ""}`}
        >
          <div
            className="facilityHeroBg"
            style={{ backgroundImage: `url(${section.image})` }}
          />

          <div className="facilityHeroOverlay" />

          <div className="container facilityHeroContentWrap">
            <div className="facilityHeroContent reveal">
              <h1>{section.title}</h1>
              <p>{section.description}</p>
            </div>
          </div>
        </section>
      ))}

      <FacilitiesHighlights />
      <FacilitiesFaqs />
      <Footer />
    </>
  );
}