import { Link } from "react-router-dom";
import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";

import shoshaImg from "../assets/dine/shosha/shosha.jpg";
import levelupImg from "../assets/dine/levelup/levelup.jpg";
import daawatImg from "../assets/dine/dawat/dawat.jpg";

const dineData = [
  {
    title: "Sho-Sha Rooftop Restaurant with PDR",
    image: shoshaImg,
    route: "/dine/sho-sha-rooftop",
    description:
      "An elevated rooftop dining experience crafted for memorable evenings, scenic ambience, and refined hospitality. Sho-Sha brings together atmosphere, flavour, and a private dining space for intimate celebrations and exclusive gatherings.",
    features: ["Rooftop ambience", "Private Dining Room", "Perfect for evenings"],
  },
  {
    title: "Level-Up Terrace Lounge with PDR",
    image: levelupImg,
    route: "/dine/level-up-terrace-lounge",
    description:
      "A vibrant terrace lounge designed for relaxed luxury, social energy, and stylish moments. Level-Up offers a contemporary setting with a premium feel, complemented by a private dining area for special occasions and curated experiences.",
    features: ["Terrace lounge", "Private Dining Room", "Modern social setting"],
  },
  {
    title: "Daawat Fine Dine Restaurant",
    image: daawatImg,
    route: "/dine/daawat-fine-dine",
    description:
      "An elegant fine dining space where rich flavours, graceful service, and timeless ambience come together. Daawat is designed for meaningful family meals, celebratory dining, and refined culinary experiences.",
    features: ["Fine dine experience", "Elegant ambience", "Curated hospitality"],
  },
];

const faqData = [
  {
    question: "What dining options are available at URRTH?",
    answer:
      "URRTH offers Sho-Sha Rooftop Restaurant with PDR, Level-Up Terrace Lounge with PDR, and Daawat Fine Dine Restaurant — each designed with a distinct experience and ambience.",
  },
  {
    question: "Do you offer private dining spaces?",
    answer:
      "Yes, both Sho-Sha Rooftop Restaurant and Level-Up Terrace Lounge include private dining room options for more intimate and exclusive gatherings.",
  },
  {
    question: "Which dining space is best for special evenings or celebrations?",
    answer:
      "Sho-Sha Rooftop and Level-Up Terrace Lounge are ideal for elevated evening experiences, while Daawat offers a more elegant and classic fine dine setting.",
  },
  {
    question: "Can I explore each restaurant separately before visiting?",
    answer:
      "Yes, each dining venue can have its own dedicated page, allowing guests to explore the ambience and experience before making a visit or enquiry.",
  },
];

export default function DinePage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="dinePageHero">
        <div className="container">
          <div className="dinePageHeroInner reveal">
            <h1>Dine In</h1>
            <p>
              Discover dining experiences at URRTH where ambience, flavour, and
              hospitality come together to create moments that feel elevated,
              memorable, and beautifully curated.
            </p>
          </div>
        </div>
      </section>

      <section className="dinePageSections">
        <div className="container">
          {dineData.map((item, index) => (
            <div
              key={item.title}
              className={`dineShowcase reveal ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="dineShowcaseImageWrap">
                <img src={item.image} alt={item.title} className="dineShowcaseImage" />
              </div>

              <div className="dineShowcaseContent">
                {/* <div className="kicker">Dining Experience</div> */}
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="dineFeatureList">
                  {item.features.map((feature) => (
                    <span key={feature} className="dineFeatureChip">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="dineShowcaseActions">
                  <Link to={item.route} className="btn primary">
                    Explore Venue
                  </Link>
                  <Link to="/enquiry" className="btn outline">
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