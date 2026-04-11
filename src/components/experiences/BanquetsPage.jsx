import { Link } from "react-router-dom";
import FloatingActions from "../FloatingActions.jsx";
import InnerPageHeader from "../InnerPageHeader.jsx";
import Footer from "../Footer.jsx";
import ExperienceNavigator from "../experiences/ExperienceNavigator.jsx"


import emeraldImg from "../../assets/banquets/emerald/1.jpg";
import sapphireImg from "../../assets/banquets/sapphire/1.jpeg";
import pearlImg from "../../assets/banquets/pearl/1.jpeg";

const banquetData = [
  {
    title: "Emerald",
    image: emeraldImg,
    route: "/experiences/banquets/emerald",
    description:
      "Our grand banquet venue designed for large-scale celebrations, elegant weddings, and unforgettable gatherings. Emerald offers expansive space, refined ambience, and a premium setting for occasions that deserve a magnificent backdrop.",
    features: ["8000 sq ft", "Ideal for grand events", "Elegant large-format venue"],
  },
  {
    title: "Sapphire",
    image: sapphireImg,
    route: "/experiences/banquets/sapphire",
    description:
      "A beautifully balanced banquet space crafted for mid-sized celebrations, social events, and curated occasions. Sapphire blends comfort, sophistication, and functionality for gatherings that feel refined and memorable.",
    features: ["3000 sq ft", "Perfect for social events", "Elegant event setting"],
  },
  {
    title: "Pearl",
    image: pearlImg,
    route: "/experiences/banquets/pearl",
    description:
      "An intimate and graceful banquet venue ideal for smaller celebrations, private functions, and meaningful gatherings. Pearl offers warmth, elegance, and a premium atmosphere for more personal occasions.",
    features: ["1500 sq ft", "Ideal for intimate events", "Warm and refined ambience"],
  },
];

const banquetFaqs = [
  {
    question: "What banquet options are available at URRTH?",
    answer:
      "URRTH offers three banquet venues — Emerald, Sapphire, and Pearl — each designed for different scales of celebrations and event experiences.",
  },
  {
    question: "Which banquet is best for large celebrations or weddings?",
    answer:
      "Emerald is our grand banquet venue and is ideal for large-scale celebrations, weddings, and events that require a spacious and elegant setting.",
  },
  {
    question: "Which banquet is suitable for mid-sized gatherings?",
    answer:
      "Sapphire is a great choice for mid-sized social functions, celebrations, and curated events where both comfort and elegance matter.",
  },
  {
    question: "Do you have a banquet option for intimate gatherings?",
    answer:
      "Yes, Pearl is designed for smaller celebrations, private functions, and more intimate gatherings with a warm and refined ambience.",
  },
  {
    question: "Can I enquire about banquet availability and event requirements?",
    answer:
      "Yes, you can contact us to enquire about availability, venue suitability, and arrangements for your specific celebration or event.",
  },
];

export default function BanquetsPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="banquetsPageHero">
        <div className="container">
          <div className="banquetsPageHeroInner reveal">
            <h1>Banquets</h1>
            <p>
              Elegant venues at URRTH designed for celebrations of every scale — from
              grand weddings and curated social events to intimate gatherings that
              deserve a refined and memorable setting.
            </p>
          </div>
        </div>
      </section>

      <section className="banquetsPageSections">
        <div className="container">
          {banquetData.map((item, index) => (
            <div
              key={item.title}
              className={`banquetShowcase reveal ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="banquetShowcaseImageWrap">
                <img src={item.image} alt={item.title} className="banquetShowcaseImage" />
              </div>

              <div className="banquetShowcaseContent">
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="banquetFeatureList">
                  {item.features.map((feature) => (
                    <span key={feature} className="banquetFeatureChip">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="banquetShowcaseActions">
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
      <ExperienceNavigator current={"banquets"}/>

      <section className="faqSection">
        <div className="container">
          <div className="faqIntro reveal">
            <h2>FAQs</h2>
          </div>

          <div className="faqList reveal">
            {banquetFaqs.map((item) => (
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