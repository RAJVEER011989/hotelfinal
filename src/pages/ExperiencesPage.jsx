import { Link } from "react-router-dom";
import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";

import lawnImg from "../assets/dine/shosha/shosha.jpg";
import banquetImg from "../assets/dine/shosha/shosha.jpg";
import conferenceImg from "../assets/dine/shosha/shosha.jpg";

const experienceData = [
  {
    title: "Party Lawn",
    image: lawnImg,
    route: "/experiences/party-lawn",
    description:
      "A grand open-air destination designed for unforgettable celebrations, weddings, and large gatherings. Our lush 1 acre party lawn offers scale, elegance, and a beautiful setting for memorable occasions.",
    features: ["1 Acre Lush Lawn", "Open-Air Celebrations", "Ideal for Grand Events"],
  },
  {
    title: "Banquets",
    image: banquetImg,
    route: "/experiences/banquets",
    description:
      "Thoughtfully designed banquet spaces crafted for weddings, social gatherings, and elegant celebrations. Each venue offers a distinct scale and ambience to suit different event experiences.",
    features: [
      "Emerald — 8000 sq ft",
      "Sapphire — 3000 sq ft",
      "Pearl — 1500 sq ft",
    ],
  },
  {
    title: "Conference",
    image: conferenceImg,
    route: "/experiences/conference",
    description:
      "A refined and functional setting for meetings, presentations, focused conversations, and premium business interactions. Designed for comfort, privacy, and a professional atmosphere.",
    features: ["12 Seater", "Professional Setting", "Ideal for Meetings"],
  },
];

const faqData = [
  {
    question: "What kind of experiences can be hosted at URRTH?",
    answer:
      "URRTH offers spaces for grand celebrations, elegant banquets, social gatherings, and premium business meetings through its Party Lawn, Banquets, and Conference venue options.",
  },
  {
    question: "Is the Party Lawn suitable for large-scale events?",
    answer:
      "Yes, the Party Lawn is designed for large celebrations and open-air occasions, offering a spacious 1 acre setting for memorable events.",
  },
  {
    question: "How many banquet venue options are available?",
    answer:
      "Our banquet offerings include three distinct venue options — Emerald, Sapphire, and Pearl — each designed to accommodate different event sizes and experiences.",
  },
  {
    question: "Is there a dedicated space for business meetings?",
    answer:
      "Yes, our Conference space is designed for focused professional gatherings and offers a refined setting for smaller meetings and discussions.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="experiencesPageHero">
        <div className="container">
          <div className="experiencesPageHeroInner reveal">
            <h1>Experiences</h1>
            <p>
              Discover spaces at URRTH designed for celebrations, gatherings, and
              meaningful moments — where scale, elegance, and ambience come together
              to create truly memorable experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="experiencesPageSections">
        <div className="container">
          {experienceData.map((item, index) => (
            <div
              key={item.title}
              className={`experienceShowcase reveal ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="experienceShowcaseImageWrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="experienceShowcaseImage"
                />
              </div>

              <div className="experienceShowcaseContent">
                <div className="kicker">Experience</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="experienceFeatureListPage">
                  {item.features.map((feature) => (
                    <span key={feature} className="experienceFeatureChipPage">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="experienceShowcaseActions">
                  <Link to={item.route} className="btn primary">
                    Explore Venue
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