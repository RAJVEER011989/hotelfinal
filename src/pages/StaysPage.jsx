import { Link } from "react-router-dom";
import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";

import deluxeImg from "../assets/stays/DeluxeRoomImages/deluxe-room.jpeg";
import familyImg from "../assets/stays/FamilyRoomImages/family-room.jpg";
import suiteImg from "../assets/stays/SuiteRoomImages/suite-room.jpg";
import presidentialImg from "../assets/stays/PresidentialSuiteRoomImages/presidential-suite.jpg";

const roomData = [
  {
    title: "Deluxe Rooms",
    image: deluxeImg,
    route: "/stays/deluxe-rooms",
    description:
      "Thoughtfully designed for comfort and calm, our Deluxe Rooms offer a refined stay experience with elegant interiors, warm textures, and a soothing ambience that feels both luxurious and inviting.",
    features: ["Elegant interiors", "Comfort-focused stay", "Warm premium ambience"],
  },
  {
    title: "Family Rooms",
    image: familyImg,
    route: "/stays/family-rooms",
    description:
      "Created for togetherness, our Family Rooms provide generous space, comfort, and convenience for memorable stays with loved ones, blending warmth, practicality, and effortless elegance.",
    features: ["Spacious layout", "Ideal for families", "Comfort and convenience"],
  },
  {
    title: "Suite Rooms",
    image: suiteImg,
    route: "/stays/suite-rooms",
    description:
      "Our Suite Rooms bring together style, space, and sophistication, offering an elevated hospitality experience with beautifully curated interiors for guests who appreciate refined comfort.",
    features: ["Luxury experience", "Spacious and stylish", "Curated interiors"],
  },
  {
    title: "Presidential Suite",
    image: presidentialImg,
    route: "/stays/presidential-suite",
    description:
      "The Presidential Suite is the finest expression of URRTH hospitality — an exclusive, grand, and beautifully crafted space for those seeking a stay marked by prestige, indulgence, and timeless elegance.",
    features: ["Exclusive luxury", "Grand signature stay", "Timeless elegance"],
  },
];

const faqData = [
  {
    question: "What room categories are available at URRTH?",
    answer:
      "We offer Deluxe Rooms, Family Rooms, Suite Rooms, and a Presidential Suite, each thoughtfully designed for a distinct stay experience.",
  },
  {
    question: "Which room type is best for family stays?",
    answer:
      "Our Family Rooms are ideal for guests travelling together, offering added space, comfort, and convenience for a relaxed family stay.",
  },
  {
    question: "Do you have premium suite options for special occasions?",
    answer:
      "Yes, our Suite Rooms and Presidential Suite are designed for guests seeking a more exclusive and elevated hospitality experience.",
  },
  {
    question: "Can I explore room details before booking?",
    answer:
      "Yes, you can open each room page individually to view its gallery, highlights, amenities, and frequently asked questions before making an enquiry.",
  },
];

export default function StaysPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="staysPageHero">
        <div className="container">
          <div className="staysPageHeroInner reveal">
            <h1>Signature Stays</h1>
            <p>
              URRTH — a stay that stays with you, crafted with comfort, care, and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      <section className="staysPageSections">
        <div className="container">
          {roomData.map((room, index) => (
            <div
              key={room.title}
              className={`stayShowcase reveal ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="stayShowcaseImageWrap">
                <img src={room.image} alt={room.title} className="stayShowcaseImage" />
              </div>

              <div className="stayShowcaseContent">
                <h2>{room.title}</h2>
                <p>{room.description}</p>

                <div className="stayFeatureList">
                  {room.features.map((feature) => (
                    <span key={feature} className="stayFeatureChip">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="stayShowcaseActions">
                  <Link to={room.route} className="btn primary">
                    Explore
                  </Link>
                  <Link to="/" className="btn outline">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faqSection">
        <div className="container">
          <div className="faqIntro reveal">
            <h2>FAQs</h2>
          </div>

          <div className="faqList reveal">
            {faqData.map((item) => (
              <details key={item.question} className="faqItem">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}