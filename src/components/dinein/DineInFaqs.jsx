export default function DineInFaqs() {
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

  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqIntro reveal">
          <h2>FAQs</h2>
        </div>

        <div className="faqList reveal">
          {faqData.map((item, index) => (
            <details key={index} className="faqItem">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}