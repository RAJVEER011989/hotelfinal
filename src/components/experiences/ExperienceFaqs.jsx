export default function ExperienceFaqs() {
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

  const faqs = faqData ;

  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqIntro reveal">
          <h2>FAQs</h2>
        </div>

        <div className="faqList reveal">
          {faqs.map((item, index) => (
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