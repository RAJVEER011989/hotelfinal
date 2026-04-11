import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";

const aboutSections = [
  {
    title: "A destination shaped by warmth and elegance",
    description:
      "At URRTH, hospitality is expressed through warmth, grace, and thoughtful detail. Every element is created to offer guests a stay experience that feels refined, welcoming, and memorable from the very first moment.",
  },
  {
    title: "More than a stay",
    description:
      "URRTH is designed to be more than a place to stay. It is a destination where comfort meets celebration, where elegant spaces create meaningful moments, and where every experience feels personal and beautifully curated.",
  },
  {
    title: "Celebrate Every Occasion",
    description:
      "Whether it is a peaceful getaway, a family gathering, or a special celebration, URRTH brings together refined ambience, attentive hospitality, and timeless charm to make every occasion feel extraordinary.",
  },
];

const aboutFaqs = [
  {
    question: "What is URRTH known for?",
    answer:
      "URRTH is known for refined stays, elegant hospitality, and thoughtfully designed spaces that make every occasion feel memorable.",
  },
  {
    question: "Is URRTH only for accommodation?",
    answer:
      "No, URRTH is more than a stay destination. It is also designed for celebrations, gatherings, and meaningful guest experiences.",
  },
  {
    question: "What kind of experience can guests expect at URRTH?",
    answer:
      "Guests can expect warmth, comfort, elegant surroundings, and hospitality that feels both personal and premium.",
  },
  {
    question: "Is URRTH suitable for family visits and celebrations?",
    answer:
      "Yes, URRTH is designed to welcome families, leisure guests, and those looking to celebrate special occasions in a refined setting.",
  },
  {
    question: "Can I make an enquiry through the website?",
    answer:
      "Yes, you can connect with us through the enquiry options available on the website for stays, celebrations, and other requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="aboutTextHero">
        <div className="container">
          <div className="aboutTextHeroInner reveal">
            <h1>About Us</h1>
            <p>
              URRTH is a destination where refined stays, elegant spaces, and heartfelt
              hospitality come together to create experiences that feel memorable,
              personal, and truly special.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutTextSection">
        <div className="container">
          <div className="aboutTextWrap">
            {aboutSections.map((section, index) => (
              <div key={section.title} className="aboutTextBlock reveal">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {index !== aboutSections.length - 1 ? (
                  <div className="aboutDivider" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="container">
          <div className="faqIntro reveal">
            <h2>FAQs</h2>
          </div>

          <div className="faqList reveal">
            {aboutFaqs.map((item) => (
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